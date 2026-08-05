package com.babata.chip.controller.rest;

import com.babata.chip.common.UserCache;
import com.babata.chip.common.enums.AuthorityEnum;
import com.babata.chip.common.response.BaseResponse;
import com.babata.chip.config.AvatarFileAllowedTypeConfig;
import com.babata.chip.config.RSAConfig;
import com.babata.chip.repository.AdminRepository;
import com.babata.chip.repository.LoginRepository;
import com.babata.chip.repository.entity.AdminDO;
import com.babata.chip.repository.entity.LoginDO;
import com.babata.chip.util.DateUtil;
import com.babata.chip.util.FileUtil;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;



import java.io.File;
import java.io.IOException;
import java.text.ParseException;
import java.util.Date;
import java.util.Objects;

import static com.babata.chip.util.ResponseUtil.buildErrorResponse;
import static com.babata.chip.util.ResponseUtil.buildSuccessResponse;

@RestController
public class AdminRestController {
    @Resource
    AdminRepository adminRepository;

    @Resource
    LoginRepository loginRepository;

    @Value("${files.path.avatar-file-path}")
    private String AVATAR_FILE_PATH;

    @Autowired
    private AvatarFileAllowedTypeConfig avatarFileAllowedTypeConfig;

    @Autowired
    private RSAConfig rsaConfig;

    @PostMapping("/api/admin/authentication")
    public BaseResponse login(@RequestParam(name = "username") String username, @RequestParam(name = "password") String password,
                              HttpServletRequest request) throws ParseException {
        String ip = UserCache.getUserContext().getIp();
        LoginDO lastLogin = loginRepository.getLatestLoginByIp(ip);
        if (lastLogin != null && lastLogin.getLoginFlag() != 1) {
            // 相同ip，登录请求频率过快
            long duration = DateUtil.getDateDiffSecs(lastLogin.getLoginDate(), new Date());
            if (duration < 5) {
                return buildErrorResponse("您的登录频率太快，请稍后再试！");
            }
        }

        // 解密
        username = rsaConfig.decrypt(username);
        password = rsaConfig.decrypt(password);

        LoginDO loginDO = new LoginDO();
        loginDO.setIp(UserCache.getUserContext().getIp());
        loginDO.setLocation(UserCache.getUserContext().getLocation());
        loginDO.setUsername(username);
        loginDO.setPassword(password);
        loginDO.setLoginDate(new Date());
        loginDO.setPlatform(UserCache.getUserContext().getPlatform());
        loginDO.setBrowser(UserCache.getUserContext().getBrowser());
        loginDO.setVersion(UserCache.getUserContext().getVersion());

        AdminDO adminDO = adminRepository.getAdminByUsername(username);
        if (adminDO == null || !Objects.equals(adminDO.getPassword(), password)) {
            loginDO.setLoginFlag((byte) 0);
            loginRepository.addLoginRecord(loginDO);
            return buildErrorResponse("用户名不存在或密码错误！");
        }

        HttpSession session = request.getSession();
        if (session.getAttribute("username") != null && Objects.equals(session.getAttribute("username"), username)) {
            // 重复登录
            loginDO.setLoginFlag((byte) 2);
            loginRepository.addLoginRecord(loginDO);
            return buildErrorResponse("您已经登录，请勿重复登录！");
        }

        loginDO.setLoginFlag((byte) 1);
        loginRepository.addLoginRecord(loginDO);

        session.setAttribute("userid", adminDO.getId());
        session.setAttribute("username", adminDO.getUsername());
        session.setAttribute("nickname", adminDO.getNickname());
        session.setAttribute("sex", adminDO.getSex());
        session.setAttribute("authority", adminDO.getAuthority());
        session.setMaxInactiveInterval(60 * 60 * 24); // session过期时间24小时
        return buildSuccessResponse();
    }

    @DeleteMapping("/api/admin/authentication")
    public BaseResponse logout(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.invalidate();
        return buildSuccessResponse();
    }

    @GetMapping("/api/admin/logout")
    public BaseResponse logout2(HttpServletRequest request, HttpServletResponse response) throws IOException {
        HttpSession session = request.getSession();
        session.invalidate();
        response.sendRedirect("/login");
        return buildSuccessResponse();
    }

    @PostMapping("/api/admin")
    public BaseResponse addAdmin(@RequestParam String username, @RequestParam String nickname, @RequestParam String password,
                                 @RequestParam String sex, @RequestParam Byte authority) {
        if (!Objects.equals(UserCache.getUserContext().getAuthority(), AuthorityEnum.SUPER.getCode())) {
            return buildErrorResponse("无权限新增");
        }
        AdminDO admin = new AdminDO();
        admin.setUsername(username);
        admin.setNickname(nickname);
        admin.setPassword(password);
        admin.setSex(sex);
        admin.setAuthority(authority);
        admin.setAvatar("head.jfif");
        admin.setRegisterDate(new Date());
        adminRepository.addAdmin(admin);
        return buildSuccessResponse();
    }

    @PutMapping("/api/admin")
    public BaseResponse editAdmin(@RequestParam("id") Integer id, @RequestParam("username") String username, @RequestParam("password") String password,
                                  @RequestParam("nickname") String nickname, @RequestParam("sex") String sex, @RequestParam("authority") Byte authority,
                                  HttpServletRequest request) {
        if (!Objects.equals(UserCache.getUserContext().getAuthority(), AuthorityEnum.SUPER.getCode())
                && !Objects.equals(UserCache.getUserContext().getUserid(), id)) {
            return buildErrorResponse("无权限修改");
        }
        AdminDO admin = new AdminDO();
        admin.setId(id);
        admin.setUsername(username);
        admin.setNickname(nickname);
        admin.setSex(sex);
        admin.setPassword(password);
        admin.setAuthority(authority);
        adminRepository.updateAdmin(admin);
        if (UserCache.getUserContext().getUserid().equals(id)) {
            HttpSession session = request.getSession();
            session.setAttribute("nickname", nickname);
            session.setAttribute("sex", sex);
            session.setAttribute("authority", authority);
        }
        return buildSuccessResponse();
    }

    @DeleteMapping("/api/admin")
    public BaseResponse deleteAdmin(@RequestParam Integer id) {
        if (!Objects.equals(UserCache.getUserContext().getAuthority(), AuthorityEnum.SUPER.getCode())) {
            return buildErrorResponse("无权限删除");
        }
        adminRepository.deleteAdmin(id);
        return buildSuccessResponse();
    }

    @PostMapping("/api/admin/avatar")
    public BaseResponse addAdminAvatar(@RequestParam("file") MultipartFile file) {
        String username = UserCache.getUserContext().getUsername();
        if (file.isEmpty()) {
            return buildErrorResponse("文件为空");
        }

        String fileType = FileUtil.getFileType(Objects.requireNonNull(file.getOriginalFilename()));
        if (!avatarFileAllowedTypeConfig.isAllowedType(fileType)) {
            return buildErrorResponse("文件类型不合法");
        }
        try {
            String fileName = username + "." + fileType;
            File f = new File(AVATAR_FILE_PATH, fileName);
            file.transferTo(f);
            AdminDO admin = adminRepository.getAdminById(UserCache.getUserContext().getUserid());
            admin.setAvatar(fileName);
            adminRepository.updateAdmin(admin);
        } catch (Exception e) {
            return buildErrorResponse("更新头像失败:" + e.getMessage());
        }
        return buildSuccessResponse();
    }

//    public static void main(String[] args) throws NoSuchAlgorithmException {
//        KeyPairGenerator keGen = KeyPairGenerator.getInstance("RSA");
//        keGen.initialize(512);
//        KeyPair keyPair = keGen.generateKeyPair();
//        String publicKey = Base64.getEncoder().encodeToString(keyPair.getPublic().getEncoded());
//        String privateKey = Base64.getEncoder().encodeToString(keyPair.getPrivate().getEncoded());
//        System.out.println(publicKey);
//        System.out.println("==============");
//        System.out.println(privateKey);
//
//    }
}
