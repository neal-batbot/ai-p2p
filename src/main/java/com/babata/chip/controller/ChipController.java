package com.babata.chip.controller;

import com.babata.chip.common.UserCache;
import com.babata.chip.common.enums.AuthorityEnum;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Objects;

@Controller
public class ChipController {

    @RequestMapping("/chip/detail")
    public String chipDetail() {
        return "chip";
    }

    @RequestMapping("/chip/compare")
    public String chipCompare() {
        return "chip_compare_user";
    }

    @RequestMapping("/application-selection")
    public String applicationSelection(Model model) {
        model.addAttribute("pageTitle", "应用选型 | P2P Agent");
        return "application_selection";
    }

    @RequestMapping("/chip/compare/admin")
    public String chipCompareAdmin() {
        Byte authority = UserCache.getUserContext().getAuthority();
        if (!Objects.equals(authority, AuthorityEnum.SUPER.getCode())) {
            return "404";
        }
        return "chip_compare";
    }
}
