import { createApp } from 'vue';
import App from './App.vue';

import './styles/common.less';
import './styles/config.less';
import 'nprogress/nprogress.css';
import 'ant-design-vue/dist/reset.css';

import 'virtual:svg-icons-register';

import router from './router';
import store from './store';

const app = createApp(App);

app.use(router).use(store);
app.mount('#app');
