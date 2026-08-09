package com.babata.chip.common.request;

import lombok.Data;

@Data
public class MeetingBookingRequest {
    private String name;
    private String email;
    private String company;
    private String topic;
    private String date;
    private String time;
}
