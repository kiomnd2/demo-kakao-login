package com.kiomnd2.logindemo;


import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/api")
public class RestController {

    @PostMapping(value = "/init")
    public ResponseEntity initKey() {
        Response response = new Response("60b53819660d5a05c66c3d1c5d4a4503");
        return ResponseEntity.ok().body(response);
    }
}
