<template>
  <section class="about-area">
    <div class="container">
      <div class="row">
        <div class="col-md-6" data-aos="zoom-in">
          <div class="about-me-box shadow-box">
            <a class="overlay-link"></a>
            <img :src="avatarUrl" alt="BG" class="bg-img">
            <div class="img-box"><img :src="avatarUrl" alt="About Me"></div>
            <div class="infos">
              <h4>HELLO!</h4>
              <h1>{{ userName }}</h1>
              <p>{{ userSignatures }}</p>
              <a href="#" class="about-btn"><img src="../assets/images/icon.svg" alt="Button"></a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="about-credentials-wrap">
            <div data-aos="zoom-in">
              <div class="banner shadow-box">
                <div class="marquee">
                  <div>
                    <span>Skill Tags:
                      <!--                    <img src="../assets/images/star1.svg" alt="Star">-->
                      <b>{{ userTags }}</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="gx-row d-flex gap-24">
              <icon-music />
              <!-- 动态SVG图标 -->
              <icon-github />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-24">
        <div class="col-md-12">
          <div class="blog-service-profile-wrap d-flex gap-24">
            <div data-aos="zoom-in">
              <div class="about-blog-box info-box shadow-box h-full">
                <img src="https://gowninng.cn/upload/avatar.png" alt="BG" class="bg-img">
                <svg width="226" height="126" viewBox="0 0 2144 877" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;top: 0; bottom: 0; left: 0; right: 0; margin: auto;">
                  <path
                    d="M1028.16,339.331c148.249,0 268.609,120.36 268.609,268.609c-0,148.249 -120.36,268.608 -268.609,268.608c-148.249,0 -268.608,-120.359 -268.608,-268.608c-0,-148.249 120.359,-268.609 268.608,-268.609Zm0,119.152c82.488,0 149.457,66.969 149.457,149.457c-0,82.487 -66.969,149.456 -149.457,149.456c-82.487,0 -149.456,-66.969 -149.456,-149.456c-0,-82.488 66.969,-149.457 149.456,-149.457Z"
                    style="fill:url(#_Linear1);" />
                  <path
                    d="M1874.58,339.331c148.249,0 268.608,120.36 268.608,268.609c0,148.249 -120.359,268.608 -268.608,268.608c-148.249,0 -268.609,-120.359 -268.609,-268.608c0,-148.249 120.36,-268.609 268.609,-268.609Zm-0,119.152c82.487,0 149.456,66.969 149.456,149.457c0,82.487 -66.969,149.456 -149.456,149.456c-82.488,0 -149.457,-66.969 -149.457,-149.456c0,-82.488 66.969,-149.457 149.457,-149.457Z"
                    style="fill:url(#_Linear2);" />
                  <path
                    d="M1309.27,377.585c-0,-10.083 -7.222,-18.719 -17.146,-20.504c-19.618,-3.528 -51.9,-9.334 -74.172,-13.34c-6.073,-1.092 -12.318,0.564 -17.052,4.522c-4.734,3.959 -7.469,9.812 -7.469,15.983c-0,91.374 -0,407.153 -0,491.469c-0,5.525 2.195,10.824 6.102,14.731c3.907,3.907 9.206,6.102 14.731,6.102c20.987,0 53.186,0 74.173,0c5.525,0 10.824,-2.195 14.731,-6.102c3.907,-3.907 6.102,-9.206 6.102,-14.731c-0,-84.425 -0,-400.286 -0,-478.13Z"
                    style="fill:url(#_Linear3);" />
                  <path
                    d="M1542.59,72.033c0,-8.288 -3.292,-16.237 -9.153,-22.097c-5.86,-5.861 -13.809,-9.153 -22.097,-9.153c-23.867,-0 -56.609,-0 -80.477,-0c-8.288,-0 -16.236,3.292 -22.097,9.153c-5.86,5.86 -9.153,13.809 -9.153,22.097c0,131.79 0,641.475 0,773.265c0,8.288 3.293,16.237 9.153,22.097c5.861,5.861 13.809,9.153 22.097,9.153c23.868,0 56.61,0 80.477,0c8.288,0 16.237,-3.292 22.097,-9.153c5.861,-5.86 9.153,-13.809 9.153,-22.097c0,-131.79 0,-641.475 0,-773.265Z"
                    style="fill:url(#_Linear4);fill-rule:nonzero;" />
                  <g>
                    <path
                      d="M506.409,822.063c-0,13.815 5.494,27.062 15.271,36.821c9.777,9.76 23.034,15.23 36.848,15.206c18.674,-0.034 39.711,-0.072 58.369,-0.105c28.696,-0.052 51.932,-23.329 51.932,-52.026l0,-769.586c0,-13.798 -5.481,-27.031 -15.238,-36.788c-9.756,-9.757 -22.99,-15.238 -36.788,-15.238l-58.368,-0c-13.798,-0 -27.031,5.481 -36.788,15.238c-9.757,9.757 -15.238,22.99 -15.238,36.788c-0,155.286 -0,614.283 -0,769.69Z"
                      style="fill:url(#_Linear5);fill-rule:nonzero;" />
                    <path
                      d="M616.746,322.662c13.813,0 27.061,5.487 36.829,15.255c9.767,9.768 15.254,23.015 15.254,36.829c0,105.185 0,341.877 0,447.062c0,13.814 -5.487,27.061 -15.254,36.829c-9.768,9.767 -23.016,15.255 -36.829,15.255c-18.632,-0 -39.622,-0 -58.254,-0c-13.813,-0 -27.061,-5.488 -36.828,-15.255c-9.768,-9.768 -15.255,-23.015 -15.255,-36.829c-0,-68.223 -0,-187.159 -0,-255.383c-0,-13.813 -5.487,-27.061 -15.255,-36.828c-9.767,-9.768 -23.015,-15.255 -36.828,-15.255c-129.249,-0 -454.326,-0 -454.326,-0l0,-191.68l616.746,0Z"
                      style="fill:#0051b0;fill-rule:nonzero;" />
                    <path
                      d="M-0,822.101c0,13.817 5.497,27.067 15.277,36.827c9.781,9.76 23.043,15.229 36.86,15.199c18.675,-0.04 39.713,-0.085 58.368,-0.124c28.69,-0.062 51.916,-23.337 51.916,-52.027c-0,-155.205 -0,-614.509 -0,-769.714c-0,-28.69 -23.226,-51.965 -51.916,-52.026c-18.655,-0.04 -39.693,-0.085 -58.368,-0.125c-13.817,-0.029 -27.079,5.439 -36.86,15.199c-9.78,9.76 -15.277,23.01 -15.277,36.827l-0,769.964Z"
                      style="fill:url(#_Linear6);fill-rule:nonzero;" />
                  </g>
                  <defs>
                    <linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(5.19814e-14,-848.921,848.921,5.19814e-14,1308.8,875.397)">
                      <stop offset="0" style="stop-color:#0050b5;stop-opacity:1" />
                      <stop offset="1" style="stop-color:#0b87fd;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="_Linear2" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(5.19814e-14,-848.921,848.921,5.19814e-14,1308.8,875.397)">
                      <stop offset="0" style="stop-color:#0050b5;stop-opacity:1" />
                      <stop offset="1" style="stop-color:#0b87fd;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="_Linear3" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(5.19814e-14,-848.921,848.921,5.19814e-14,1308.8,875.397)">
                      <stop offset="0" style="stop-color:#0050b5;stop-opacity:1" />
                      <stop offset="1" style="stop-color:#0b87fd;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="_Linear4" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(5.19814e-14,-848.921,848.921,5.19814e-14,1308.8,875.397)">
                      <stop offset="0" style="stop-color:#0050b5;stop-opacity:1" />
                      <stop offset="1" style="stop-color:#0b87fd;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="_Linear5" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(-3.91885e-13,472.459,-473.895,-3.90698e-13,587.619,-0.861651)">
                      <stop offset="0" style="stop-color:#0048af;stop-opacity:1" />
                      <stop offset="1" style="stop-color:#003580;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="_Linear6" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(5.51848e-14,898.506,-901.236,5.50176e-14,162.421,-12.1337)">
                      <stop offset="0" style="stop-color:#0b89ff;stop-opacity:1" />
                      <stop offset="1" style="stop-color:#004eb2;stop-opacity:1" />
                    </linearGradient>
                  </defs>
                </svg>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="infos">
                    <h4>/1dreamGN/Blog</h4>
                    <h1>博客</h1>
                  </div>
                  <a :href="userBlog" target="_blank" class="about-btn"><img src="../assets/images/icon.svg"
                      alt="Button"></a>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" class="flex-1">
              <div class="about-services-box info-box shadow-box h-full">
                <img src="../assets/images/codebg.png" alt="BG" class="bg-img">

                <div class="icon-boxes">

                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 256 256">
                      <rect width="256" height="256" fill="#242938" rx="60" />
                      <path fill="#81CD39"
                        d="M119.878 31.1164C124.797 28.3008 131.203 28.2883 136.117 31.1164C160.839 45.0855 185.569 59.0332 210.287 73.0108C214.937 75.6296 218.046 80.8038 217.999 86.1608V170.206C218.034 175.785 214.617 181.083 209.712 183.642C185.071 197.535 160.442 211.444 135.805 225.337C130.786 228.207 124.251 227.986 119.387 224.88C112 220.598 104.6 216.336 97.2121 212.058C95.7022 211.158 94.0004 210.442 92.9345 208.978C93.8766 207.708 95.5618 207.55 96.9309 206.995C100.014 206.014 102.847 204.44 105.679 202.913C106.396 202.423 107.27 202.611 107.957 203.049C114.274 206.671 120.536 210.399 126.874 213.986C128.226 214.767 129.595 213.73 130.751 213.086C154.931 199.419 179.141 185.805 203.318 172.134C204.214 171.703 204.709 170.752 204.636 169.771C204.653 142.046 204.64 114.317 204.645 86.5918C204.747 85.4785 204.103 84.455 203.096 83.999C178.541 70.1702 153.997 56.3205 129.446 42.4882C128.575 41.8893 127.426 41.8878 126.554 42.4837C102.002 56.3205 77.4638 70.1832 52.9124 84.011C51.9092 84.4675 51.236 85.4745 51.3554 86.5918C51.3596 114.317 51.3554 142.046 51.3554 169.775C51.2682 170.756 51.801 171.687 52.6906 172.109C59.2422 175.824 65.8024 179.513 72.3582 183.216C76.0516 185.203 80.5863 186.385 84.6555 184.862C88.2463 183.574 90.7633 179.909 90.6948 176.097C90.7288 148.534 90.6778 120.967 90.7203 93.4078C90.6309 92.1841 91.7912 91.1731 92.981 91.2885C96.1292 91.267 99.281 91.2461 102.429 91.297C103.743 91.267 104.647 92.5847 104.485 93.8174C104.472 121.555 104.519 149.293 104.464 177.03C104.472 184.423 101.435 192.467 94.5973 196.084C86.1737 200.447 75.7619 199.522 67.4399 195.338C60.2355 191.742 53.3603 187.498 46.2838 183.646C41.3661 181.101 37.966 175.782 38.0006 170.207V86.1608C37.949 80.6929 41.1825 75.4248 45.9764 72.8445C70.6133 58.9408 95.2461 45.0261 119.878 31.1164Z" />
                      <path fill="#81CD39"
                        d="M141.372 89.3351C152.117 88.6433 163.62 88.9255 173.289 94.2185C180.776 98.2754 184.926 106.789 185.058 115.106C184.849 116.227 183.676 116.846 182.605 116.769C179.488 116.765 176.369 116.812 173.252 116.748C171.929 116.799 171.161 115.58 170.995 114.411C170.099 110.431 167.928 106.49 164.183 104.57C158.433 101.692 151.767 101.837 145.497 101.897C140.92 102.139 135.998 102.536 132.12 105.227C129.143 107.266 128.239 111.382 129.301 114.697C130.303 117.077 133.05 117.845 135.299 118.553C148.248 121.94 161.97 121.602 174.672 126.059C179.931 127.876 185.075 131.409 186.875 136.915C189.23 144.295 188.198 153.115 182.947 159.039C178.689 163.914 172.488 166.568 166.303 168.009C158.075 169.844 149.536 169.891 141.18 169.076C133.323 168.18 125.146 166.116 119.081 160.763C113.894 156.259 111.361 149.241 111.612 142.469C111.672 141.325 112.811 140.527 113.907 140.621C117.046 140.596 120.186 140.587 123.325 140.626C124.58 140.536 125.509 141.62 125.574 142.802C126.152 146.593 127.577 150.573 130.884 152.82C137.264 156.937 145.271 156.655 152.577 156.77C158.63 156.502 165.425 156.421 170.364 152.42C172.97 150.138 173.742 146.32 173.038 143.036C172.275 140.263 169.374 138.971 166.883 138.126C154.1 134.083 140.224 135.55 127.565 130.977C122.425 129.161 117.455 125.727 115.481 120.447C112.726 112.974 113.988 103.73 119.789 98.0061C125.445 92.312 133.609 90.1192 141.372 89.3346V89.3351" />
                    </svg>
                  </i>

                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 256 256">
                      <rect width="256" height="256" fill="#007ACC" rx="60" />
                      <path fill="#fff"
                        d="M56.6112 128.849L56.5299 139.333H73.1902H89.8505L89.8505 186.673V234.012H101.635H113.419V186.673L113.419 139.333H130.079H146.739V129.052C146.739 123.363 146.618 118.609 146.455 118.487C146.333 118.325 126.056 118.243 101.472 118.284L56.7331 118.406L56.6112 128.849Z" />
                      <path fill="#fff"
                        d="M206.567 118.108C213.068 119.734 218.026 122.619 222.577 127.332C224.934 129.852 228.428 134.444 228.713 135.541C228.794 135.866 217.66 143.343 210.915 147.528C210.671 147.691 209.695 146.634 208.598 145.009C205.307 140.214 201.853 138.141 196.57 137.776C188.809 137.247 183.811 141.311 183.852 148.097C183.852 150.088 184.136 151.266 184.949 152.892C186.655 156.427 189.825 158.54 199.781 162.847C218.107 170.731 225.949 175.932 230.826 183.327C236.271 191.576 237.49 204.742 233.792 214.535C229.729 225.181 219.651 232.414 205.469 234.812C201.081 235.584 190.678 235.462 185.965 234.609C175.684 232.78 165.932 227.701 159.918 221.037C157.561 218.436 152.969 211.65 153.254 211.162C153.375 211 154.432 210.35 155.61 209.659C156.748 209.009 161.056 206.53 165.119 204.173L172.474 199.906L174.018 202.182C176.172 205.473 180.885 209.984 183.73 211.487C191.897 215.795 203.113 215.185 208.639 210.228C210.996 208.074 211.971 205.839 211.971 202.548C211.971 199.581 211.605 198.281 210.061 196.046C208.07 193.202 204.007 190.804 192.466 185.806C179.26 180.117 173.571 176.582 168.37 170.974C165.363 167.724 162.518 162.522 161.34 158.174C160.365 154.558 160.121 145.496 160.893 141.839C163.615 129.08 173.246 120.181 187.143 117.539C191.654 116.686 202.137 117.011 206.567 118.108Z" />
                    </svg>
                  </i>

                  <i>
                    <svg width="50" height="50" fill="none" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                      <rect width="256" height="256" rx="60" fill="#242938" />
                      <path
                        d="M227.088 57.6016L133.256 225.389C131.318 228.854 126.341 228.874 124.375 225.427L28.6823 57.6177C26.54 53.861 29.7524 49.3105 34.0096 50.0715L127.942 66.8613C128.541 66.9684 129.155 66.9674 129.754 66.8582L221.722 50.0955C225.965 49.3222 229.192 53.8374 227.088 57.6016Z"
                        fill="url(#paint0_linear_307_179)" />
                      <path
                        d="M172.687 28.0492L103.249 41.6554C102.107 41.879 101.262 42.8462 101.194 44.007L96.9221 116.148C96.8216 117.847 98.3821 119.166 100.04 118.783L119.373 114.322C121.182 113.905 122.816 115.498 122.445 117.317L116.701 145.443C116.314 147.336 118.092 148.954 119.94 148.393L131.881 144.765C133.732 144.203 135.511 145.826 135.119 147.721L125.991 191.9C125.42 194.664 129.096 196.171 130.629 193.801L131.653 192.219L188.235 79.2992C189.183 77.4085 187.549 75.2526 185.472 75.6534L165.573 79.494C163.703 79.8545 162.112 78.113 162.639 76.2834L175.628 31.2582C176.156 29.4255 174.559 27.6825 172.687 28.0492Z"
                        fill="url(#paint1_linear_307_179)" />
                      <defs>
                        <linearGradient id="paint0_linear_307_179" x1="26.3459" y1="44.075" x2="143.127" y2="202.673"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#41D1FF" />
                          <stop offset="1" stop-color="#BD34FE" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_307_179" x1="122.551" y1="31.7433" x2="143.676" y2="176.66"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FFEA83" />
                          <stop offset="0.0833333" stop-color="#FFDD35" />
                          <stop offset="1" stop-color="#FFA800" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </i>

                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 256 256">
                      <rect width="256" height="256" fill="#242938" rx="60" />
                      <path fill="#41B883" d="M182 50H218L128 205.25L38 50H73.55H106.85L128 86L148.7 50H182Z" />
                      <path fill="#41B883" d="M38 50L128 205.25L218 50H182L128 143.15L73.55 50H38Z" />
                      <path fill="#fff" d="M73.55 50L128 143.6L182 50H148.7L128 86L106.85 50H73.55Z" />
                    </svg>
                  </i>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="infos">
                    <h4>CODE</h4>
                    <h1>代码栈</h1>
                  </div>
                  <a class="about-btn"><img src="../assets/images/icon.svg" alt="Button"></a>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in">
              <div class="about-profile-box info-box shadow-box h-full">
                <img src="../assets/images/socialbg.png" alt="BG" class="bg-img">
                <div class="inner-profile-icons shadow-box">
                  <a><i class="iconoir-telegram"></i></a>
                  <a><i class="iconoir-twitter"></i></a>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <div class="infos">
                    <h4>Social</h4>
                    <h1>社交</h1>
                  </div>
                  <a class="about-btn" :href="userSocial" target="_blank"><img src="../assets/images/icon.svg"
                      alt="Button"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-24">
        <icon-server />
        <icon-hitokoto />

      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import IconMusic from './icons/IconMusic.vue';
import IconServer from './icons/IconServer.vue';
import IconHitokoto from './icons/IconHitokoto.vue';
import IconGithub from './icons/IconGithub.vue';


export default defineComponent({
  name: 'PageAbout',
  components: {
    IconMusic,
    IconServer,
    IconHitokoto,
    IconGithub,
  },
  setup() {
    // 计算属性，获取 Pinia store 中的数据
    const avatarUrl = computed(() => {
      const store = useGlobalStore();
      return store.avatarUrl; // 获取头像链接
    });

    const userName = computed(() => {
      const store = useGlobalStore();
      return store.userName; // 获取用户名
    });

    const userEmail = computed(() => {
      const store = useGlobalStore();
      return store.userEmail; // 获取用户邮箱
    });

    const userSignatures = computed(() => {
      const store = useGlobalStore();
      return store.userSignatures; // 获取用户签名
    });

    const userTags = computed(() => {
      const store = useGlobalStore();
      return store.userTags; // 获取用户标签
    });
    const userBlog = computed(() => {
      const store = useGlobalStore();
      return store.userBlog; // 获取用户博客
    });

    const userSocial = computed(() => {
      const store = useGlobalStore();
      return store.userSocial; // 获取用户博客
    });

    return {
      avatarUrl,
      userName,
      userEmail,
      userSignatures,
      userTags,
      userBlog,
      userSocial,
    };
  },
});
</script>

<style scoped>
.responsive-image {
  height: 126px;
  /* 第二张图片的高度 */
  width: auto;
  /* 宽度自适应，保持图片比例 */
  object-fit: contain;
  /* 保持比例，防止拉伸 */
  border-radius: 12px;
  /* 圆角设置，数字越大圆角越明显 */
}
</style>
