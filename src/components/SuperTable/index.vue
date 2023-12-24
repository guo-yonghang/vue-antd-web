<template>
  <div class="super-table">
    <div class="super-table__form">
      <a-form ref="formRef" :model="searchParams" v-bind="searchConfig">
        <template v-for="item in searchColumns" :key="item.key">
          <a-form-item :label="item.label" :name="item.key" :label-col="{ span: 6 }">
            <component :is="item.render" v-if="item.render" />
            <template v-else>
              <a-input v-if="item.type === 'input'" v-model:value="searchParams[item.key]" placeholder="请输入" allow-clear v-bind="item.attrs" />
              <a-select v-if="item.type === 'select'" v-model:value="searchParams[item.key]" placeholder="请选择" allow-clear v-bind="item.attrs" />
              <!--              <a-cascader v-if="item.type === 'cascader'" v-model:value="searchParams[item.key]" placeholder="请选择" allow-clear v-bind="item.attrs" />-->
              <super-cascader v-if="item.type === 'cascader'" v-model="searchParams[item.key]" placeholder="请选择" allow-clear v-bind="item.attrs" />
              <a-date-picker v-if="item.type === 'date'" v-model:value="searchParams[item.key]" placeholder="请选择" allow-clear v-bind="item.attrs" />
              <a-range-picker v-if="item.type === 'date-range'" v-model:value="searchParams[item.key]" allow-clear v-bind="item.attrs" />
              <a-date-picker v-if="item.type === 'time'" v-model:value="searchParams[item.key]" show-time placeholder="请选择" allow-clear v-bind="item.attrs" />
              <a-range-picker v-if="item.type === 'time-range'" v-model:value="searchParams[item.key]" show-time allow-clear v-bind="item.attrs" />
            </template>
          </a-form-item>
        </template>
      </a-form>
      <div class="super-table__form-submit">
        <a-space size="small">
          <a-button type="primary" @click="handleSearch">{{ searchConfig?.searchText || '查询' }}</a-button>
          <a-button type="default" @click="handleReset">{{ searchConfig?.resetText || '重置' }}</a-button>
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
    <div class="super-table__table">
      <a-table
        ref="tableRef"
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
  import { SuperTableProps, SuperTableEmit } from './index';
  import { useTableRequest } from './hooks.ts';

  const emits = defineEmits<SuperTableEmit>();

  const props = withDefaults(defineProps<SuperTableProps>(), {
    rowKey: 'id',
    showStripe: true,
    showPage: true,
    showUtil: true,
    showExport: true,
    searchParams: () => ({}),
  });

  const { loading, dataSource, pagination, selectedRowKeys, selectedRows, handleRequest, handlePagination, handleSearch, handleReset, handleReload, getRowClassConfig, getScrollConfig, selection } =
    useTableRequest(props, emits);

  const { token } = theme.useToken();
  console.log(token);

  const formRef = ref();
  const tableRef = ref();

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

  defineExpose({ formRef, tableRef, selectedRowKeys, selectedRows });
</script>

<style lang="less" scoped>
  @import './index.less';
</style>
