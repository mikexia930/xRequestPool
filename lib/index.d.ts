import { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface IFRequestConfig extends AxiosRequestConfig {
    identity?: string;
    contentType?: string;
    baseUrl?: string;
}
export interface IFCacheData {
    [key: string]: {
        cancel?: any;
        result?: any;
        times?: number;
    };
}
declare enum EnumWorkType {
    Add = "add",
    Deduct = "deduct"
}
declare class RequestPool {
    static RequestIns: RequestPool | null;
    /**
     * 获取单例
     */
    static getInstance(): RequestPool;
    /**
     * 单例队列
     * keyByUrl {
     *   canceler,
     *   result,
     *   times,
     * }
     * @type {{}}
     */
    RequestInsCache: IFCacheData;
    /**
     * 获取当前的请求池数据
     * @return {{cancel: {}, result: {}}}
     */
    getRequestPools(): IFCacheData;
    /**
     * 组装url,生成当次请求的Token
     * @param config
     */
    getKeyByUrl(config: IFRequestConfig): string;
    /**
     * 获取 content-type
     * @param config
     */
    setContentType(config: IFRequestConfig): string;
    /**
     * 是否存在已有请求
     * @param keyByUrl
     * @return {boolean}
     */
    isHasCacheRequest(keyByUrl: string): boolean;
    /**
     * 删除已有请求
     * @param keyByUrl
     */
    deleteCacheRequest(keyByUrl: string): void;
    /**
     * 获取请求实例
     * @param config
     * @return object
     */
    getRequestIns(config: IFRequestConfig): AxiosInstance;
    /**
     * 关闭请求
     * @param keyByUrl
     */
    cancelRequest(cancelConfig: IFRequestConfig | string | undefined): void;
    /**
     * 相同请求次数
     *  @param work add / deduct
     * @param keyByUrl
     */
    addRequestTimes(work: EnumWorkType, keyByUrl: string): number;
    /**
     * 设置请求值
     */
    setRequestResult(keyByUrl: string, status: string, data: any): void;
    /**
     * 请求发送
     * @param axiosIns
     * @param config
     * @return {Promise<unknown>}
     */
    doRequest(axiosIns: AxiosInstance, config: IFRequestConfig): Promise<unknown>;
}
declare const RequestPoolIns: RequestPool;
export default RequestPoolIns;
