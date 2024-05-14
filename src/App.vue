<template>
  <div>
    <input v-model="data.url1" placeholder="GET url 1 " />
    <input v-model="data.url2" placeholder="GET url 2 " />
    <div class="result" v-html="data.resultData"></div>
    <button @click="handleOne()"> send 1 request  </button>
    <button @click="handleThree()"> send 3 request  </button>
    <button @click="handleDiff()"> send 3 request 2 same 1 different </button>
    <button @click="handleClear()"> clear  </button>
  </div>
</template>


<script setup lang="ts">
import RequestPool from '../packages/XRequestPool/src';
import {onBeforeUnmount, reactive} from 'vue';

const data = reactive({
  url1: '',
  url2: '',
  resultData: '',
})

function getRequestIns() {
  const insConfig = {
    baseUrl: '',
    timeout: 3000,
    headers: {},
  };
  return RequestPool.getRequestIns(insConfig);
}

function doRequest(url: string) {
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
    RequestPool.doRequest(getRequestIns(), requestConfig).then((result) => {
      data.resultData = `${data.resultData}\n${JSON.stringify(result)}`;
      console.log('result-', result);
    }).catch((err) => {
      console.log('err-', err);
    });
  }
}

function handleOne() {
  doRequest(data.url1);
}

function handleThree() {
  for (let i = 0; i < 3; i += 1) {
    doRequest(data.url1);
  }
}

function handleDiff() {
  for (let i = 0; i < 3; i += 1) {
    let url = '';
    if (i % 2) {
      url = data.url1;
    } else {
      url = data.url2;
    }
    this.doRequest(url);
  }
}

function handleClear() {
  data.resultData = '';
}

onBeforeUnmount(() => {
  RequestPool.cancelRequest();
})
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
