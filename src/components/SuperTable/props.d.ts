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
  displayStripe?: boolean;
  displayPage?: boolean;
  displayForm?: boolean;
  displayUtil?: boolean;
  searchParams?: SearchParamsType;
  searchConfig?: SearchConfigType;
  onSearch?: (values: Record<string, any>, callback: () => void) => void;
  onReset?: () => void;
  requestApi?: (params: any) => Promise<T>;
}

// type of component's emits
export interface SuperTableEmit {
  (e: 'search', value: any): void;

  (e: 'reset', value: any): void;

  (e: 'reload', value: any): void;

  (e: 'change', value: any): void;
}
