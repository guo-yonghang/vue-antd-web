//基本响应
export interface ResType {
  code: string;
  message: string;
}

//带返回值响应
export interface ResDataType<T = any> extends ResType {
  data: T;
}

//页码
export interface PageType {
  pageNum: number;
  pageSize: number;
}

//列表返回值
export interface ResListType<T> extends PageType {
  list: T[];
  total: number;
}
