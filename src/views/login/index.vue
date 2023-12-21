<template>
  <div>
    <SuperTable
      :requestApi="getUserList"
      :row-class-name="(_record: any, index: any) => (index % 2 === 1 ? 'table-striped' : null)"
      :columns="columns"
      :displayStripe="true"
    >
      <template #bodyCell="{ column }">
        <template v-if="column.key === 'action'">
          <a-button type="link">重置</a-button>
        </template>
      </template>
    </SuperTable>
  </div>
</template>

<script lang="ts" setup>
  import { getUserList } from '@/api/modules/user';

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      align: 'center',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '操作',
      dateIndex: 'action',
      key: 'action',
      align: 'center',
    },
  ];
</script>

<style scoped lang="less"></style>
