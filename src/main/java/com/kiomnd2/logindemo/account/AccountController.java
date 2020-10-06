package com.kiomnd2.logindemo.account;

import com.kiomnd2.logindemo.common.ResultResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AccountController {

    @PostMapping("/login")
    public ResponseEntity<ResultResponse> login(@RequestBody AccountRequest request){
        
        return ResponseEntity.ok().body(ResultResponse.success(null));
    }

}

