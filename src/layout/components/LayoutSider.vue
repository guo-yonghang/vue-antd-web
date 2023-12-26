<template>
  <div class="flxc" style="height: 50px">
    <img src="@/assets/vue.svg" style="width: 32px" />
  </div>
  <a-menu
    theme="dark"
    mode="inline"
    :openKeys="state.openKeys"
    :selectedKeys="state.selectedKeys"
    :inline-collapsed="false"
    :items="menuList"
    @openChange="handleOpenChange"
    @click="handleClickItem"
  ></a-menu>
</template>

<script lang="tsx" setup>
  import { reactive, computed } from 'vue';
  import { useGlobalStore, useSettingStore } from '@/store';
  import { AntMenuItemType } from '@/interface';
  import { isHttp } from '@/utils';

  const globalStore = useGlobalStore();
  const settingStore = useSettingStore();

  const state = reactive({
    collapsed: false,
    openKeys: ['/table'],
    selectedKeys: ['/table', '/table/pro-table'],
  });

  const menuList = computed(() => {
    console.log(globalStore.layoutRoute?.children);
    const result = getMenuList(globalStore.layoutRoute?.children || []);
    console.log(result);
    return result;
  });

  // format menu-list
  const getMenuList = (list: any[]): AntMenuItemType[] => {
    if (!list.length) return [];
    return list.map((item) => {
      const titleKey = settingStore.language === 'zh' ? 'title' : 'enTitle';
      const result: AntMenuItemType = {
        key: item.path,
        title: item.meta[titleKey],
        label: item.meta[titleKey],
        icon: getIconContext(item.meta.icon),
      };
      if (item.children?.length) {
        (result.children as any[]) = getMenuList(item.children);
      }
      return result;
    });
  };

  // get icon context
  const getIconContext = (icon: string) => {
    if (isHttp(icon)) {
      return <img src={icon} style="width:28px;height:28px;" />;
    }
    return <super-icon name={icon} type={icon.includes('icon-') ? 'svg' : 'antd'} size="28" />;
  };

  // handle open change
  const handleOpenChange = (openKeys: (string | number)[]) => {
    console.log('openKeys', openKeys);
  };

  const handleClickItem = ({ item, key, keyPath }: any) => {
    console.log('item', item);
    console.log('key', key);
    console.log('keyPath', keyPath);
  };
</script>

<style lang="less" scoped></style>
