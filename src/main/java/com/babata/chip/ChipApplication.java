package com.babata.chip;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@MapperScan("com.babata.chip.repository.mapper")
@EnableScheduling
@SpringBootApplication
public class ChipApplication {

    public static void main(String[] args) {
        SpringApplication.run(ChipApplication.class, args);
    }
}
