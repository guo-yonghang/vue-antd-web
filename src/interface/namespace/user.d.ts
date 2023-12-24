//用户
export namespace User {
  //用户学历
  export type EducationType = '小学' | '中学' | '高中' | '大学' | '硕士' | '博士' | '院士';
  //用户性别
  export type GenderType = '男' | '女';
  //用户状态
  export type StatusType = 'resolve' | 'reject' | 'pending';

  //用户信息
  export interface UserType {
    address: string;
    age: number;
    avatar: string;
    birthday: string;
    createTime: string;
    email: string;
    id: string;
    name: string;
    phone: number;
    updateTime: string;
    username: string;
    verified: boolean;
    gender: GenderType;
    education: EducationType;
    status: StatusType;
  }

  //用户列表参数
  export interface ReqListType extends PageType {
    username?: string;
    phone?: string;
    education?: EducationType;
    verified?: 'true' | 'false';
  }
}
