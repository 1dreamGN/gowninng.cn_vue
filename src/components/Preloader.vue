<template>
  <div class="preloader-pro">
  <div class="mil-frame-wrapper">
    <div class="mil-preloader">
      <div class="mil-preloader-content">
        <h1 class="mil-mb-30">
          <span class="mil-h3">Loading:</span>
          <span class="mil-accent mil-percent">{{ progress }}%</span>
        </h1>
        <div class="mil-preload-track">
          <div class="mil-preload-line" :style="{ width: progress + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

export default defineComponent({
  name: 'PagePreloader',
  setup() {
    // 定义进度变量，使用 `ref` 创建响应式数据
    const progress = ref<number>(0)
    let preloaderInterval: ReturnType<typeof setInterval> | null = null

    // 定义更新进度条的函数
    const updatePreloader = () => {
      if (progress.value < 100) {
        progress.value += 5
      } else {
        // 进度达到 100% 后清除定时器
        if (preloaderInterval) {
          clearInterval(preloaderInterval)
        }
        // 使用 `nextTick` 确保 DOM 更新后再进行操作
        nextTick(() => {
          const preloader = document.querySelector('.mil-preloader') as HTMLElement
          preloader.classList.add('mil-complete')

          // 移除 overflow: hidden; 恢复页面滚动
          document.documentElement.style.overflow = 'auto';  // 恢复滚动
          document.body.style.overflow = 'auto'; // 如果需要也可以恢复 body 滚动
        })
      }
    }

    // 在组件挂载时开始定时更新进度
    onMounted(() => {
      document.documentElement.style.overflow = 'hidden';  // 在加载时禁用滚动
      document.body.style.overflow = 'hidden';
      preloaderInterval = setInterval(updatePreloader, 100)
    })

    // 在组件卸载时清理定时器
    onBeforeUnmount(() => {
      if (preloaderInterval) {
        clearInterval(preloaderInterval)
      }
    })

    // 返回需要在模板中访问的数据和方法
    return {
      progress
    }
  }
})
</script>

<style scoped>

@font-face {
  font-family: "clesmont";
  src: url("../assets/fonts/clesmont-clesmont-regular-400.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}


h1,
.mil-h3 {
  font-family: "clesmont", sans-serif;
  color: #E0E0E0;
  line-height: 100%;
}

h3,
.mil-h3 {
  font-size: 1.6rem;
}

.mil-accent {
  color: #ffffff;
}

.mil-mb-30 {
  margin-bottom: 3rem;
}


@-webkit-keyframes blur {
  0% {
    -webkit-backdrop-filter: blur(6rem);
    backdrop-filter: blur(6rem);
  }
  100% {
    -webkit-backdrop-filter: blur(0.2rem);
    backdrop-filter: blur(0.2rem);
  }
}

@keyframes blur {
  0% {
    -webkit-backdrop-filter: blur(6rem);
    backdrop-filter: blur(6rem);
  }
  100% {
    -webkit-backdrop-filter: blur(0.2rem);
    backdrop-filter: blur(0.2rem);
  }
}

.mil-frame-wrapper {
  border-radius: 1rem;
  overflow: hidden;
  height: 100vh;
  width: 100%;
}

.mil-frame-wrapper .mil-preloader {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  padding: 9rem;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1000;
  background-color: red;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(4rem);
  backdrop-filter: blur(4rem);
  -webkit-animation: blur 3.5s ease-in-out;
  animation: blur 3.5s ease-in-out;
  -webkit-transition: 0.6s cubic-bezier(0, 0, 0.3642, 1);
  transition: 0.6s cubic-bezier(0, 0, 0.3642, 1);
}

@media (max-width: 1200px) {
  .mil-frame-wrapper .mil-preloader {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 0;
  }
}

.mil-frame-wrapper .mil-preloader .mil-preloader-content {
  width: 100%;
  max-width: 30rem;
}

.mil-frame-wrapper .mil-preloader .mil-preloader-content .mil-preload-track {
  height: 0.3rem;
  border-radius: 3rem;
  background-color: rgba(255, 255, 255, 0.1);
}

.mil-frame-wrapper .mil-preloader .mil-preloader-content .mil-preload-track .mil-preload-line {
  height: 100%;
  border-radius: 3rem;
  width: 0;
  background-color: #ffffff;
  -webkit-transition: 0.2s cubic-bezier(0, 0, 0.3642, 1);
  transition: 0.2s cubic-bezier(0, 0, 0.3642, 1);
}

.mil-frame-wrapper .mil-preloader.mil-complete {
  pointer-events: none;
  opacity: 0;
  -webkit-transition-delay: 1s;
  transition-delay: 1s;
}

.mil-frame-wrapper .mil-preloader.mil-complete .mil-preloader-content {
  -webkit-transform: translateY(-6rem) scale(0.98);
  transform: translateY(-6rem) scale(0.98);
  opacity: 0;
  -webkit-transition: 0.4s cubic-bezier(0, 0, 0.3642, 1);
  transition: 0.4s cubic-bezier(0, 0, 0.3642, 1);
  -webkit-transition-delay: 0.5s;
  transition-delay: 0.5s;
}

@media (max-width: 768px) {
  .mil-frame-wrapper .mil-preloader .mil-preloader-content {
    text-align: center;
  }
}
.mil-frame-wrapper {
  padding: 0;
  overflow: visible;
  height: auto;
}
</style>
