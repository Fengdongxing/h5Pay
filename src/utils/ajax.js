import axios from 'axios';

import Vue from 'vue';
import router from '../router';
const vue = new Vue({
  router,
});

let showNoToken = true;
const service = axios.create({
  // baseURL: 'http://py.ruanlan.top', // api 的 base_url,固定值
  timeout: 30000 // request timeout
});
// request interceptor
service.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);

    config.headers = {
      "Content-Type":'application/json;charset=UTF-8',
    };

    let tokenX = localStorage.getItem('token');
    //调整 todo
    if(tokenX){
      config.headers['token'] = tokenX
    }

    return config;
  },
  error => {

    console.log('requestErr' + error); // for debug
    Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    console.log(error);
    if(error.response && error.response.status){
      const errStatus = error.response.status;
      if(errStatus == 401){

        //区分没有登录和登录过token失效
        if(!localStorage.getItem('token') && showNoToken){
          showNoToken = false;
        }else {
          //登录异常
          if(showNoToken){
            showNoToken = false;
            window.localStorage.clear();
              router.push({
                  name:'login',
              });
          }
        }
      }else{
        let message = error.response.data.message || error.response.data.message;
        console.error(message);
      }
    }

    return Promise.reject(error);
  }
);
export default service;
