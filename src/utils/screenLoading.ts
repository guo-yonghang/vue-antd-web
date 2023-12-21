import { message } from 'ant-design-vue';

const loadingMap: Map<string, any> = new Map();

export const showScreenLoading = (loadingMessage: string): void => {
  if (!loadingMessage) return;
  if (loadingMap.has(loadingMessage)) return;
  const loadingTask = message.loading(loadingMessage, 0);
  loadingMap.set(loadingMessage, loadingTask);
};

export const hideScreenLoading = (loadingMessage: string) => {
  if (!loadingMessage) return;
  if (!loadingMap.has(loadingMessage)) return;
  loadingMap.get(loadingMessage)();
  loadingMap.delete(loadingMessage);
};

/**
 * @description 如果接口需要展示加载状态，在接口config中配置loadingMessage内容
 */
