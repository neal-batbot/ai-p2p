package com.babata.chip.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * doocs/md Markdown 编辑器入口。
 * 静态资源部署在 /static/md/，此控制器提供 /md 与 /md/ 直达 index.html。
 */
@Controller
public class MarkdownEditorController {

    @GetMapping({"/md", "/md/"})
    public String mdEditor() {
        return "forward:/md/index.html";
    }
}
