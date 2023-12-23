import type { TableProps } from 'ant-design-vue';

// type of pagination
export interface PaginationType extends PageType {
  pageNum: number;
  pageSize: number;
  total: number;
}

export interface ResDataType<T> extends PaginationType {
  list: T[];
}

// type of request's params
export interface SearchParamsType {
  [key: string]: any;
}

// type of request's config
export interface SearchConfigType extends Record<string, any> {
  searchText?: string;
  resetText?: string;
}

// type of request's colums
interface SearchColumnsItemType {
  key: string;
  label: string;
  type: 'input' | 'select' | 'input-number' | 'cascader' | 'date' | 'date-range' | 'time' | 'time-range';
  render?: () => JSX.Element;
  attrs?: Record<string, any>;
}

export type SearchColumnsType = SearchColumnsItemType[];

// type of component's props
export interface SuperTableProps {
  rowKey?: string;
  request?: (params: any) => Promise<T>;
  showStripe?: boolean;
  showPage?: boolean;
  showUtil?: boolean;
  showExport?: boolean;
  searchParams?: SearchParamsType;
  searchColumns?: SearchColumnsType;
  searchConfig?: SearchConfigType;
  rowSelection?: TableProps['rowSelection'];
  scroll?: TableProps['scroll'];
}

// type of component's emits
export interface SuperTableEmit {
  (e: 'request', value: any): void;

  (e: 'search', value: any): void;

  (e: 'reset', value: any): void;

  (e: 'reload', value: any): void;

  (e: 'change', value: any): void;
}
