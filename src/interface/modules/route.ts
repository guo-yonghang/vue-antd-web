export interface MenuItemType {
  id: string;
  title: string;
  enTitle: string;
  path: string;
  permission: string;
  icon: string;
  visible: boolean;
  keepAlive: boolean;
  status: number;
  idx: number;
  type: number;
  children?: MenuItemType[];
}
