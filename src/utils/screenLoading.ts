import { Message } from '@arco-design/web-vue';

const loadingMap: Map<string, any> = new Map();

export const showScreenLoading = (loadingMessage: string): void => {
  if (!loadingMessage) return;
  if (loadingMap.has(loadingMessage)) return;
  const loadingTask = Message.loading({ content: loadingMessage, duration: 0, showIcon: true });
  loadingMap.set(loadingMessage, loadingTask);
};

export const hideScreenLoading = (loadingMessage: string) => {
  if (!loadingMessage) return;
  if (!loadingMap.has(loadingMessage)) return;
  loadingMap.get(loadingMessage).close();
  loadingMap.delete(loadingMessage);
};

/**
 * @description 如果接口需要展示加载状态，在接口config中配置loadingMessage内容
 */
