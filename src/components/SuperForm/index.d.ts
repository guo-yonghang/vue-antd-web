/**
 * @interface FormItemType
 * @description Defines the structure of a form item.
 */
interface FormItemType {
  span?: number;
  key: string;
  label: string;
  type: 'input' | 'select' | 'radio' | 'checkbox' | 'input-number' | 'cascader' | 'date' | 'date-range' | 'time' | 'time-range' | 'rate' | 'slider';
  render?: () => JSX.Element;
  attrs?: Record<string, any>;
  config?: Record<string, any>;
}

/**
 * @interface SuperFormProps
 * @description Defines the properties of the SuperForm component.
 */
export interface SuperFormProps {
  items?: FormItemType[];
  rules?: Record<string, any>;
  gridSpan?: number;
  gridGutter?: number[];
  showFooter?: boolean;
  showCancel?: boolean;
  cancelText?: string;
  submitText?: string;
}

/**
 * @interface SuperFormEmits
 * @description SuperFormEmits interface for SuperForm component emits.
 */
export interface SuperFormEmits {
  (e: 'submit', value: any): void;

  (e: 'reset', value: any): void;
}
