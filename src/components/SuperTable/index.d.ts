import type { JSX } from 'vue/jsx-runtime';
import type { TableProps } from 'ant-design-vue';

/**
 * PaginationType interface for pagination related properties.
 * @interface
 * @property {number} pageNum - The current page number.
 * @property {number} pageSize - The number of items per page.
 * @property {number} total - The total number of items.
 */
export interface PaginationType extends PageType {
  pageNum: number;
  pageSize: number;
  total: number;
}

/**
 * ResDataType interface for response data type.
 */
export interface ResDataType<T> extends PaginationType {
  list: T[];
}

/**
 * SearchConfigType interface for search configuration.
 */
export interface SearchConfigType extends Record<string, any> {
  searchText?: string;
  resetText?: string;
}

/**
 * SearchColumnsItemType interface for search column item.
 */
interface SearchColumnsItemType {
  key: string;
  label: string;
  type: 'input' | 'select' | 'input-number' | 'cascader' | 'date' | 'date-range' | 'time' | 'time-range';
  render?: () => JSX.Element;
  attrs?: Record<string, any>;
}

/**
 * Type alias for an array of SearchColumnsItemType.
 */
export type SearchColumnsType = SearchColumnsItemType[];

/**
 * SuperTableProps interface for SuperTable component properties.
 */
export interface SuperTableProps {
  rowKey?: string;
  request?: (params: any) => Promise<T>;
  showStripe?: boolean;
  showPage?: boolean;
  showUtil?: boolean;
  showExport?: boolean;
  searchParams?: Record<string, any>;
  searchColumns?: SearchColumnsType;
  searchConfig?: SearchConfigType;
  rowSelection?: TableProps['rowSelection'];
  scroll?: TableProps['scroll'];
  formatParams?: (params: any) => void;
}

/**
 * SuperTableEmit interface for SuperTable component emits.
 */
export interface SuperTableEmit {
  (e: 'request', value: any): void;

  (e: 'search', value: any): void;

  (e: 'reset', value: any): void;

  (e: 'reload', value: any): void;

  (e: 'change', value: any): void;
}
