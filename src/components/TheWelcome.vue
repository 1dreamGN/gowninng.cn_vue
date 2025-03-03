<template>
      <PagePreloader />
      <PageHeader />
      <PageAbout />
      <PageFooter />
</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
import { useGlobalStore } from '@/stores/globalStore'; // 引入 Pinia store
import PagePreloader from './Preloader.vue';
import PageHeader from './Header.vue';
import PageAbout from './About.vue';
import PageFooter from './Footer.vue';

export default defineComponent({
  name: 'TheWelcome',
  components: {
    PagePreloader,
    PageHeader,
    PageAbout,
    PageFooter,
  },
  setup() {
    const globalStore = useGlobalStore();  // 获取 Pinia store
    const { webName } = globalStore;

    // 使用 watchEffect 来自动更新 title
    watchEffect(() => {
      // 监听 userName 的变化并动态更新 title
      document.title = `${webName}`;
    });

    return {
      webName,
    };
  },
});
</script>

<style>

</style>
