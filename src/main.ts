import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

requestAnimationFrame(() => {
    const loader = document.getElementById("page-loader");
    if (loader) {
        loader.classList.add("hidden");
        setTimeout(() => loader.remove(), 500);
    }
});