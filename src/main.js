import Vue from 'vue'
const Bus = new Vue();
import App from './App'
import router from './router'
import store from './store'//引入store
import  'jquery';

//h5 font-size全局
import rootfont from './assets/js/rootfont';
Vue.use(rootfont);
// 引入i18n国际化插件
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

// 注册i18n实例并引入语言文件，文件格式等下解析
const i18n = new VueI18n({
  locale: 'zh',//默认中文
  messages: {
    'zh': require('@/assets/languages/zh'),
    'en': require('@/assets/languages/en')
  }
})
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import { Notify } from 'vant';
Vue.prototype.Notify=Notify;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'css/common.css'
import  "babel-polyfill";//转译es6语法  兼容IE浏览器
import 'icon/iconfont.css'
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;//使用MD5加密

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  store,//使用store
  data:{
    Bus
  },
  i18n,
  components: { App },
  template: '<App/>'
})
