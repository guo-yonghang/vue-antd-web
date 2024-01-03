import type { JSX } from 'vue/jsx-runtime';

/**
 * @interface FormItemType
 * @description Defines the structure of a form item.
 */
interface FormItemType {
  key: string;
  label: string;
  type: 'input' | 'select' | 'input-number' | 'cascader' | 'date' | 'date-range' | 'time' | 'time-range';
  render?: () => JSX.Element;
  attrs?: Record<string, any>;
}

/**
 * @interface SuperFormProps
 * @description Defines the properties of the SuperForm component.
 */
export interface SuperFormProps {
  items?: FormItemType[];
}
