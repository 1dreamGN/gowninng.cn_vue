<template>
  <div>
    <div @click="toggleDarkMode">
      {{ globalStore.isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';

export default defineComponent({
  setup() {
    const globalStore = useGlobalStore();

    // 在组件挂载时初始化主题
    onMounted(() => {
      globalStore.initTheme();
    });

    return {
      globalStore,
      toggleDarkMode: globalStore.toggleDarkMode
    };
  }
});
</script>
