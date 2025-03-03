import { defineStore } from 'pinia'
import avatarImage from '@/assets/images/me.png'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    // 保留原有的界面设置
    isDarkMode: false,
    avatarUrl: avatarImage,

    // 服务器配置
    serverUrl: 'http://localhost:10223',

    // 用户认证
    token: null as string | null,

    // 用户设置
    userName: '1dreamGN',
    userEmail: '1dreamGN@example.com',
    userTags: '',
    userSignatures: '',
    userGithub: '',
    userBlog: '',
    userSocial: '',
    userMusicUrl: '',
    userMusicName: '',
    userMusicAuthor: '',
    userMusicCover: '',
    footSignatures: '',
    webUrl: '',
    webName: '',
    webBeian: ''
  }),

  actions: {
    // 保留原有的主题切换功能
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      this.updateTheme()
    },

    updateTheme() {
      if (this.isDarkMode) {
        document.body.classList.add('dark-mode')
      } else {
        document.body.classList.remove('dark-mode')
      }
    },

    // 新增的认证和设置相关方法
    setToken(token: string | null) {
      this.token = token
    },

    // 新增退出方法
    async logout() {
      if (this.token) {
        try {
          const response = await fetch(`${this.serverUrl}/api/auth/logout`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${this.token}`
            }
          })
          
          if (!response.ok) {
            throw new Error('退出失败')
          }
        } catch (error) {
          console.error('退出失败:', error)
        }
      }
      // 无论退出接口是否调用成功，都清除本地token
      this.token = null
    },

    // 新增登录方法
    async login(username: string, password: string) {
      try {
        const response = await fetch(`${this.serverUrl}/api/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            username,
            password
          })
        })

        const data = await response.json()
        if (!response.ok) {
          throw new Error(data.message || '登录失败')
        }

        // 保存token
        this.setToken(data.token)
        return data
      } catch (error) {
        console.error('登录失败:', error)
        throw error
      }
    },

    // 获取设置不需要 token
    async fetchSettings() {
      try {
        const response = await fetch(`${this.serverUrl}/api/settings/info`)

        if (!response.ok) {
          throw new Error('获取设置失败')
        }

        const data = await response.json()
        Object.assign(this, data)
      } catch (error) {
        console.error('获取设置失败:', error)
        throw error
      }
    },

    // 更新设置需要 token
    async updateSettings(settings: Partial<UserSettings>) {
      if (!this.token) {
        throw new Error('未登录')
      }

      try {
        const response = await fetch(`${this.serverUrl}/api/settings/edit`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          },
          body: JSON.stringify(settings)
        })
        
        if (!response.ok) {
          throw new Error('更新设置失败')
        }

        const data = await response.json()
        Object.assign(this, data)
      } catch (error) {
        console.error('更新设置失败:', error)
        throw error
      }
    }
  },
  persist: true
})
