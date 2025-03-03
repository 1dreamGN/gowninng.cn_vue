<template>
  <div class="toggle-container" @click="toggleThemeWithToast">
    {{ globalStore.isDarkMode ? 'Light Mode' : 'Dark Mode' }}

    <!-- 提示消息框 -->
    <div class="update_box" :class="{ active: !showMessage, done: isDone }" @click.stop>
      <div class="loading">
        <span class="loader"></span>
        <h2>正在切换...</h2>
      </div>
      <div class="profile_box">
        <span class="tick"></span>
        <h2>
          已切换到{{ globalStore.isDarkMode ? '暗色' : '亮色' }}模式
          <span class="close_icon" @click.stop="hideMessage"></span>
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';

export default defineComponent({
  setup() {
    const globalStore = useGlobalStore();
    const showMessage = ref(false);
    const isDone = ref(false);
    let timeoutIds: number[] = []; // 用于存储定时器ID

    // 清除所有定时器
    const clearAllTimeouts = () => {
      timeoutIds.forEach(id => window.clearTimeout(id));
      timeoutIds = [];
    };

    const showUpdateBox = () => {
      // 清除之前的所有定时器
      clearAllTimeouts();

      // 重置状态
      showMessage.value = true;
      isDone.value = false;

      // 存储新的定时器ID
      timeoutIds.push(
        window.setTimeout(() => {
          isDone.value = true;

          timeoutIds.push(
            window.setTimeout(() => {
              showMessage.value = false;
            }, 1000)
          );
        }, 1000)
      );
    };

    const hideMessage = () => {
      clearAllTimeouts();
      showMessage.value = false;
    };

    const toggleThemeWithToast = () => {
      globalStore.toggleDarkMode();
      showUpdateBox();
    };

    return {
      globalStore,
      showMessage,
      isDone,
      hideMessage,
      toggleThemeWithToast
    };
  }
});
</script>

<style scoped>
/* 添加容器样式 */
.toggle-container {
  position: relative;
}

.update_box {
  position: fixed;
  /* 简化定位方式 */
  /* top: 30px; */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  padding: 0.9375em;
  box-sizing: border-box;
  text-align: center;
  background: #000;
  color: #fff;
  border-radius: 0.75em;
  transition: all .3s linear;
  min-width: 12.5em;
  max-width: 90vw;
  font-size: 14px;
  z-index: 1000;
}

.update_box.done {
  background: #000000;
  width: 260px;
}

.update_box.active {
  /* 简化隐藏动画 */
  transform: translate(-50%, -100%);
  opacity: 0;
}

.update_box.done .loading {
  display: none;
}

.loading {
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}

.update_box.done .profile_box {
  display: flex;
}

.loader {
  position: relative;
  display: block;
  width: 0.875em;
  height: 0.875em;
  border-left: 2px solid #fff;
  border-radius: 50%;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  margin-right: 1.25em;
  animation: loader 1500ms linear infinite;
  border-width: 0.125em;
}

.update_box.active .loader {
  animation: unset;
}

h2 {
  position: relative;
  margin: 0px;
  text-align: center;
  font-size: 1.375em;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.profile_box {
  max-width: 100%;
  width: 100%;
  display: none;
  align-items: center;
}

.tick {
  position: relative;
  display: block;
  width: 1.25em;
  height: 1.25em;
  background: #fff;
  border-radius: 50%;
  margin-right: 0.625em;
}

.tick::after,
.tick::before {
  position: absolute;
  content: "";
  width: 0.3em;
  height: 0.125em;
  background: #000000;
  transform: rotate(30deg);
  left: 20%;
  top: 55%;
}

.tick::before {
  width: 0.6em;
  transform: rotate(-47deg);
  left: 30%;
  top: 45%;
}

.close_icon {
  position: relative;
  width: 10px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.close_icon::after,
.close_icon::before {
  position: absolute;
  content: "";
  width: 2px;
  height: 18px;
  background: #ffffff;
  transform: rotate(45deg);
}

.close_icon::before {
  transform: rotate(-45deg);
}

.profile_box h2 {
  max-width: calc(100% - 30px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* 响应式样式 */
@media screen and (max-width: 768px) {
  .update_box {
    font-size: 14px;
    top: 110px;
    padding: 0.857em;
  }

  h2 {
    font-size: 18px;
  }

  .loader {
    width: 12px;
    height: 12px;
    margin-right: 15px;
  }

  .tick {
    /* width 和 height 已经使用 em 单位，无需在这里重新定义 */
  }
}

@media screen and (max-width: 480px) {
  .update_box {
    font-size: 12px;
    top: 110px;
    padding: 0.833em;
  }

  h2 {
    font-size: 16px;
  }

  .loader {
    width: 10px;
    height: 10px;
    margin-right: 10px;
  }

  .tick {
    /* width 和 height 已经使用 em 单位，无需在这里重新定义 */
  }
}
</style>
