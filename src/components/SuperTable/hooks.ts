import { ref, reactive, computed } from 'vue';
import { PaginationType, ResDataType, SuperTableProps, SuperTableEmit } from './index';

export const useTableRequest = (props: SuperTableProps, emits: SuperTableEmit) => {
  // loading status of table
  const loading = ref<boolean>(false);

  // form expanded status
  const expandVisible = ref<boolean>(false);

  // form visible status
  const formVisible = ref<boolean>(true);

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

  // toggle expanded status
  const toggleExpandVisible = (): void => {
    expandVisible.value = !expandVisible.value;
  };

  // toggle form visible status
  const toggleFormVisible = (): void => {
    formVisible.value = !formVisible.value;
  };

  // request api to retrieve table data
  const handleRequest = async (): Promise<void> => {
    if (!props.request) return;
    if (loading.value) return;
    setLoading(true);
    emits('request', null);
    try {
      const { pageNum, pageSize } = pagination;
      const params = { ...props.searchParams };
      props.formatParams && props.formatParams(params);
      for (const k in params) {
        params[k] = params[k] === '' ? undefined : params[k];
      }
      const result: ResDataType<any> = await props.request({ pageNum, pageSize, ...params });
      console.log('请求结果', result);
      pagination.pageNum = result.pageNum;
      pagination.pageSize = result.pageSize;
      pagination.total = result.total;
      dataSource.value = result.list;
    } catch (error) {
      console.log('super-table hooks request fail', error);
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
    if (loading.value) return;
    emits('search', null);
    handleRequest();
  };

  // handle table reset
  const handleReset = (): void => {
    if (loading.value) return;
    emits('reset', null);
    pagination.pageNum = 1;
    handleRequest();
  };

  // handle table reload
  const handleReload = (): void => {
    if (loading.value) return;
    emits('reload', null);
    handleRequest();
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
    return props.rowSelection === undefined
      ? undefined
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
    expandVisible,
    formVisible,
    dataSource,
    pagination,
    selectedRowKeys,
    selectedRows,
    setLoading,
    toggleExpandVisible,
    toggleFormVisible,
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
