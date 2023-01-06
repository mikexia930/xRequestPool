# x-request-pool
>
>Http的前端请求池，避免重复的请求。
>
>使用单例模式，相同的请求会只发送一次，其余的则等待同请求返回后，再返回。
>
>
[Demo](https://mikexia930.github.io/xRequestPool/)
## 版本
- v1.0.14

## 基于
- axios [配置手册](https://axios-http.com/docs/intro)
- js-md5
- qs

## 安装
```
npm install x-request-pool
```
或者
```
github下载源码
```
## 使用
**直接用script引入**
```
<script src="lib/xrequestpool.umd.js"></script>
```
#### Vue示例
**在main.js引入**
```
import XRequestPool from 'x-request-pool';
```
**获取实例**
```
const insConfig = {
    baseUrl: '', // 会和 requestConfig 的 url 合并
    timeout: 300, // 连接超时时间 秒
    headers: object, // 头文件，具体设置可参考axios
};
const RequestPoolIns = RequestPool.getRequestIns(insConfig);
```

**发送请求**
```
const requestConfig = {
    identity?: string, // 当次请求标识，可用于 cancel
    url: string, // 链接地址
    method: string, //请求方法 GET\POST\DELETE
    headers: object, // 头文件，具体设置可参考axios
    params: object, // get请求时的参数
    data: 'object', // post请求时的参数
};
RequestPool.doRequest(RequestPoolIns, requestConfig).then((result) => {
    this.resultData = `${this.resultData}\n${JSON.stringify(result)}`;
    console.log('result-', result);
}).catch((err) => {
    console.log('err-', err);
});
```

**获取当前连接池里的连接数据**
```
RequestPool.getRequestPools(); // { key: { 具体数据 } }
```

**取消请求**
```
RequestPool.cancelRequest(requestConfig?); // 不填写，则取消所有
```
