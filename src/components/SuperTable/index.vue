<template>
  <div class="super-table">
    <a-card size="small" class="super-table__form">
      {{ searchConfig?.searchText || '查询' }}
      {{ searchConfig?.resetText || '重置' }}
      {{ searchConfig?.displayReset || true }}
      {{ searchConfig?.displaySearch || true }}
      {{ searchConfig?.labelWidth || '80px' }}
    </a-card>
    <a-card size="small">
      <div class="super-table__util" v-if="showUtil">
        <a-space>
          <slot name="utilLeft" v-if="$slots.utilLeft" />
          <span v-else></span>
        </a-space>
        <a-space>
          <slot name="utilRight" />
          <a-tooltip title="刷新" :color="token.colorPrimary">
            <a-button shape="circle" :icon="h(ReloadOutlined)" :disabled="loading" @click="handleReload" />
          </a-tooltip>
          <a-tooltip title="导出" :color="token.colorPrimary">
            <a-button shape="circle" :icon="h(ExportOutlined)" :disabled="!selectedRowKeys.length" v-if="showExport" @click="handleExport" />
          </a-tooltip>
          <a-tooltip title="列配置" :color="token.colorPrimary">
            <a-button shape="circle" :icon="h(MenuOutlined)" />
          </a-tooltip>
          <a-tooltip title="搜索开关" :color="token.colorPrimary">
            <a-button shape="circle" :icon="h(SearchOutlined)" />
          </a-tooltip>
        </a-space>
      </div>
    </a-card>
    <div class="super-table__table">
      <a-table
        ref="table"
        v-bind="$attrs"
        :row-key="rowKey"
        :loading="loading"
        :dataSource="dataSource"
        :pagination="showPage ? { current: pagination.pageNum, pageSize: pagination.pageSize, total: pagination.total } : false"
        :row-selection="selection"
        :row-class-name="getRowClassConfig"
        :scroll="getScrollConfig"
        @change="handleChange"
      >
        <template #headerCell="{ text, record, index, column }">
          <slot name="headerCell" :text="text" :record="record" :index="index" :column="column" />
        </template>
        <template #bodyCell="{ text, record, index, column }">
          <slot name="bodyCell" :text="text" :record="record" :index="index" :column="column" />
        </template>
      </a-table>
    </div>
  </div>
</template>

<script lang="ts" setup name="SuperTable">
  import { ref, onBeforeMount, h } from 'vue';
  import { theme } from 'ant-design-vue';
  import { SearchOutlined, ReloadOutlined, MenuOutlined, ExportOutlined } from '@ant-design/icons-vue';
  import { SuperTableProps, SuperTableEmit } from './props';
  import { useTableRequest } from './hooks.ts';

  const emits = defineEmits<SuperTableEmit>();

  const props = withDefaults(defineProps<SuperTableProps>(), {
    rowKey: 'id',
    showStripe: true,
    showPage: true,
    showUtil: true,
    showExport: true,
    rowSelection: () => null,
  });

  const {
    loading,
    dataSource,
    pagination,
    selectedRowKeys,
    selectedRows,
    handleRequest,
    handlePagination,
    handleSearch,
    handleReset,
    handleReload,
    getRowClassConfig,
    getScrollConfig,
    selection,
  } = useTableRequest(props, emits);

  const { token } = theme.useToken();

  // const form = ref();
  const table = ref();

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
    console.log('super-table export handle');
  };

  defineExpose({ table, selectedRowKeys, selectedRows });
</script>

<style lang="less" scoped>
  @import './index.less';
</style>
