package com.babata.chip.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SearchController {

    @RequestMapping("/chip/search")
    public String search(Model model) {
        return "search";
    }
}
