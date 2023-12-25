import { ref } from 'vue';

export const useLoading = (initValue: boolean = false) => {
  const loading = ref<boolean>(initValue);
  const setLoading = (value: boolean) => {
    loading.value = value;
  };

  return {
    loading,
    setLoading,
  };
};
