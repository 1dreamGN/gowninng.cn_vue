<template>
  <div data-aos="zoom-in">
    <div class="about-project-box info-box shadow-box h-full">
      <img :src="userMusicCover" alt="BG" class="bg-img" />
      <div class="consss">
        <div class="playing">
          {{ userMusicName }}
          <svg class="logo" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <path
              d="M512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m-46.336-445.098667c10.24-35.84 45.866667-65.749333 84.906667-70.314667 7.978667 29.610667 16.554667 58.581333 23.253333 88.021334 2.261333 9.813333 1.578667 21.12-0.768 31.018666-9.088 38.058667-53.248 52.992-84.394667 29.226667-22.613333-17.28-31.658667-47.786667-22.997333-77.952z m162.858667-8.405333c-5.333333-19.84-10.922667-39.552-16.768-60.586667 21.333333 5.546667 38.741333 15.36 53.546666 29.781333 53.632 52.096 59.093333 140.8 12.544 201.856-48.426667 63.573333-134.613333 91.050667-214.528 68.48-98.218667-27.733333-162.474667-125.952-146.816-226.816 11.690667-75.434667 54.186667-128.170667 123.733334-159.274666 17.365333-7.765333 24.746667-23.893333 17.92-39.68-6.698667-15.530667-23.04-21.504-40.277334-14.634667-116.096 46.464-184.32 176.384-156.586666 298.112 30.421333 133.034667 149.12 220.288 284.8 207.317333 73.898667-7.04 134.997333-40.448 179.882666-100.138666 64.256-85.418667 55.338667-204.074667-19.754666-277.290667-28.416-27.733333-62.762667-43.434667-101.973334-49.194667-3.541333-0.554667-9.258667-2.218667-9.898666-4.522666-3.712-13.354667-7.68-26.965333-8.789334-40.704-1.237333-15.232 12.373333-27.306667 27.733334-27.52 10.794667-0.128 18.517333 5.546667 25.728 12.8 12.928 12.8 30.037333 13.738667 42.154666 2.645333 12.373333-11.264 12.629333-28.928 0.768-43.008-24.149333-28.672-67.669333-38.016-103.68-22.314667-36.138667 15.786667-56.362667 50.645333-51.2 89.301334 1.621333 11.946667 4.693333 23.765333 7.125334 35.925333l-11.093334 3.072a164.821333 164.821333 0 0 0-89.514666 60.330667c-39.296 52.053333-39.936 120.661333-1.749334 168.405333 54.357333 68.010667 159.872 54.784 192.981334-24.234667 12.117333-28.842667 11.733333-58.368 3.712-88.106666z"
              fill="#ffffff"></path>
          </svg>
        </div>
        <div class="artist">{{ userMusicAuthor }}</div>

        <!-- 替换后的音乐条部分 -->
        <div class="music-container">
          <div class="music">
            <div class="music-bar 1"></div>
            <div class="music-bar 2"></div>
            <div class="music-bar 3"></div>
            <div class="music-bar 4"></div>
            <div class="music-bar 5"></div>
            <div class="music-bar 6"></div>
            <div class="music-bar 7"></div>
            <div class="music-bar 8"></div>
            <div class="music-bar 9"></div>
            <div class="music-bar 10"></div>
            <div class="music-bar 11"></div>
            <div class="music-bar 12"></div>
            <div class="music-bar 13"></div>
            <div class="music-bar 14"></div>
            <div class="music-bar 15"></div>
          </div>
        </div>
        <a :href="userMusicUrl" target="_BLANK"></a>
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <div class="infos">
          <h4>Music</h4>
          <h1>日常音乐</h1>
        </div>
        <a :href="userMusicUrl" target="_BLANK" class="about-btn">
          <img src="../../assets/images/icon.svg" alt="Button" />
        </a>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';

export default defineComponent({
  name: 'IconMusic',
  setup() {
    const userMusicAuthor = computed(() => {
      const store = useGlobalStore();
      return store.userMusicAuthor;
    });
    const userMusicName = computed(() => {
      const store = useGlobalStore();
      return store.userMusicName;
    });
    const userMusicCover = computed(() => {
      const store = useGlobalStore();
      return store.userMusicCover;
    });
    const userMusicUrl = computed(() => {
      const store = useGlobalStore();
      return store.userMusicUrl;
    });
    return {
      userMusicAuthor,
      userMusicName,
      userMusicCover,
      userMusicUrl,
    };
  },
});
</script>

<style scoped>
.consss {
  margin: auto auto auto auto;
  overflow: hidden;
}

.playing {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
}

.artist {
  color: #b3b3b3;
  margin-bottom: 28px;
  font-size: 16px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.logo {
  margin-left: 5px;
  margin-top: 3px;
}

.music-container {
  position: relative;
  width: 200px;
  /* 根据实际需求调整宽度 */
  height: 60px;
  /* 根据实际需求调整高度 */
  margin: 0 auto;
  /* 水平居中，可根据实际布局需求调整 */
}

.music {
  display: flex;
  width: 200px;
  height: 10px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 10px;
  /* 放置在新容器顶部，可根据实际需求调整垂直位置 */
  left: 0;
  right: 0;
  margin: 0 auto;
}

.music .music-bar {
  background: #b65252;
  width: 7px;
  border-radius: 50pc;
  animation: play-music 2s ease-in-out infinite;
}

@keyframes play-music {

  0%,
  100% {
    height: 10px;
  }

  50% {
    height: 50px;
  }
}

.music .music-bar:nth-child(1) {
  background: #ece4db;
  animation-delay: 1s;
}

.music .music-bar:nth-child(2) {
  background: #d8e2dc;
  animation-delay: 0.8s;
}

.music .music-bar:nth-child(3) {
  background: #e8e8e4;
  animation-delay: 0.6s;
}

.music .music-bar:nth-child(4) {
  background: #f8edeb;
  animation-delay: 0.4s;
}

.music .music-bar:nth-child(5) {
  background: #fae1dd;
  animation-delay: 0.2s;
}

.music .music-bar:nth-child(6) {
  background: #fcd5ce;
  animation-delay: 0.2s;
}

.music .music-bar:nth-child(7) {
  background: #e0b1cb;
  animation-delay: 0.4s;
}

.music .music-bar:nth-child(8) {
  background: #e0b1cb;
  animation-delay: 0.6s;
}

.music .music-bar:nth-child(9) {
  background: #e7c6ff;
  animation-delay: 0.8s;
}

.music .music-bar:nth-child(10) {
  background: #c8b6ff;
  animation-delay: 1s;
}

.music .music-bar:nth-child(11) {
  background: #b8c0ff;
  animation-delay: 1s;
}

.music .music-bar:nth-child(12) {
  background: #a3c4f3;
  animation-delay: 0.8s;
}

.music .music-bar:nth-child(13) {
  background: #90dbf4;
  animation-delay: 0.6s;
}

.music .music-bar:nth-child(14) {
  background: #8eecf5;
  animation-delay: 0.4s;
}

.music .music-bar:nth-child(15) {
  background: #98f5e1;
  animation-delay: 0.2s;
}
</style>
