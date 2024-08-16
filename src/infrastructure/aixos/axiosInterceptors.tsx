import { config } from "localforage";
import axiosInstance from "./axiosInstance";
import {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    if (error.response) {
      const { response, config } = error;
      const originalRequest = config as InternalAxiosRequestConfig;
      const retryHeader = originalRequest.headers["X-Retry"] as
        | string
        | undefined;
      if (response.status === 401 && retryHeader !== "true") {
        originalRequest.headers["X-Retry"] = "true";
        try {
        } catch (err) {
          window.location.href = "/auth/login";
          return Promise.reject(err);
        }
      }
      return Promise.reject(error);
    }
  }
);
export default axiosInstance;
