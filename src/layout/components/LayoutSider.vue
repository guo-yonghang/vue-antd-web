<template>
  <div class="flxc" style="height: 50px">
    <img src="@/assets/vue.svg" style="width: 32px" />
  </div>
  <a-menu theme="dark" mode="inline" v-model:open-keys="openKeys" v-model:selected-keys="selectedKeys" :items="menuList"></a-menu>
</template>

<script lang="tsx" setup>
  import { ref, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useGlobalStore, useSettingStore } from '@/store';
  import { AntMenuItemType } from '@/interface';
  import { isHttp } from '@/utils';

  const route = useRoute();
  const router = useRouter();
  const globalStore = useGlobalStore();
  const settingStore = useSettingStore();

  const openKeys = ref<string[]>([]);
  const selectedKeys = ref<string[]>([]);

  // open directory keys
  // const openKeys = computed(() => {
  //   console.log(route);
  //   const { matched, path } = route;
  //   return matched.filter((i) => i.path !== '/layout' && i.path !== path).map((i) => i.path);
  // });
  //
  // // open selected keys
  // const selectedKeys = computed(() => {
  //   return [route.matched[route.matched.length - 1].path];
  // });

  // const { matched, path } = route;
  // openKeys.value = matched.filter((i) => i.path !== '/layout' && i.path !== path).map((i) => i.path);
  // selectedKeys.value = [matched[matched.length - 1].path];

  // menu items value
  const menuList = computed(() => {
    const result = getMenuList(globalStore.layoutRoute?.children || []);
    console.log('result', result);
    return result;
  });

  // format menu-list
  const getMenuList = (list: any[], parentPath: string = ''): AntMenuItemType[] => {
    list = list.filter((i) => i.meta.visible);
    if (!list.length) return [];
    return list.map((item) => {
      const key = `${parentPath}${parentPath ? '/' : ''}${item.path}`;
      const titleKey = settingStore.language === 'zh' ? 'title' : 'enTitle';
      const result: AntMenuItemType = {
        key,
        title: item.meta[titleKey],
        label: item.meta[titleKey],
        icon: getIconContext(item.meta.icon || ''),
      };
      if (item.children?.length) {
        (result.children as any[]) = getMenuList(item.children, key);
      }
      return result;
    });
  };

  // get icon context
  const getIconContext = (icon: string) => {
    if (isHttp(icon)) {
      return <img src={icon} style="width:16px;height:16px;" />;
    }
    return <span>{icon && <super-icon name={icon} type={icon.includes('svg-') ? 'svg' : 'antd'} size="16" iconStyle={{ fontSize: '16px' }} />}</span>;
  };

  // click menu item
  const handleClickItem = ({ item, key, keyPath }: any) => {
    // router.push(key);
  };
</script>

<style lang="less" scoped></style>
