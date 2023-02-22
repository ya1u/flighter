package com.green.flighter.controller;

import com.green.flighter.enums.SexType;
import com.green.flighter.model.Users;
import com.green.flighter.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService testService;

    @GetMapping("/user/{name}")
    public String test(@PathVariable String name) {
        Users user1 = Users.builder().email(name + "@naver.com").password("123123").name(name).birth(LocalDate.now())
                .sexType(SexType.MALE).image("~~~").build();
        testService.회원가입(user1);
        return "hello";
    }
}