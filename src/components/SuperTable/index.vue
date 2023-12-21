<template>
  <div>
    <a-card>
      <a-space>
        <a-button type="primary" @click="handleSearch">search</a-button>
        <a-button type="primary" @click="handleReset">reset</a-button>
        <a-button type="primary" @click="handleReload">reload</a-button>
      </a-space>
    </a-card>
    <a-table
      ref="table"
      class="super-table"
      v-bind="$attrs"
      :loading="loading"
      :dataSource="dataSource"
      :pagination="displayPage ? { current: pagination.pageNum, pageSize: pagination.pageSize, total: pagination.total } : false"
      :row-class-name="handleRowClass"
      @change="handleChange"
    >
      <template #headerCell="{ text, record, index, column }">
        <slot name="headerCell" :text="text" :record="record" :index="index" :column="column" />
      </template>
      <template #bodyCell="{ text, record, index, column }">
        <slot name="bodyCell" :text="text" :record="record" :index="index" :column="column" />
      </template>
    </a-table>
    <!-- {{ searchConfig?.searchText || '查询' }}
    {{ searchConfig?.resetText || '重置' }}
    {{ searchConfig?.displayReset || true }}
    {{ searchConfig?.displaySearch || true }}
    {{ searchConfig?.labelWidth || '80px' }} -->
  </div>
</template>

<script lang="ts" setup name="SuperTable">
  import { ref, onBeforeMount } from 'vue';
  import { SuperTableProps, SuperTableEmit } from './props';
  import { useSuperTable } from './hooks';

  const emits = defineEmits<SuperTableEmit>();

  const props = withDefaults(defineProps<SuperTableProps>(), {
    rowKey: 'id',
    displayStripe: false,
    displayPage: true,
    displayForm: true,
    displayUtil: true,
  });

  const { loading, dataSource, pagination, handleRequest, handlePagination, handleSearch, handleReset, handleReload, handleRowClass } = useSuperTable(
    props,
    emits,
  );

  // const form = ref();
  const table = ref();

  onBeforeMount(() => {
    handleRequest();
  });

  const handleChange = (pagination: Record<string, number>, filters: any, sorter: any, { currentDataSource }: any) => {
    handlePagination(pagination);
    emits('change', { pagination, filters, sorter, currentDataSource });
  };

  defineExpose({ table });
</script>

<style lang="less" scoped>
  @import './index.less';
</style>
