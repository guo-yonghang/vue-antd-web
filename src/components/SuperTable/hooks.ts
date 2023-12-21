import { ref, reactive } from 'vue';
import { PaginationType } from './interface';
import { SuperTableProps } from './props';

export const useSuperTable = (props: SuperTableProps) => {
  // loading status of table
  const loading = ref(false);

  // source data of table
  const dataSource = ref([]);

  // pagination data of table
  const pagination = reactive<PaginationType>({
    pageNum: 1,
    pageSize: 10,
    total: 0,
  });

  // set loading status
  const setLoading = (val: boolean) => {
    loading.value = val;
  };

  // request api to retrieve table data
  const handleRequest = async () => {
    if (!props.requestApi) return;
    if (loading.value) return;
    setLoading(true);
    try {
      const result = await props.requestApi(props.searchParams);
      console.log('请求结果', result);
      pagination.pageNum = result.pageNum;
      pagination.pageSize = result.pageSize;
      pagination.total = result.total;
      dataSource.value = result.list;
    } catch (error) {
      console.log('SuperTable hooks request fail');
    } finally {
      setLoading(false);
    }
  };

  // get row class name
  const handleRowClass = (_record: any, index: number): any => {
    if (!props.displayStripe) return null;
    return index % 2 === 1 ? 'row-stripe' : null;
  };

  return {
    loading,
    setLoading,
    dataSource,
    pagination,
    handleRequest,
    handleRowClass,
  };
};
