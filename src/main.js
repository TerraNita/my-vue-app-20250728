import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router' // ルーターをインポート

const app = createApp(App)

// Piniaをインスタンスに適用
app.use(createPinia())

// Piniaを適用したインスタンスをマウント
app.mount('#app')

app.use(router) // ルーターを使用