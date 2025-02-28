import { createApp } from 'vue'
import App from '@/app/App.vue'
import { router } from '@/app/providers/router'
import '@/app/styles/reset.scss'
import { pinia } from '@/app/providers/store/store'
import { formatNumber } from "@/shared/lib/formatNumber/formatNumber";

const app = createApp(App)

app.config.globalProperties.$formatNumber = formatNumber;

app.use(router)
    .use(pinia)
    .mount('#app')
