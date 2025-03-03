package cn.gowninng.service;

import cn.gowninng.model.UserSettings;
import cn.gowninng.repository.UserSettingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserSettingsService {
    
    @Autowired
    private UserSettingsRepository userSettingsRepository;

    public UserSettings updateUserSettings(UserSettings settings) {
        UserSettings existingSettings = userSettingsRepository.findByUserId(settings.getUserId())
            .orElse(new UserSettings());
            
        // 只更新非空字段
        if (settings.getUserName() != null) {
            existingSettings.setUserName(settings.getUserName());
        }
        if (settings.getUserEmail() != null) {
            existingSettings.setUserEmail(settings.getUserEmail());
        }
        if (settings.getUserTags() != null) {
            existingSettings.setUserTags(settings.getUserTags());
        }
        if (settings.getUserSignatures() != null) {
            existingSettings.setUserSignatures(settings.getUserSignatures());
        }
        if (settings.getFootSignatures() != null) {
            existingSettings.setFootSignatures(settings.getFootSignatures());
        }
        if (settings.getWebUrl() != null) {
            existingSettings.setWebUrl(settings.getWebUrl());
        }
        if (settings.getWebName() != null) {
            existingSettings.setWebName(settings.getWebName());
        }
        if (settings.getWebBeian() != null) {
            existingSettings.setWebBeian(settings.getWebBeian());
        }
        if (settings.getUserGithub() != null) {
            existingSettings.setUserGithub(settings.getUserGithub());
        }
        if (settings.getUserBlog() != null) {
            existingSettings.setUserBlog(settings.getUserBlog());
        }
        if (settings.getUserSocial() != null) {
            existingSettings.setUserSocial(settings.getUserSocial());
        }
        if (settings.getUserMusicUrl() != null) {
            existingSettings.setUserMusicUrl(settings.getUserMusicUrl());
        }
        if (settings.getUserMusicName() != null) {
            existingSettings.setUserMusicName(settings.getUserMusicName());
        }
        if (settings.getUserMusicAuthor() != null) {
            existingSettings.setUserMusicAuthor(settings.getUserMusicAuthor());
        }
        if (settings.getUserMusicCover() != null) {
            existingSettings.setUserMusicCover(settings.getUserMusicCover());
        }

        existingSettings.setUserId(settings.getUserId()); // 确保设置用户ID
        return userSettingsRepository.save(existingSettings);
    }

    public UserSettings getUserSettings(Long userId) {
        return userSettingsRepository.findByUserId(userId)
            .orElseThrow(() -> new RuntimeException("未找到用户设置"));
    }
    public UserSettings findSettings() {
        return userSettingsRepository.findByUserId(1L)
            .orElseGet(() -> {
                UserSettings defaultSettings = new UserSettings();
                defaultSettings.setUserId(1L);
                return userSettingsRepository.save(defaultSettings);
            });
    }
}