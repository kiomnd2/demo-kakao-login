package com.kiomnd2.logindemo.kakoaInit;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/api")
@org.springframework.web.bind.annotation.RestController
public class RestController {

    @PostMapping(value = "/init")
    public ResponseEntity<Response> initKey() {
        System.out.println("!!");
        Response response = new Response("60b53819660d5a05c66c3d1c5d4a4503");
        return ResponseEntity.ok().body(response);
    }

}
