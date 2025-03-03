package cn.gowninng.controller;

import cn.gowninng.model.LoginRequest;
import cn.gowninng.model.TokenData;
import cn.gowninng.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            TokenData tokenData = authService.login(request.getUsername(), request.getPassword());
            return ResponseEntity.ok(tokenData);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(@RequestHeader("Authorization") String token) {
        try {
            // 从Authorization头中提取token（去掉"Bearer "前缀）
            String actualToken = token.replace("Bearer ", "");
            authService.logout(actualToken);
            return ResponseEntity.ok().body("退出登录成功");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}