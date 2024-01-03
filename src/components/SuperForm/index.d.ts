import type { JSX } from 'vue/jsx-runtime';
import type { CSSProperties } from 'vue';

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
  rules?: Record<string, any>;
  gridCount?: 1 | 2 | 3;
  gridGutter?: number[];
  showFooter?: boolean;
  showCancel?: boolean;
  cancelText?: string;
  submitText?: string;
  footerAlign?: CSSProperties['WebkitJustifyContent'];
}

/**
 * @interface SuperFormEmits
 * @description SuperFormEmits interface for SuperForm component emits.
 */
export interface SuperFormEmits {
  (e: 'submit', value: any): void;

  (e: 'reset', value: any): void;
}
