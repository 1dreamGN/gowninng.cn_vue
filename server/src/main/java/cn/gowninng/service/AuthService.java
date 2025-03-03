package cn.gowninng.service;

import cn.gowninng.model.TokenData;
import cn.gowninng.model.User;
import cn.gowninng.repository.UserRepository;
import cn.gowninng.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class AuthService {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private JwtUtils jwtUtils;

    // 用于存储已注销的token
    private Set<String> invalidatedTokens = new HashSet<>();

    public TokenData login(String username, String password) {
        return userRepository.findByUsername(username)
            .filter(user -> validatePassword(user, password))
            .map(user -> {
                String token = jwtUtils.generateToken(user.getId().toString(), user.getUsername());
                return TokenData.builder()
                    .token(token)
                    .build();
            })
            .orElseThrow(() -> new RuntimeException("用户名或密码错误"));
    }

    private boolean validatePassword(User user, String password) {
        return user.getPassword().equals(password);
    }

    public void logout(String token) {
        // 验证token的有效性
        if (!jwtUtils.validateToken(token)) {
            throw new RuntimeException("无效的token");
        }
        // 将token加入黑名单
        invalidatedTokens.add(token);
    }
}