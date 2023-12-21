<template>
  <div>
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
  import { PaginationType } from './interface';
  import { useSuperTable } from './hooks';

  const emits = defineEmits<SuperTableEmit>();

  const props = withDefaults(defineProps<SuperTableProps>(), {
    rowKey: 'id',
    displayStripe: false,
    displayPage: true,
    displayForm: true,
    displayUtil: true,
    searchParams: () => ({ pageNum: 1, pageSize: 10 }),
  });

  const { loading, dataSource, pagination, handleRequest, handleRowClass } = useSuperTable(props);

  // const form = ref();
  const table = ref();

  onBeforeMount(() => {
    handleRequest();
  });

  const handleChange = (pagination: PaginationType, filters: any, sorter: any, { currentDataSource }: any) => {
    console.log('pagination', pagination);
    console.log('filters', filters);
    console.log('sorter', sorter);
    console.log('currentDataSource', currentDataSource);
  };

  defineExpose({ table });
</script>

<style lang="less" scoped>
  @import './index.less';
</style>
