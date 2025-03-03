<template>
  <header class="header-area">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <!-- 用户名按钮，点击显示登录或配置弹窗 -->
        <a class="theme-btn" @click="handleUserClick">{{ userName }}</a>

        <!-- 菜单按钮 -->
        <!--        <div class="show-menu">-->
        <!--          <span></span>-->
        <!--          <span></span>-->
        <!--          <span></span>-->
        <!--        </div>-->

        <!-- 切换黑暗模式的按钮 -->
        <a class="theme-btn">
          <DarkModeToggle />
        </a>
      </div>
    </div>
  </header>

  <!-- 登录弹窗 -->
  <LoginModal v-if="!isLoggedIn" :show="showLoginModal" @close="showLoginModal = false"
    @login-success="handleLoginSuccess" />

  <!-- 配置弹窗 -->
  <ServerConfig v-if="isLoggedIn" :show="showConfigModal" @close="showConfigModal = false" />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import DarkModeToggle from '@/components/icons/DarkModeToggle.vue';
import LoginModal from './LoginModal.vue';
import ServerConfig from './ServerConfig.vue';

export default defineComponent({
  name: 'PageHeader',
  components: {
    DarkModeToggle,
    LoginModal,
    ServerConfig
  },
  setup() {
    const store = useGlobalStore();
    const showLoginModal = ref(false);
    const showConfigModal = ref(false);

    const handleLoginSuccess = () => {
      showLoginModal.value = false;
      // 登录成功后获取用户设置
      store.fetchSettings().then(() => {
        showConfigModal.value = true;
      });
    };

    const isLoggedIn = computed(() => !!store.token);
    const userName = computed(() => store.userName || '未登录');

    const handleUserClick = () => {
      if (isLoggedIn.value) {
        showConfigModal.value = true;
      } else {
        showLoginModal.value = true;
      }
    };

    return {
      userName,
      isLoggedIn,
      showLoginModal,
      showConfigModal,
      handleUserClick,
      handleLoginSuccess
    };
  }
});
</script>


<style scoped></style>
