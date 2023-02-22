package com.green.flighter.dto;

import lombok.Data;

@Data
public class TicketDataDto {
    private Integer price;
    private String airLine;
    private Integer passengers;
    private Integer adult;
    private Integer youth;
    private Integer child;
}