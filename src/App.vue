<template>
  <div id="app">
    <input v-model="url1" placeholder="GET url 1 " />
    <input v-model="url2" placeholder="GET url 2 " />
    <div class="result" v-html="resultData"></div>
    <button @click="handleOne()"> send 1 request  </button>
    <button @click="handleThree()"> send 3 request  </button>
    <button @click="handleDiff()"> send 3 request 2 same 1 different </button>
    <button @click="handleClear()"> clear  </button>
  </div>
</template>

<script>
import RequestPool from '../packages/XRequestPool/src';

export default {
  name: 'App',
  data() {
    return {
      url1: '',
      url2: '',
      resultData: '',
    };
  },
  methods: {
    handleOne() {
      this.doRequest(this.url1);
    },
    handleThree() {
      for (let i = 0; i < 3; i += 1) {
        this.doRequest(this.url1);
      }
    },
    handleDiff() {
      for (let i = 0; i < 3; i += 1) {
        let url = '';
        if (i % 2) {
          url = this.url1;
        } else {
          url = this.url2;
        }
        this.doRequest(url);
      }
    },
    handleClear() {
      this.resultData = '';
    },
    getRequest() {
      const insConfig = {
        baseUrl: '',
        timeout: 300,
        headers: {},
      };
      return RequestPool.getRequestIns(insConfig);
    },
    doRequest(url) {
      if (!url) {
        alert('please set url first');
      } else {
        const requestConfig = {
          url,
          method: 'GET',
          headers: {},
          params: {
            projectId: 123,
            userId: 4378,
          },
        };
        RequestPool.doRequest(this.getRequest(), requestConfig).then((result) => {
          this.resultData = `${this.resultData}\n${JSON.stringify(result)}`;
          console.log('result-', result);
        }).catch((err) => {
          console.log('err-', err);
        });
      }
    },
  },
  beforeDestroy() {
    RequestPool.cancelRequest();
  },
};
</script>

<style scoped>
  .result {
    width: 800px;
    height: 300px;
    border: 1px solid #c1c1c1;
    overflow: auto;
  }
  input {
    display: block;
    margin-bottom: 8px;
    width: 250px;
  }
</style>
