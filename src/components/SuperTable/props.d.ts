import type { TableProps } from 'ant-design-vue';

// type of request's params
export interface SearchParamsType {
  [key: string]: any;
}

// type of request's config
export interface SearchConfigType {
  searchText?: string;
  resetText?: string;
  displaySearch?: boolean;
  displayReset?: boolean;
  labelWidth?: number;
}

// type of component's props
export interface SuperTableProps {
  rowKey?: string;
  request?: (params: any) => Promise<T>;
  showStripe?: boolean;
  showPage?: boolean;
  showUtil?: boolean;
  showExport?: boolean;
  searchParams?: SearchParamsType;
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
