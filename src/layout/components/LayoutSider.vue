<template>
  <div class="flxc" style="height: 60px">
    <img src="@/assets/vue.svg" style="width: 32px" alt="logo" />
  </div>
  <a-menu theme="dark" mode="inline" :open-keys="openKeys" :selected-keys="selectedKeys" :inline-collapsed="false" :items="menuItems" @click="handleClickItem"></a-menu>
</template>

<script lang="tsx" setup>
  import { ref, computed, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useGlobalStore, useSettingStore } from '@/store';
  import { AntMenuItemType } from '@/interface';
  import { isHttp } from '@/utils';

  const route = useRoute();
  const router = useRouter();
  const globalStore = useGlobalStore();
  const settingStore = useSettingStore();

  const menuItems = ref<AntMenuItemType[]>([]);

  // 展开的目录key数组<通过处理只展开一个>
  const openKeys = computed(() => {
    const { matched, path } = route;
    return matched.filter((i) => i.path !== '/layout' && i.path !== path).map((i) => i.path);
  });

  // 选中的菜单key数组<只能处理只选中一个>
  const selectedKeys = computed(() => {
    return [route.matched[route.matched.length - 1].path];
  });

  // 递归处理并返回menu组件所需要的数据
  const getMenuItems = (list: any[], parentPath: string = ''): AntMenuItemType[] => {
    list = list.filter((i) => i.meta.visible);
    if (!list.length) return [];
    return list.map((item) => {
      const key = `${parentPath}${parentPath ? '/' : ''}${item.path}`;
      const titleKey = settingStore.language === 'zh' ? 'title' : 'enTitle';
      const result: AntMenuItemType = {
        type: undefined,
        key,
        // title: item.meta[titleKey],
        label: item.meta[titleKey],
        icon: getIconContext(item.meta.icon || ''),
      };
      if (item.children?.length) {
        (result.children as any[]) = getMenuItems(item.children, key);
      }
      return result;
    });
  };

  // 通过icon的值渲染图标内容
  const getIconContext = (icon: string) => {
    if (isHttp(icon)) {
      return <img src={icon} style="width:16px;height:16px;" alt="menu-icon" />;
    }
    return <span>{icon && <super-icon name={icon} type={icon.includes('svg-') ? 'svg' : 'antd'} size="16" />}</span>;
  };

  // 监听自定义路由表处理menu数据
  watch(
    () => globalStore.layoutRoute,
    (newValue) => {
      menuItems.value = getMenuItems(newValue?.children || []);
    },
    { immediate: true, deep: true },
  );

  // 点击菜单跳转路由
  const handleClickItem = ({ key }: { key: string }) => {
    router.push(key);
  };
</script>

<style lang="less" scoped></style>
