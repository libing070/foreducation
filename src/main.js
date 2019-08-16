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
Vue.directive('scroll', {
  bind: (el, binding, vnode) => {
     console.log(el)
    // 是否执行回调事件
    let eventAction = true
    // 距离底部剩余距离开始触发回调
    let distance = 100 // (unit: px)
    // 监听滚动事件
    el.onscroll = (e) => {
      // 获取当前节点可滚动的距离   节点滚动条总高度 - 节点本身高度
      let scrollHeight = e.target.scrollHeight - e.target.offsetHeight;
      // 获取节点剩余可滚动的高度   可滚动距离  -  已经滚动的距离
      let residualHeight = scrollHeight - e.target.scrollTop;
      //  滚动到指定区域执行回调事件
      if ((typeof binding.value === 'function') && residualHeight < distance && eventAction) {
        // 执行事件回调函数   如果不明白此处的binding.value的同学请点击上面的链接,自行去官方查看
        binding.value()
        eventAction = false
        console.log("到底了");
      }  else if (residualHeight > distance) {
        eventAction = true
        console.log("还没到底了");

      }
    }
  }
});
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
