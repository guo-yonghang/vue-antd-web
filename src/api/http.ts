import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { ResDataType } from '@/interface';
import { useGlobalStore } from '@/store';
import { showLoadingUtil, hideLoadingUtil } from '@/utils';
import { message } from 'ant-design-vue';

export interface CustomInternalAxiosRequestConfig extends InternalAxiosRequestConfig {
  loadingMessage?: string; //新增可loading
}

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  loadingMessage?: string; //新增可loading
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://mock.apifox.com/m1/3785924-0-default',
  timeout: 15000,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config: CustomInternalAxiosRequestConfig) => {
    const globalStore = useGlobalStore();
    config.headers.apifoxToken = globalStore.token;
    config.loadingMessage && showLoadingUtil(config.loadingMessage);
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    hideLoadingUtil((response.config as CustomAxiosRequestConfig).loadingMessage || '');
    if (response.data.code !== '200') {
      message.warn(response.data.message);
      return Promise.reject();
    }
    return response.data.data;
  },
  (error: AxiosError) => {
    hideLoadingUtil((error.config as CustomAxiosRequestConfig).loadingMessage || '');
    return Promise.reject(error);
  },
);

const get = <T>(url: string, params?: any, config?: CustomAxiosRequestConfig): Promise<ResDataType<T>> => {
  return axiosInstance.get(url, { params, ...config });
};

const post = <T>(url: string, data?: any, config?: CustomAxiosRequestConfig): Promise<ResDataType<T>> => {
  return axiosInstance.post(url, data, config);
};

const put = <T>(url: string, data?: any, config?: CustomAxiosRequestConfig): Promise<ResDataType<T>> => {
  return axiosInstance.put(url, data, config);
};

const del = <T>(url: string, config?: CustomAxiosRequestConfig): Promise<ResDataType<T>> => {
  return axiosInstance.delete(url, config);
};

const download = (url: string, data?: any, config?: CustomAxiosRequestConfig): Promise<BlobPart> => {
  return axiosInstance.post(url, data, { responseType: 'blob', ...config });
};

export default { get, post, put, del, download };
