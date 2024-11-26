import { defineStore } from 'pinia';
import avatarImage from '@/assets/images/me.png';

// 定义一个 Pinia store
export const useGlobalStore = defineStore('global', {
  state: () => ({
    avatarUrl: avatarImage,
    userName: '1dreamGN',
    userEmail: '1dreamGN@example.com',
    userSignatures: '1dreamGN@example.com',
    footSignatures: '在世界的边缘',
    webUrl: 'http://www.gowninng.cn',
    webName: '/1dreamGN/Index',
    webBeian: '豫ICP备20007186号-2',
    isDarkMode: false
  }),
  actions: {
    // 用于初始化时根据 localStorage 中保存的主题设置状态
    initTheme() {
      const savedTheme = localStorage.getItem('theme');
      this.isDarkMode = savedTheme === 'dark';
      this.updateDocumentClass();
    },
    // 切换黑暗模式的方法
    toggleDarkMode() {
      this.isDarkMode =!this.isDarkMode;
      localStorage.setItem('theme', this.isDarkMode? 'dark' : 'light');
      this.updateDocumentClass();
    },
    // 根据当前的 isDarkMode 状态更新 document.body 的类名
    updateDocumentClass() {
      if (this.isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }
  }
});
