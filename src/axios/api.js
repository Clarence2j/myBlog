import Axios from 'axios'
import Vue from 'vue'
import Config from './config'
import {
  baseUrl
} from './../config/env'
import Qs from 'qs'
// vuex 仓库引入
// import Store from '@/store/index'


// 获取不显示loading的
let noLoadArr = [];

const apiConfig = {}
Object.keys(Config).forEach(v => {
  let item = Config[v]
  apiConfig[v] = item
  // if(!item.showLoading){
  //   noLoadArr.push(item.url)
  // }
})

Axios.defaults.baseURL = baseUrl;
Axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8' //limixuexi-bigscreen
// Axios.defaults.headers['cook'] = 'kljljljlkjlkjljljk';

const server = Axios.create()

// 请求拦截器
server.interceptors.request.use(function (config) {
  // if (noLoadArr.indexOf(config.url) != -1) {
  //   Store.dispatch('SHOWLOADING', '0');
  // } else {
  //   Store.dispatch('SHOWLOADING', '1');
  // }
  return config;
}, function(error) {
  // Store.dispatch('SHOWLOADING' , '0');
  return Promise.reject(error);
})

// 响应拦截器
server.interceptors.response.use(function(response) {
  // Store.dispatch('SHOWLOADING' , '0');
  return response
}, function(error) {
  // Store.dispatch('SHOWLOADING' , '0');
  return Promise.reject(error)
})


const ajax = (params , cb , i) => {
  let baseConfig = {
    // `url` 是用于请求的服务器 URL
    url: params.url,
    // `method` 是创建请求时使用的方法
    method: params.methods || 'get', // 默认是 get
    timeout: 15 * 1000,
    params: {},
    data: {},
    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    // transformResponse: [function (data) {
    //   // 对 data 进行任意转换处理

    //   return data;
    // }],

    // `headers` 是即将被发送的自定义请求头
    headers: {
      // 'X-Requested-With': 'XMLHttpRequest'
      'cook': 123,
      'token': 'kjlkljlkjlksdlj9s80d09sdjilfj329sjdflskj'
    },
    // `paramsSerializer` 是一个负责 `params` 序列化的函数
    // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
    paramsSerializer: function (params) {
      return Qs.stringify(params, {
        arrayFormat: 'brackets'
      })
    },
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    // withCredentials: false, // 默认的

    // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
    // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
    // auth: {
      // username: 'janedoe',
      // password: 's00pers3cret'
    // },

    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json', // 默认的

    // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
    xsrfCookieName: 'XSRF-TOKEN', // default

    // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
    xsrfHeaderName: 'X-XSRF-TOKEN', // 默认的

    // `onUploadProgress` 允许为上传处理进度事件
    onUploadProgress: function (progressEvent) {
      // 对原生进度事件的处理
      cb && cb(progressEvent , i)
    },

    // `onDownloadProgress` 允许为下载处理进度事件
    onDownloadProgress: function (progressEvent) {
      // 对原生进度事件的处理
    },

    // `maxContentLength` 定义允许的响应内容的最大尺寸
    maxContentLength: 2000,

    // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
    validateStatus: function (status) {
      return status >= 200 && status < 300; // 默认的
    },
  }
  // 防止post请求携带querry
  if( params.methods == 'get' ) {
    baseConfig.params = params.params;
    // baseConfig.params.cook = Store.getters.TOKEN;
  }else if ( params.methods == 'post' ) {
    baseConfig.data = params.params;
    // baseConfig.data.cook = Store.getters.TOKEN;
    // post请求序列化
    baseConfig.transformRequest = (data) => {
      let formData
      if(params.isQs){
        formData = Qs.stringify(data)
      }else{
        formData = data
      }
      return formData
    }
  }
  return new Promise((resolve, reject) => {
    server(baseConfig)
    .then(response => {
      resolve(response.data);
    })
    .catch(error => {
      reject(error)
    })
  })
}

const srv = {}
Object.keys(apiConfig).forEach(v => {
  srv[v] = (params = {} , cb , i) => {
    let opt = Object.assign({}, apiConfig[v], {
      params
    })
    return ajax(opt , cb , i)
  }
})

Vue.prototype.srv = srv
export default srv
