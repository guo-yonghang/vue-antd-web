import { ref, reactive, computed } from 'vue';
import { PaginationType, ResDataType } from './interface';
import { SuperTableProps, SuperTableEmit } from './props';

export const useTableRequest = (props: SuperTableProps, emits: SuperTableEmit) => {
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

  // selected keys
  const selectedRowKeys = ref<(string | number)[]>([]);

  // selected rows
  const selectedRows = ref<any[]>([]);

  // set loading status
  const setLoading = (val: boolean): void => {
    loading.value = val;
  };

  // request api to retrieve table data
  const handleRequest = async (): Promise<void> => {
    if (!props.request) return;
    if (loading.value) return;
    setLoading(true);
    emits('request', null);
    try {
      const { pageNum, pageSize } = pagination;
      const result: ResDataType<any> = await props.request({ pageNum, pageSize, ...props.searchParams });
      console.log('请求结果', result);
      pagination.pageNum = result.pageNum;
      pagination.pageSize = result.pageSize;
      pagination.total = result.total;
      dataSource.value = result.list;
    } catch (error) {
      console.log('SuperTable hooks request fail');
    } finally {
      selectedRowKeys.value = [];
      selectedRows.value = [];
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
  const handleSearch = (): void => {
    emits('search', null);
    !loading.value && handleRequest();
  };

  // handle table reset
  const handleReset = (): void => {
    emits('reset', null);
    pagination.pageNum = 1;
    !loading.value && handleRequest();
  };

  // handle table reload
  const handleReload = (): void => {
    emits('reload', null);
    !loading.value && handleRequest();
  };

  // get row class name [stripe]
  const getRowClassConfig = (_record: any, index: number): any => {
    let className = '';
    if (props.showStripe) {
      className += index % 2 === 1 ? 'row-stripe ' : null;
    }
    return className || null;
  };

  // table scroll config
  const getScrollConfig = computed(() => {
    return {
      scrollToFirstRowOnChange: true,
      x: 'max-content',
      ...props.scroll,
    };
  });

  // selection config
  const selection = computed(() => {
    return props.rowSelection === null
      ? null
      : {
          ...props.rowSelection,
          onChange: (keys: (string | number)[], rows: any[]) => {
            selectedRowKeys.value = keys;
            selectedRows.value = rows;
          },
        };
  });

  return {
    loading,
    dataSource,
    pagination,
    selectedRowKeys,
    selectedRows,
    setLoading,
    handleRequest,
    handlePagination,
    handleSearch,
    handleReset,
    handleReload,
    getRowClassConfig,
    getScrollConfig,
    selection,
  };
};
