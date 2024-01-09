import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import '@/icon/iconfont.css'

const state=createPinia()


createApp(App).use(ElementPlus).use(state).use(router).mount('#app')
