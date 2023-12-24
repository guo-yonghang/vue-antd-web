// options item type
export interface OptionsItemType {
  label: string;
  value: string | number;
  children?: OptionsItemType[];
}

// options list type
export type OptionsListType = OptionsItemType[];

// emits type
export interface EmitsType {
  (e: 'update:modelValue', value: any): void;
}

// props type
export interface PropsType {
  modelValue?: any;
  valueType?: 'single' | 'all';
  options?: OptionsListType;
}
