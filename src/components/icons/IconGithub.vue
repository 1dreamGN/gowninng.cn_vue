<template>
  <div data-aos="zoom-in">
    <div class="about-project-box info-box shadow-box h-full">
      <img src="../../assets/images/githubbg.png" alt="BG" class="bg-img">
      <div class="flex-container">
        <!-- 动态SVG图标 -->
        <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" version="1.1" width="226"
          height="126">
          <path class="icon-path" fill="none"
            d="M511.601778 76.316444C264.305778 76.202667 64 276.394667 64 523.491556c0 195.413333 125.297778 361.528889 299.804444 422.513777 23.495111 5.888 19.911111-10.808889 19.911112-22.186666v-77.511111c-135.708444 15.900444-141.226667-73.898667-150.328889-88.888889-18.375111-31.402667-61.895111-39.424-48.896-54.414223 30.919111-15.900444 62.407111 3.982222 98.901333 57.912889 26.396444 39.082667 77.909333 32.483556 104.021333 25.998223 5.688889-23.495111 17.891556-44.515556 34.702223-60.814223-140.629333-25.201778-199.224889-110.990222-199.224889-212.992 0-49.493333 16.298667-95.004444 48.298666-131.697777-20.394667-60.501333 1.905778-112.298667 4.920889-120.007112 58.083556-5.205333 118.499556 41.614222 123.164445 45.312 33.024-8.903111 70.712889-13.596444 112.924444-13.596444 42.382222 0 80.213333 4.892444 113.493333 13.880889 11.320889-8.590222 67.299556-48.782222 121.315556-43.889778 2.901333 7.68 24.689778 58.311111 5.489778 117.987556 32.426667 36.807111 48.924444 82.716444 48.924444 132.295111 0 102.200889-59.022222 188.103111-200.021333 212.906666a127.488 127.488 0 0 1 38.115555 91.022223v112.469333c0.768 9.016889 0 17.92 14.990223 17.92 177.095111-59.733333 304.583111-226.986667 304.583111-424.106667 0-247.182222-200.391111-447.288889-447.488-447.288889z">
          </path>
        </svg>
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <div class="infos">
          <h4>GITHUB</h4>
          <h1>GITHUB</h1>
        </div>
        <a :href="userGithub" target="_blank" class="about-btn"><img src="../../assets/images/icon.svg"
            alt="Button"></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';

export default defineComponent({
  name: 'IconGithub',
  setup() {
    const userGithub = computed(() => {
      const store = useGlobalStore();
      return store.userGithub; // 获取用户Github
    });

    // 获取所有路径元素的引用
    onMounted(() => {
      const paths = document.getElementsByClassName('icon-path')

      for (let i = 0; i < paths.length; i++) {
        const path = paths[i] as SVGPathElement
        const pathLength = path.getTotalLength() // 获取路径的总长度

        console.log(pathLength) // 输出路径总长度，用于调试

        // 设置路径的 dasharray 和 dashoffset，初始化路径为隐藏状态
        path.style.strokeDasharray = pathLength.toString()
        path.style.strokeDashoffset = pathLength.toString()
      }

    })

    // 启动路径动画

    return {
      userGithub
    }
  }
})
</script>

<style scoped>
/* 为路径添加动画 */
.icon-path {
  animation: icon-path-animation 8s ease-in-out infinite;
  stroke-dasharray: 4917;
  /* 设定路径的总长度 */
  stroke-dashoffset: 4917;
  /* 路径起始状态，完全隐藏 */
  fill: none;
  /* 初始不填充路径 */
}

/* 路径绘制和颜色变化的动画 */
@keyframes icon-path-animation {
  0% {
    stroke-dashoffset: 4917;
    /* 起始时路径完全隐藏 */
    fill: #000000;
    /* 初始路径颜色为白色 */
  }

  40% {
    stroke-dashoffset: 0;
    /* 路径开始绘制 */
    fill: #000000;
    /* 保持白色 */
  }

  60% {
    stroke-dashoffset: 0;
    /* 路径完全绘制 */
    fill: #ffffff;
    /* 颜色变为黑色 */
  }

  100% {
    stroke-dashoffset: 0;
    /* 路径绘制完成 */
    fill: #ffffff;
    /* 保持黑色 */
  }
}

/* 设置路径的边框颜色和宽度 */
.icon-path {
  stroke: #ffffff;
  /* 路径的边框颜色设置为黑色 */
  stroke-width: 6;
  /* 设置边框宽度 */
}

.flex-container {
  display: flex;
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
  margin: auto auto 16px auto
}
</style>
