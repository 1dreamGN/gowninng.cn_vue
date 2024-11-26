<template>
  <div class="col-md-6" data-aos="zoom-in">
    <div class="about-client-box info-box shadow-box">
      <img src="../../assets/images/serverbg.png" alt="BG" class="bg-img">
      <div class="clients d-flex align-items-start gap-24 justify-content-center">
        <div class="client-item">
          <h1 id="cpu">{{ cpuUsage }}%</h1>
          <p>CPU使用率</p>
        </div>
        <div class="client-item">
          <h1 id="mem">{{ memoryUsagePercent }}%</h1>
          <p>内存使用率</p>
        </div>
        <div class="client-item">
          <h1 id="freeMem">{{ freeMemoryPercent }}%</h1>
          <p>空闲内存百分比</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'IconServer',
  setup() {
    // 创建响应式变量用于存储服务器状态信息以及一言相关信息
    const cpuUsage = ref<number | null>(null);
    const memoryUsagePercent = ref<number | null>(null);
    const freeMemoryPercent = ref<number | null>(null);

    // 自动获取当前主机地址（协议 + 域名或IP + 端口（如果有））
    const baseUrl = `${window.location.protocol}//${window.location.hostname}:10223`;
    const serverStatusUrl = `${baseUrl}/server-status`;

    // 获取服务器状态数据的函数，使用axios向后端发送请求
    const getServerStatus = async () => {
      try {
        const response = await axios.get(serverStatusUrl);
        const serverStatusData = response.data;
        cpuUsage.value = serverStatusData.cpuUsage;
        memoryUsagePercent.value = serverStatusData.memoryUsagePercent;
        freeMemoryPercent.value = serverStatusData.freeMemoryPercent;
      } catch (error) {
        console.error('获取服务器状态出错', error);
      }
    };

    onMounted(() => {
      getServerStatus();
      setInterval(() => {
        getServerStatus();
      }, 20000);
    });


    return {
      cpuUsage,
      memoryUsagePercent,
      freeMemoryPercent,
    };
  },
});
</script>

<style scoped>

</style>
