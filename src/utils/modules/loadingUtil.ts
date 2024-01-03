import { message } from 'ant-design-vue';

// A Map to store the loading tasks.
const loadingMap: Map<string, any> = new Map();

/**
 * Show a loading message.
 * If the content is already being displayed, it will not be displayed again.
 * @param {string} content - The content of the loading message.
 */
export const showLoadingUtil = (content: string): void => {
  if (!content) return;
  if (loadingMap.has(content)) return;
  const loadingTask = message.loading(content, 0);
  loadingMap.set(content, loadingTask);
};

/**
 * Hide a loading message.
 * If the content is not being displayed, nothing will happen.
 * @param {string} content - The content of the loading message.
 */
export const hideLoadingUtil = (content: string) => {
  if (!content) return;
  if (!loadingMap.has(content)) return;
  loadingMap.get(content)();
  loadingMap.delete(content);
};

/**
 * @description If the interface needs to display a loading status, configure the loadingMessage content in the interface config.
 */
