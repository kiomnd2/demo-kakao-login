package com.kiomnd2.logindemo.kakoaInit;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class Response {
    Response(){ }

    private String initKey;

    public Response(String initKey) {
        this.initKey = initKey;
    }




}
