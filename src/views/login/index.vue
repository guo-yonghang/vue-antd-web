<template>
  <div>
    <SuperTable
      bordered
      displayStripe
      :requestApi="getUserList"
      :columns="columns"
      :scroll="{ x: 2700 }"
      @search="onSearch"
      @reset="onReset"
      @reload="onReload"
      @change="onChange"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <a-button type="link" danger @click="handleDelUser(record.id)">删除</a-button>
        </template>
      </template>
    </SuperTable>
  </div>
</template>

<script lang="tsx" setup>
  import { getUserList, delUser } from '@/api/modules/user';
  import { Image, Button, Tag, message } from 'ant-design-vue';

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      fixed: 'left',
    },
    {
      title: '头像',
      dataIndex: 'avatar',
      key: 'avatar',
      align: 'center',
      customRender: ({ text }: { text: string }) => {
        return <Image width={50} src={text} />;
      },
      customCell: () => {
        return {
          style: { padding: '5px 0px' },
        };
      },
    },
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
      align: 'center',
      width: 150,
      customRender: ({ text }: { text: string }) => {
        return <Button type="link">{text}</Button>;
      },
      customCell: () => {
        return {
          style: { color: 'purple' },
          onClick: (event: MouseEvent) => {
            event.preventDefault();
            message.info('点击单元格(可右击)');
          },
          onContextmenu: (event: MouseEvent) => {
            event.preventDefault();
            message.info('右击单元格(可点击)');
          },
        };
      },
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      width: 150,
      customRender: ({ text }: { text: string }) => {
        return (
          <span>
            {text === 'resolve' && <Tag color="green">{text}</Tag>}
            {text === 'reject' && <Tag color="red">{text}</Tag>}
            {text === 'pending' && <Tag color="orange">{text}</Tag>}
          </span>
        );
      },
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      width: 150,
    },
    {
      title: '手机',
      dataIndex: 'phone',
      key: 'phone',
      align: 'center',
      width: 150,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
      align: 'center',
      width: 250,
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
      align: 'center',
      width: 150,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      align: 'center',
      width: 150,
    },
    {
      title: '学历',
      dataIndex: 'education',
      key: 'education',
      align: 'center',
      width: 150,
    },
    {
      title: '生日',
      dataIndex: 'birthday',
      key: 'birthday',
      align: 'center',
      width: 200,
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      width: 250,
    },
    {
      title: '注册时间',
      dataIndex: 'createTime',
      key: 'createTime',
      align: 'center',
      width: 250,
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
      align: 'center',
      width: 250,
    },
    {
      title: '操作',
      dateIndex: 'action',
      key: 'action',
      align: 'center',
      width: 120,
      fixed: 'right',
    },
  ];

  const onSearch = () => {
    console.log('表格search');
  };

  const onReset = () => {
    console.log('表格reset');
  };
  const onReload = () => {
    console.log('表格reload');
  };

  const onChange = (e: any) => {
    console.log('表格change', e);
  };

  const handleDelUser = (id: string) => {
    delUser(id).then(() => {
      message.success('已删除');
    });
  };
</script>

<style scoped lang="less"></style>
