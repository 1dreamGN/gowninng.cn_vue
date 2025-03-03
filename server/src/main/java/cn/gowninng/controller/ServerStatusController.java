package cn.gowninng.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import oshi.SystemInfo;
import oshi.hardware.CentralProcessor;
import oshi.hardware.GlobalMemory;
import oshi.hardware.HardwareAbstractionLayer;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/server-status")
public class ServerStatusController {

    private final SystemInfo systemInfo = new SystemInfo();
    private final HardwareAbstractionLayer hardware = systemInfo.getHardware();

    @GetMapping
    public ResponseEntity<?> getServerStatus() {
        // 获取CPU使用率
        CentralProcessor processor = hardware.getProcessor();
        double[] loadAverage = processor.getSystemLoadAverage(1);
        double cpuUsage = loadAverage[0];

        // 获取系统内存信息
        GlobalMemory memory = hardware.getMemory();
        long totalPhysicalMemory = memory.getTotal();
        long freePhysicalMemory = memory.getAvailable();
        long usedMemory = totalPhysicalMemory - freePhysicalMemory;

        // 计算内存使用百分比
        int memoryUsagePercent = (int) ((usedMemory * 100.0) / totalPhysicalMemory);
        int freeMemoryPercent = 100 - memoryUsagePercent;

        Map<String, Object> status = new HashMap<>();
        status.put("cpuUsage", Math.round(cpuUsage * 100));
        status.put("usedMemory", usedMemory);
        status.put("freeMemory", freePhysicalMemory);
        status.put("memoryUsagePercent", memoryUsagePercent);
        status.put("freeMemoryPercent", freeMemoryPercent);

        return ResponseEntity.ok(status);
    }
}