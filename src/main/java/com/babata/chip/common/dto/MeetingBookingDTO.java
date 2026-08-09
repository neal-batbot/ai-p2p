package com.babata.chip.common.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class MeetingBookingDTO {
    private Long id;
    private String name;
    private String email;
    private String company;
    private String topic;
    private LocalDateTime meetingAt;
    private String status;
    private LocalDateTime createTime;
}
