import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// 添加loading
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  loading?: boolean;
}

// 默认请求配置
const config = {
  baseURL: '',
  timeout: 15000,
  withCredentials: true,
};

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config);

    // 请求拦截器
    this.axiosInstance.interceptors.request.use(
      (config: CustomAxiosRequestConfig) => {
        console.log('请求拦截器执行:', config);
        config.loading && console.log('开启自定义的loading');
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );

    // 响应拦截器
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        console.log('响应拦截器执行:', response);
        return response;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );
  }

  public async get<T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, { params, ...config });
    return response.data;
  }

  public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data, config);
    return response.data;
  }

  public async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.put<T>(url, data, config);
    return response.data;
  }

  public async del<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url, config);
    return response.data;
  }

  public cancelRequest(message: string): void {
    // 取消请求
    axios.CancelToken.source().cancel(message);
  }
}

export default new ApiService(config);

/* 
const apiService = new ApiService('https://api.example.com');

// 发送GET请求
apiService.get('/data')
  .then((data) => {
    console.log('GET请求结果:', data);
  })
  .catch((error) => {
    console.error('GET请求错误:', error);
  });

// 发送POST请求
apiService.post('/data', { key: 'value' })
  .then((data) => {
    console.log('POST请求结果:', data);
  })
  .catch((error) => {
    console.error('POST请求错误:', error);
  });

// 发送PUT请求
apiService.put('/data/1', { key: 'updatedValue' })
  .then((data) => {
    console.log('PUT请求结果:', data);
  })
  .catch((error) => {
    console.error('PUT请求错误:', error);
  });

// 发送DELETE请求
apiService.delete('/data/1')
  .then((data) => {
    console.log('DELETE请求结果:', data);
  })
  .catch((error) => {
    console.error('DELETE请求错误:', error);
  });

// 取消请求
apiService.cancelRequest('Request canceled by the user.');

// 获取请求进度
const cancelDownloadProgress = apiService.onDownloadProgress((progressEvent) => {
  console.log('Download Progress:', (progressEvent.loaded / progressEvent.total) * 100);
});

// 停止监听请求进度
cancelDownloadProgress();
*/
