package com.kiomnd2.logindemo.account;

import lombok.Getter;

@Getter
public class AccountRequest {
    private Long loginId;
    private String accessToken;
    private String nickname;
    private String profileImageUrl;
    private String profileThumbImageUrl;

    public AccountRequest(Long loginId, String accessToken, String nickname, String profileImageUrl, String profileThumbImageUrl) {
        this.loginId = loginId;
        this.accessToken = accessToken;
        this.nickname = nickname;
        this.profileImageUrl = profileImageUrl;
        this.profileThumbImageUrl = profileThumbImageUrl;
    }
}
