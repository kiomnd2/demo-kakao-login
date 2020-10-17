package com.kiomnd2.logindemo.account;


import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Builder
@Getter
@RequiredArgsConstructor
@Entity
public class Account {

    @Id @GeneratedValue
    private Long id;

    private String accessToken;

    private String nickname;

    private String profileImageUrl;

    private String profileThumbImageUrl;
}
