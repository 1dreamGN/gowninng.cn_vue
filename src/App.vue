<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useGlobalStore } from '@/stores/globalStore'

const store = useGlobalStore();

onMounted(() => {
  // 直接获取网站配置信息，因为这个接口不需要token
  store.fetchSettings();
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
