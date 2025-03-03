package cn.gowninng.model;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "user_settings")
public class UserSettings {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true)
    private Long userId;
    
    private String userName;
    private String userEmail;
    private String userTags;
    private String userSignatures;
    private String userGithub;
    private String userBlog;
    private String userSocial;
    private String userMusicUrl;
    private String userMusicName;
    private String userMusicAuthor;
    private String userMusicCover;
    private String footSignatures;
    private String webUrl;
    private String webName;
    private String webBeian;
}