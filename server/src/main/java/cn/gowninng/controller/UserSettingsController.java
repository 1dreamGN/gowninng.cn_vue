package cn.gowninng.controller;

import cn.gowninng.model.UserSettings;
import cn.gowninng.service.UserSettingsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/settings")
public class UserSettingsController {

    private static final Logger log = LoggerFactory.getLogger(UserSettingsController.class);

    @Autowired
    private UserSettingsService userSettingsService;

    @GetMapping("/info")
    public ResponseEntity<?> getUserSettings(@RequestAttribute(required = false) Long userId) {
        if (userId == null) {
            return ResponseEntity.ok(userSettingsService.findSettings());
        }
        return ResponseEntity.ok(userSettingsService.getUserSettings(userId));
    }

    @PostMapping("/edit")
    public ResponseEntity<?> updateUserSettings(@RequestAttribute Long userId, @RequestAttribute String username, @RequestBody UserSettings settings) {
        log.info("Updating settings for user: {}", username);
        settings.setUserId(userId);
        return ResponseEntity.ok(userSettingsService.updateUserSettings(settings));
    }
}