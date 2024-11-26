<template>
  <header class="header-area">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <!-- 用户名按钮，显示用户名 -->
        <a class="theme-btn">{{ userName }}</a>

        <!-- 菜单按钮 -->
<!--        <div class="show-menu">-->
<!--          <span></span>-->
<!--          <span></span>-->
<!--          <span></span>-->
<!--        </div>-->

        <!-- 切换黑暗模式的按钮 -->
        <a class="theme-btn"><DarkModeToggle /></a>
      </div>
    </div>
  </header>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { useGlobalStore } from '@/stores/globalStore';
import DarkModeToggle from '@/components/icons/DarkModeToggle.vue'; // 引入黑暗模式切换组件

export default defineComponent({
  name: 'PageHeader',
  components: {
    DarkModeToggle, // 注册组件
  },
  computed: {
    userName() {
      const store = useGlobalStore();
      return store.userName; // 获取用户签名
    }
  },
  methods: {

  }
});
</script>


<style scoped>
</style>

