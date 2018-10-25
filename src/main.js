// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
// import store from './store'
import iView from 'iview'
import config from '@/config'
import 'iview/dist/styles/iview.css'
import 'bootstrap/dist/css/bootstrap.css'


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText }
    from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)


import axios from 'axios'

// 定义 基础url

console.log()
const burl = process.env.NODE_ENV == 'development'  ? '/api': '';

axios.interceptors.request.use(function (config) {
    config.url =  burl + config.url;
    config.withCredentials = true
    return config;
}, function (error) {
    return Promise.reject(error);
})

axios.interceptors.response.use((config)=>{
    return config;
}, (err)=>{
    return Promise.reject(err)
})

Vue.prototype.$http= axios;

Vue.prototype.$d_Global = {
    $vue: new Vue,
    is_bookmark:false,
    c_query: null,
    c_date: '',
    c_chartType: '',
    c_top_tableValue: '',
    c_top_cascaerVaule: '',     // 字段属性 选择的值
    c_top_cascaerVauleId: '',   // 字段属性 选择id
    c_top_cascaerCountNmae: '', // 字段属性 选择的最后统计字段名字
    c_tableData: null,
    c_tableField: null,
    c_condData:[]
}

Vue.use(iView)

// Vue.use(iView, {
//   i18n: function(path, options) {
//     let value = i18n.t(path, options);
//     if (value !== null && value !== undefined) return value;
//     return '';
//   }
// });

Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
