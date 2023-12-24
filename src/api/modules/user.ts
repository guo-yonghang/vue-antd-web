import { User, ResListType } from '@/interface';
import api from '@/api/http';

// 获取用户列表
export const getUserList = (params: User.ReqListType) => {
  return api.get<ResListType<User.UserType>>('/user/user-list', params);
};

// 获取用户详情
export const getUserDetail = (id: string) => {
  return api.get<User.UserType>('/user/user-detail/' + id);
};

// 删除用户
export const delUser = (id: string) => {
  return api.del<string>('/user/user-delete/' + id, { loadingMessage: '删除用户' });
};
