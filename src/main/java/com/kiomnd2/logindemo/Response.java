package com.kiomnd2.logindemo;

public class Response {
    Response(){

    }

    public Response(String initKey) {
        this.initKey = initKey;
    }

    private String initKey;

    public String getInitKey() {
        return initKey;
    }

    public void setInitKey(String initKey) {
        this.initKey = initKey;
    }
}
