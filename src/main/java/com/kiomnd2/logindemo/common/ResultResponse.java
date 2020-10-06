package com.kiomnd2.logindemo.common;


import com.kiomnd2.logindemo.code.Codes;
import jdk.nashorn.internal.objects.annotations.Getter;

public class ResultResponse {

    private final String code;

    private String message;

    private Object body;

    public ResultResponse(String code, String message, Object body) {
        this.code = code;
        this.message = message;
        this.body = body;
    }

    public static ResultResponse success(Object body) {
        return new ResultResponse(Codes.S0000.getCode(), Codes.S0000.getMessage(), body);
    }

    public static ResultResponse fail() {
        return new ResultResponse(Codes.E0001.getCode(), Codes.E0001.getMessage(),null);
    }
}
