// value type
export type valueType = string | number | (string | number)[];

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
  (e: 'update:value', value: valueType): void;
}

// props type
export interface PropsType {
  value: valueType;
  options?: OptionsListType;
}
