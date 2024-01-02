<template>
  <div class="super-table">
    <div class="super-table__form" v-if="formVisible && searchColumns?.length">
      <a-form ref="formRef" :model="searchParams" :style="{ height: expandVisible ? 'auto' : '60px' }" v-bind="searchConfig">
        <template v-for="item in searchColumns" :key="item.key">
          <a-form-item :label="item.label" :name="item.key" :label-col="{ span: 6 }">
            <component :is="item.render" v-if="item.render" />
            <template v-else>
              <a-input v-if="item.type === 'input'" v-model:value="searchParams[item.key]" placeholder="请输入" allow-clear v-bind="item.attrs" />
              <a-select v-if="item.type === 'select'" v-model:value="searchParams[item.key]" placeholder="请选择" allow-clear v-bind="item.attrs" />
              <super-cascader v-if="item.type === 'cascader'" v-model="searchParams[item.key]" placeholder="请选择" allow-clear v-bind="item.attrs" />
              <a-date-picker v-if="item.type === 'date'" v-model:value="searchParams[item.key]" placeholder="请选择" allow-clear value-format="YYYY-MM-DD" v-bind="item.attrs" />
              <a-range-picker v-if="item.type === 'date-range'" v-model:value="searchParams[item.key]" allow-clear value-format="YYYY-MM-DD" v-bind="item.attrs" />
              <a-date-picker v-if="item.type === 'time'" v-model:value="searchParams[item.key]" placeholder="请选择" allow-clear show-time value-format="YYYY-MM-DD HH:mm:ss" v-bind="item.attrs" />
              <a-range-picker v-if="item.type === 'time-range'" v-model:value="searchParams[item.key]" allow-clear show-time value-format="YYYY-MM-DD HH:mm:ss" v-bind="item.attrs" />
            </template>
          </a-form-item>
        </template>
      </a-form>
      <div class="super-table__form-submit">
        <a-space size="small">
          <a-button type="primary" @click="handleSearch">{{ searchConfig?.searchText || '查询' }}</a-button>
          <a-button type="default" @click="handleReset">{{ searchConfig?.resetText || '重置' }}</a-button>
          <a type="link" v-if="searchColumns.length > formWidth / 400" @click="toggleExpandVisible">
            <span>{{ expandVisible ? '合并' : '展开' }}</span>
            <UpOutlined v-if="expandVisible" />
            <DownOutlined v-else />
          </a>
        </a-space>
      </div>
    </div>
    <div class="super-table__util" v-if="showUtil">
      <a-space>
        <slot name="utilLeft" v-if="$slots.utilLeft" />
        <span v-else></span>
      </a-space>
      <a-space>
        <slot name="utilRight" />
        <a-tooltip title="刷新">
          <a-button shape="circle" :icon="h(ReloadOutlined)" :disabled="loading" @click="handleReload" />
        </a-tooltip>
        <a-tooltip title="导出" v-if="showExport">
          <a-button shape="circle" :icon="h(ExportOutlined)" :disabled="!selectedRowKeys.length" @click="handleExport" />
        </a-tooltip>
        <a-tooltip :title="formVisible ? '隐藏搜索' : '展示搜索'" v-if="searchColumns?.length" @click="toggleFormVisible">
          <a-button shape="circle" :icon="h(SearchOutlined)" />
        </a-tooltip>
      </a-space>
    </div>
    <div class="super-table__table" ref="tableBoxRef">
      <a-table
        ref="tableRef"
        v-bind="$attrs"
        :row-key="rowKey"
        :loading="loading || resizing"
        :dataSource="dataSource"
        :pagination="showPage ? { current: pagination.pageNum, pageSize: pagination.pageSize, total: pagination.total } : false"
        :row-selection="selection"
        :row-class-name="getRowClassConfig"
        :scroll="{ ...getScrollConfig, y: yHeight }"
        @change="handleChange"
      >
        <template #headerCell="{ text, record, index, column }" v-if="$slots.headerCell">
          <slot name="headerCell" :text="text" :record="record" :index="index" :column="column" />
        </template>
        <template #bodyCell="{ text, record, index, column }" v-if="$slots.bodyCell">
          <slot name="bodyCell" :text="text" :record="record" :index="index" :column="column" />
        </template>
      </a-table>
    </div>
  </div>
</template>

<script lang="ts" setup name="SuperTable">
  import { ref, computed, watch, onBeforeMount, h } from 'vue';
  import { message } from 'ant-design-vue';
  import { SearchOutlined, ReloadOutlined, ExportOutlined, DownOutlined, UpOutlined } from '@ant-design/icons-vue';
  import { SuperTableProps, SuperTableEmit } from './index';
  import { useTableRequest } from './hooks.ts';
  import { useElementSize, useWindowSize, useElementVisibility } from '@vueuse/core';
  import { useSettingStore } from '@/store';

  const emits = defineEmits<SuperTableEmit>();

  const props = withDefaults(defineProps<SuperTableProps>(), {
    rowKey: 'id',
    showStripe: true,
    showPage: true,
    showUtil: true,
    showExport: true,
    searchParams: () => ({}),
    searchColumns: () => [],
  });

  const {
    loading,
    expandVisible,
    formVisible,
    dataSource,
    pagination,
    selectedRowKeys,
    selectedRows,
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
  } = useTableRequest(props, emits);

  const settingStore = useSettingStore();

  const formRef = ref(null);
  const tableRef = ref(null);
  const tableBoxRef = ref(null);
  const resizing = ref(false);

  const yHeight = ref<number | string>('auto');

  const { height: windowHeight } = useWindowSize();
  const { width: formWidth } = useElementSize(formRef);
  const { height: tableHeight } = useElementSize(tableBoxRef);
  const tableVisible = useElementVisibility(tableBoxRef);

  // set table y height
  const setYheight = async () => {
    if (!tableVisible.value) return;
    resizing.value = true;
    yHeight.value = 0;
    setTimeout(() => {
      yHeight.value = tableHeight.value - 119;
      resizing.value = false;
    }, 200);
  };

  // watch window height set table y height
  watch(
    () => [windowHeight.value, expandVisible.value, formVisible.value, tableVisible.value, settingStore.showHeader, settingStore.showTabs],
    () => {
      setYheight();
    },
    { immediate: true },
  );

  onBeforeMount(() => {
    handleRequest();
  });

  // a-table's change handle
  const handleChange = (pagination: Record<string, number>, filters: any, sorter: any, { currentDataSource }: any) => {
    handlePagination(pagination);
    emits('change', { pagination, filters, sorter, currentDataSource });
  };

  // super-table export handle
  const handleExport = () => {
    message.warning('导出功能暂未开放');
  };

  // expose
  defineExpose({
    formRef,
    tableRef,
    selectedRowKeys: computed(() => selectedRowKeys.value),
    selectedRows: computed(() => selectedRows.value),
    setSelectedRowKeys: (keys: (string | number)[]) => {
      selectedRowKeys.value = keys;
      selectedRows.value = dataSource.value.filter((item: any) => keys.includes(item[props.rowKey]));
    },
    search: handleSearch,
    reset: handleReset,
    reload: handleReload,
    export: handleExport,
  });
</script>

<style lang="less" scoped>
  @import './index.less';
</style>
