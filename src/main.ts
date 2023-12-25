import { createApp } from 'vue';
import App from './App.vue';

import './styles/common.less';
import './styles/config.less';
import 'nprogress/nprogress.css';
import 'ant-design-vue/dist/reset.css';

import 'virtual:svg-icons-register';
import * as antIcons from '@ant-design/icons-vue';

import router from './router';
import store from './store';

const app = createApp(App);
for (const key in antIcons) {
  app.component(key, (antIcons as Record<string, any>)[key]);
}
app.use(router).use(store);
app.mount('#app');
