import { ref } from 'vue';
import { message } from 'ant-design-vue';

export const useLoading = (initValue: boolean = false) => {
  const loading = ref<boolean>(initValue);
  let loadTask: any = null;
  const setLoading = (value: boolean, content: string = '') => {
    loading.value = value;
    if (loading.value && content) {
      loadTask = message.loading({ content, duration: 0 });
    }
    if (!loading.value && loadTask) {
      loadTask();
    }
  };

  return {
    loading,
    setLoading,
  };
};
