// import './assets/main.css'

import './assets/css/style.css'
import AOS from 'aos';

import './assets/css/iconoir.css'
import { consoleInfo } from './utils/ConsoleLogger';


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useGlobalStore } from './stores/globalStore';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
AOS.init();
app.mount('#app')
consoleInfo();
