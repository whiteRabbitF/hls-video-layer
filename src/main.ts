import { createApp } from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import './assets/style/variables.css';
import 'normalize.css';
const app = createApp(App);

app.use(Antd);
app.mount('#app');

