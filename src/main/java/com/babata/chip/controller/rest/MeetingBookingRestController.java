package com.babata.chip.controller.rest;

import com.babata.chip.common.UserCache;
import com.babata.chip.common.dto.MeetingBookingDTO;
import com.babata.chip.common.enums.AuthorityEnum;
import com.babata.chip.common.request.MeetingBookingRequest;
import com.babata.chip.common.response.BaseResponse;
import com.babata.chip.repository.MeetingBookingRepository;
import jakarta.annotation.Resource;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeParseException;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import static com.babata.chip.util.ResponseUtil.buildErrorResponse;
import static com.babata.chip.util.ResponseUtil.buildSuccessResponse;

@RestController
public class MeetingBookingRestController {
    private static final String PENDING = "PENDING";
    private static final List<String> ALLOWED_STATUSES = List.of(PENDING, "CONFIRMED", "COMPLETED", "CANCELLED");

    @Resource
    private MeetingBookingRepository meetingBookingRepository;

    @PostMapping("/api/booking")
    public BaseResponse create(@RequestBody MeetingBookingRequest request) {
        if (request == null || StringUtils.isBlank(request.getName()) || StringUtils.isBlank(request.getEmail())
                || StringUtils.isBlank(request.getTopic()) || request.getName().length() > 128
                || request.getEmail().length() > 256 || request.getTopic().length() > 4000
                || !request.getEmail().contains("@")) {
            return buildErrorResponse("请完整填写姓名、工作邮箱和会议背景。");
        }

        LocalDateTime meetingAt = parseMeetingAt(request.getDate(), request.getTime());
        if (meetingAt == null) {
            return buildErrorResponse("请选择周一至周五 10:00–18:00 的 30 分钟时段。");
        }
        if (meetingBookingRepository.hasBookingAt(meetingAt)) {
            return buildErrorResponse("该时间已被预约，请选择其他时段。");
        }

        long id = meetingBookingRepository.create(request, meetingAt);
        return buildSuccessResponse(Map.of("id", id, "status", PENDING), "预约请求已提交，我们会通过邮件确认。");
    }

    @GetMapping("/api/admin/bookings")
    public BaseResponse list() {
        if (!isSuperAdmin()) {
            return buildErrorResponse("无权限查看预约。");
        }
        List<MeetingBookingDTO> bookings = meetingBookingRepository.findAll();
        return buildSuccessResponse(Map.of(
                "total", meetingBookingRepository.countAll(),
                "pending", meetingBookingRepository.countByStatus(PENDING),
                "bookings", bookings));
    }

    @PutMapping("/api/admin/bookings/{id}/status")
    public BaseResponse updateStatus(@PathVariable long id, @RequestParam String status) {
        if (!isSuperAdmin()) {
            return buildErrorResponse("无权限更新预约。");
        }
        if (!ALLOWED_STATUSES.contains(status)) {
            return buildErrorResponse("不支持的预约状态。");
        }
        return meetingBookingRepository.updateStatus(id, status) == 1 ? buildSuccessResponse() : buildErrorResponse("预约不存在。");
    }

    private boolean isSuperAdmin() {
        return Objects.equals(UserCache.getUserContext().getAuthority(), AuthorityEnum.SUPER.getCode());
    }

    private LocalDateTime parseMeetingAt(String dateValue, String timeValue) {
        try {
            LocalDate date = LocalDate.parse(dateValue);
            LocalTime time = LocalTime.parse(timeValue);
            if (date.isBefore(LocalDate.now()) || date.getDayOfWeek() == DayOfWeek.SATURDAY || date.getDayOfWeek() == DayOfWeek.SUNDAY
                    || time.isBefore(LocalTime.of(10, 0)) || !time.isBefore(LocalTime.of(18, 0)) || time.getMinute() % 30 != 0) {
                return null;
            }
            LocalDateTime meetingAt = LocalDateTime.of(date, time);
            return meetingAt.isAfter(LocalDateTime.now()) ? meetingAt : null;
        } catch (DateTimeParseException | NullPointerException exception) {
            return null;
        }
    }
}
