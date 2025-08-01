import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

// Piniaをインスタンスに適用
app.use(createPinia())

// Piniaを適用したインスタンスをマウント
app.mount('#app')