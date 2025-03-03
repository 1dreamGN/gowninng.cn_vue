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
import { defineComponent, onMounted, ref } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import axios from 'axios';

export default defineComponent({
  name: 'IconServer',
  setup() {
    const store = useGlobalStore();
    const cpuUsage = ref<number | null>(null);
    const memoryUsagePercent = ref<number | null>(null);
    const freeMemoryPercent = ref<number | null>(null);

    const getServerStatus = async () => {
      try {
        const response = await axios.get(`${store.serverUrl}/server-status`);
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
/* 移除不需要的样式 */
</style>
