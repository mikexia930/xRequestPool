import Axios from 'axios';
import md5 from 'js-md5';

class RequestPool {
  static RequestIns;

  /**
   * 获取单例
   */
  static getInstance() {
    if (this.RequestIns == null) {
      this.RequestIns = new RequestPool();
    }
    return this.RequestIns;
  }

  /**
   * 单例队列
   * keyByUrl {
   *   canceler,
   *   result,
   *   times,
   * }
   * @type {{cancel: {}, result: {}}}
   */
  RequestInsCache = {};

  /**
   * 获取当前的请求池数据
   * @return {{cancel: {}, result: {}}}
   */
  getRequestPools() {
    return this.RequestInsCache;
  }

  /**
   * 组装url,生成当次请求的Token
   * @param config
   */
  getKeyByUrl(config) {
    const { method, url, identity } = config;
    let token;
    if (identity) {
      token = identity;
    } else {
      let key = url;
      if (method) {
        if (config.params) {
          key += JSON.stringify(config.params);
        }
        if (config.data) {
          key += JSON.stringify(config.data);
        }
      }
      token = md5(key);
    }
    return token;
  }

  /**
   * 获取 content-type
   * @param config
   */
  setContentType(config) {
    let contentType = '';
    if (Object.prototype.hasOwnProperty.call(config, 'contentType')) {
      contentType = config.contentType;
    } else {
      const method = config.method || '';
      switch (method.toUpperCase()) {
        case 'POST':
          contentType = 'application/x-www-form-urlencoded';
          break;
        case 'FILE':
          contentType = 'multipart/form-data';
          break;
        default:
          contentType = '';
          break;
      }
    }
    return contentType;
  }

  /**
   * 是否存在已有请求
   * @param keyByUrl
   * @return {boolean}
   */
  isHasCacheRequest(keyByUrl) {
    return Object.prototype.hasOwnProperty.call(
      this.RequestInsCache,
      keyByUrl,
    );
  }

  /**
   * 删除已有请求
   * @param keyByUrl
   */
  deleteCacheRequest(keyByUrl) {
    delete this.RequestInsCache[keyByUrl];
  }

  /**
   * 获取请求实例
   * @param config
   * @return object
   */
  getRequestIns(config) {
    let configHeader = {};
    const contentType = this.setContentType(config);
    if (contentType) {
      configHeader['content-type'] = contentType;
    }
    configHeader = {
      ...configHeader,
      ...config.headers,
    };
    const currentIns = Axios.create({
      baseURL: config.baseUrl,
      timeout: config.timeout,
      headers: configHeader,
    });

    // 当前实例请求拦截，添加中断标识并阻止相同请求发送
    currentIns.interceptors.request.use((requestConfig) => {
      const requestConfigCopy = requestConfig;
      const keyByUrl = this.getKeyByUrl(requestConfigCopy);
      requestConfigCopy.cancelToken = new Axios.CancelToken((canceler) => {
        this.RequestInsCache[keyByUrl].cancel = canceler;
      });
      return requestConfigCopy;
    }, (error) => Promise.reject(error));

    // 当前实例响应拦截
    currentIns.interceptors.response.use(
      (result) => result,
      (error) => Promise.reject(error),
    );
    return currentIns;
  }

  /**
   * 关闭请求
   * @param keyByUrl
   */
  cancelRequest(cancelConfig) {
    if (cancelConfig) {
      const keyByUrl = this.getKeyByUrl(cancelConfig);
      if (this.isHasCacheRequest(keyByUrl)) {
        this.RequestInsCache[keyByUrl].cancel();
      }
    } else {
      Object.keys(this.RequestInsCache).forEach((requestIns) => {
        this.RequestInsCache[requestIns].cancel();
      });
    }
  }

  /**
   * 相同请求次数
   *  @param work add / deduct
   * @param keyByUrl
   */
  addRequestTimes(work, keyByUrl) {
    let times = this.RequestInsCache[keyByUrl].times || 0;
    switch (work) {
      case 'deduct':
        times -= 1;
        break;
      case 'add':
      default:
        times += 1;
        break;
    }
    this.RequestInsCache[keyByUrl].times = times;
    return times;
  }

  /**
   * 设置请求值
   */
  setRequestResult(keyByUrl, status, data = '') {
    if (this.RequestInsCache[keyByUrl].times && this.RequestInsCache[keyByUrl].times > 0) {
      this.RequestInsCache[keyByUrl].result = {
        status,
        data,
      };
    } else {
      this.deleteCacheRequest(keyByUrl);
    }
  }

  /**
   * 请求发送
   * @param axiosIns
   * @param config
   * @return {Promise<unknown>}
   */
  doRequest(axiosIns, config) {
    const keyByUrl = this.getKeyByUrl(config);
    const isHasRequest = this.isHasCacheRequest(keyByUrl);
    let promiseIns = null;
    if (!isHasRequest) {
      this.RequestInsCache[keyByUrl] = {};
    }
    if (isHasRequest) {
      this.addRequestTimes('add', keyByUrl);
      promiseIns = new Promise((resolve, reject) => {
        const interIns = setInterval(() => {
          if (this.RequestInsCache[keyByUrl]?.result?.status) {
            clearInterval(interIns);
            const curTimes = this.addRequestTimes('deduct', keyByUrl);
            const curResult = this.RequestInsCache[keyByUrl].result;
            if (curTimes <= 0) {
              this.deleteCacheRequest(keyByUrl);
            }
            if (curResult.status === 'success') {
              resolve(curResult.data);
            } else {
              reject(curResult.data);
            }
          }
        }, 500);
      });
    } else {
      promiseIns = new Promise((resolve, reject) => {
        axiosIns(config).then((result) => {
          this.setRequestResult(keyByUrl, 'success', result);
          resolve(result);
        }).catch((err) => {
          this.setRequestResult(keyByUrl, 'error', err);
          reject(err);
        });
      });
    }
    return promiseIns;
  }
}

const RequestPoolIns = RequestPool.getInstance();

export default RequestPoolIns;
