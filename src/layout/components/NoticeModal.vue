<template>
  <a-modal v-model:open="visible" title="最新消息" :footer="null">
    <div class="list-wrapper">
      <a-list item-layout="horizontal" :data-source="dataSource">
        <template #renderItem="{ item }">
          <a-list-item>
            <template #actions v-if="!loading">
              <a key="list-more">查看</a>
            </template>
            <a-skeleton avatar :title="false" :loading="loading" active>
              <a-list-item-meta :description="item.content">
                <template #title>
                  <span>{{ item.title }}</span>
                </template>
                <template #avatar>
                  <a-avatar :src="item.avatar" />
                </template>
              </a-list-item-meta>
            </a-skeleton>
          </a-list-item>
        </template>
      </a-list>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useLoading } from '@/hooks';

  const { loading, setLoading } = useLoading();

  const visible = ref<boolean>(false);

  const dataSource = ref([
    {
      title: '未遇行藏谁肯信',
      content: '无端良匠画形容，当风轻借力，一举入高空。。',
      avatar: 'https://img.keaitupian.cn/newupload/09/1662189502999366.jpg',
    },
    {
      title: '觉宇宙之无穷',
      content: '挟飞仙以遨游，抱明月而长终，知不可乎骤得，托遗响于悲风。',
      avatar: 'https://img.keaitupian.cn/newupload/11/1667372899782907.jpg',
    },
    {
      title: '俊彩星驰',
      content: '老当益壮宁移白首之心，穷且益坚不坠青云之志。',
      avatar: 'https://www.keaitupian.cn/cjpic/frombd/1/253/3835425342/1856991308.jpg',
    },
    {
      title: '天空海阔你与我',
      content: '原谅我这一生不羁放纵爱自由，也会怕有一天会跌倒。',
      avatar: 'https://th.bing.com/th/id/R.a13cd10a48326cf286beaf10fb049d77?rik=Kdj0Ac2jEIPtzw&pid=ImgRaw&r=0',
    },
    {
      title: '不懂爱恨情仇跌宕的我们',
      content: '风到这里就是粘，粘着过客的思念。',
      avatar: 'https://img.keaitupian.cn/newupload/11/1667372899782907.jpg',
    },
    {
      title: '离开有你的季节',
      content: '我用眼光去追，竟听见你的泪。',
      avatar: 'https://img.keaitupian.cn/newupload/09/1662189502999366.jpg',
    },
    {
      title: '假如我年少有为不自卑',
      content: '金钱地位，搏到了却好像退回。',
      avatar: 'https://www.keaitupian.cn/cjpic/frombd/1/253/3835425342/1856991308.jpg',
    },
  ]);

  defineExpose({
    open() {
      setLoading(true);
      setTimeout(() => setLoading(false), 1000);
      visible.value = true;
    },
  });
</script>

<style scoped lang="less">
  .list-wrapper {
    max-height: 500px;
    overflow-y: scroll;
  }
</style>
