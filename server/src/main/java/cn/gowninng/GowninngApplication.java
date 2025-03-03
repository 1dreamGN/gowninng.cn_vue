package cn.gowninng;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("cn.gowninng.model")
@EnableJpaRepositories("cn.gowninng.repository")
public class GowninngApplication {
    public static void main(String[] args) {
        SpringApplication.run(GowninngApplication.class, args);
    }
}