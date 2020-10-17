package com.kiomnd2.logindemo.token;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class TokenGenerator {

    private long tokenValidTime = 30 * 60 * 1000L;



    public String createToken(String user)



}
