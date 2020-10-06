package com.kiomnd2.logindemo.code;


public enum Codes {

    S0000("0000", "성공입니다"),
    E0001("0001"," 실패입니다");


    private final String code;

    private final String message;

    public String getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }

    Codes(String code, String message) {
        this.code = code;
        this.message = message;
    }

}
