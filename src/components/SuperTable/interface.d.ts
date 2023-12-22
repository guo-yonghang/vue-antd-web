// type of pagination
export interface PaginationType extends PageType {
  pageNum: number;
  pageSize: number;
  total: number;
}

export interface ResDataType<T> extends PaginationType {
  list: T[];
}
