import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export * from './modules/global';
export * from './modules/setting';
export * from './modules/tab';

export default pinia;
