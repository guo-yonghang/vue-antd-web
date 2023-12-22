# SuperTable

```
start development time 2023-12-21 13:00:00

development author guo-yonghang
```

### SuperTableProps

**表格组件参数**

```
interface SuperTableProps {
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
```

| 字段名       | 说明              | 类型                                 | 默认值                                          |
| ------------ | ----------------- | ------------------------------------ | ----------------------------------------------- |
| rowKey       | 表格行 key 的取值 | string\|(record)=>string             | id                                              |
| request      | 请求接口函数      | function:(params: any) => Promise<T> | undefined                                       |
| showStripe   | 展示斑马线        | boolean                              | true                                            |
| showPage     | 展示页码区域      | boolean                              | true                                            |
| showUtil     | 展示操作区域      | boolean                              | true                                            |
| showExport   | 展示导出按钮      | boolean                              | true                                            |
| searchParams | 搜索表单参数      | SearchParamsType[见下方说明]         | {}                                              |
| searchConfig | 搜索表单配置      | SearchConfigType[见下方说明]         | {}                                              |
| rowSelection | 勾选行配置        | TableProps['rowSelection']           | {onChange:()=>void}                             |
| scroll       | 表格滚动配置      | TableProps['scroll']                 | {scrollToFirstRowOnChange:true,x:'max-content'} |
|              |                   |                                      |                                                 |

### SearchParamsType

**搜索表单参数**

```
interface SearchParamsType {
  [key: string]: any;
}
```

### SearchConfigType

**搜索表单区域的配置**

```
interface SearchConfigType {
  searchText?: string;
  resetText?: string;
  showSearch?: boolean;
  showReset?: boolean;
  labelWidth?: number;
}
```

| 字段名     | 说明            | 类型    | 默认值 |
| ---------- | --------------- | ------- | ------ |
| searchText | 查询按钮文本    | string  | 查询   |
| resetText  | 重置按钮文本    | string  | 重置   |
| showSearch | 展示查询按钮    | boolean | true   |
| showReset  | 展示重置按钮    | boolean | true   |
| labelWidth | 表单项label宽度 | number  | 80     |

