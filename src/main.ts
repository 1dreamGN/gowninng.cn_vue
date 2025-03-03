// import './assets/main.css'

import './assets/css/style.css'
import AOS from 'aos'

import './assets/css/iconoir.css'
import { consoleInfo } from './utils/ConsoleLogger'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useGlobalStore } from './stores/globalStore'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
// 添加持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

// 初始化主题
// 初始化主题
const store = useGlobalStore()
store.updateTheme()

app.use(router)
AOS.init()
app.mount('#app')
consoleInfo()
