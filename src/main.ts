import { createApp } from 'vue';
import './style.scss'
import App from './App.vue';
import router from './router'; // Импорт роутера

const app = createApp(App);
app.use(router); // Использование роутера
app.mount('#app');