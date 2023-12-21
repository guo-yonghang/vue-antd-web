import { ref, reactive } from 'vue';
import { PaginationType } from './interface';
import { SuperTableProps, SuperTableEmit } from './props';
import { ResListType } from '@/interface';

export const useSuperTable = (props: SuperTableProps, emits: SuperTableEmit) => {
  // loading status of table
  const loading = ref<boolean>(false);

  // source data of table
  const dataSource = ref<any[]>([]);

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
  const handleRequest = async (): Promise<void> => {
    if (!props.requestApi) return;
    if (loading.value) return;
    setLoading(true);
    try {
      const { pageNum, pageSize } = pagination;
      const result: ResListType<any> = await props.requestApi({ pageNum, pageSize, ...props.searchParams });
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

  // handle pagination
  const handlePagination = (newValue: Record<string, number>): void => {
    const { current, pageSize, total } = newValue;
    let changed: boolean = false;
    if (current !== pagination.pageNum || pageSize !== pagination.pageSize) {
      changed = true;
    }
    pagination.pageNum = pageSize !== pagination.pageSize ? 1 : current;
    pagination.pageSize = pageSize;
    pagination.total = total;
    changed && handleRequest();
  };

  // handle table search
  const handleSearch = () => {
    emits('search', {});
    !loading.value && handleRequest();
  };

  // handle table reset
  const handleReset = () => {
    emits('reset', {});
    pagination.pageNum = 1;
    !loading.value && handleRequest();
  };

  // handle table reload
  const handleReload = () => {
    emits('reload', {});
    !loading.value && handleRequest();
  };

  // get row class name [stripe]
  const handleRowClass = (_record: any, index: number): any => {
    if (props.displayStripe) return index % 2 === 1 ? 'row-stripe' : null;
    return null;
  };

  return {
    loading,
    setLoading,
    dataSource,
    pagination,
    handleRequest,
    handlePagination,
    handleSearch,
    handleReset,
    handleReload,
    handleRowClass,
  };
};
