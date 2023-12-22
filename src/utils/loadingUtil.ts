import { message } from 'ant-design-vue';

const loadingMap: Map<string, any> = new Map();

export const showLoadingUtil = (content: string): void => {
  if (!content) return;
  if (loadingMap.has(content)) return;
  const loadingTask = message.loading(content, 0);
  loadingMap.set(content, loadingTask);
};

export const hideLoadingUtil = (content: string) => {
  if (!content) return;
  if (!loadingMap.has(content)) return;
  loadingMap.get(content)();
  loadingMap.delete(content);
};

/**
 * @description 如果接口需要展示加载状态，在接口config中配置loadingMessage内容
 */
