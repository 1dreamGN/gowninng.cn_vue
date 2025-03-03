<template>
  <footer class="footer-area">
    <div class="container">
      <div class="footer-content text-center">
        <a @click="goToTop"><svg b="1732285546848" class="icon" viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="24453" width="32" height="32">
            <path
              d="M573.056 272l308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z"
              fill="#000000" p-id="24454"></path>
          </svg></a>
        <ul class="footer-menu">
          <a>{{ footSignatures }}</a>
        </ul>
        <p class="copyright">
          &copy;All RIGHTS RESERVED BY <a :href=webUrl>{{ webName }}</a>
          <br>
          <a href="http://beian.miit.gov.cn/" target="_blank">{{ webBeian }}</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useGlobalStore } from '@/stores/globalStore'

export default defineComponent({
  name: 'PageFooter',
  computed: {
    footSignatures() {
      const store = useGlobalStore();
      return store.footSignatures; // 获取用户签名
    },
    webBeian() {
      const store = useGlobalStore();
      return store.webBeian;
    },
    webName() {
      const store = useGlobalStore();
      return store.webName;
    },
    webUrl() {
      const store = useGlobalStore();
      return store.webUrl;
    }
  },
  methods: {
    goToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // 可以添加平滑滚动效果，若不需要平滑滚动可去掉这个属性
      });
    }
  }
});
</script>

<style scoped>
/* 这里可以添加仅针对PageFooter组件的局部样式 */
</style>
