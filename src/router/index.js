import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/user/Login'
import QuickLogin from '@/components/user/QuickLogin'
import PhoneParagraphNo from '@/components/user/PhoneParagraphNo'
import EmailLogin from '@/components/user/EmailLogin'
import ResetPassword from '@/components/user/ResetPassword'

import Index from '@/components/main/Index'
import Test from '@/components/common/Test'

Vue.use(Router)

let router = new Router({
  mode:'history'||'hash',//hash 打包需要使用hash 无#： history //去掉路径地址的#字符以真实的连接访问  如果设置为hash  路径就是默认的加#

  routes: [
    {
      path: '/test/',
      name: 'Test',
      component: Test
    },
    {
      path: '/',
      redirect:'/user/login'  //直接访问ip+端口跳转到登陆页面
    },
    {
      path: '/user',
      redirect:'/user/login'  //直接访问ip+端口跳转到登陆页面
    },
    {
      path: '/user/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/quciklogin',
      name: 'QuickLogin',
      component: QuickLogin
    },
    {
      path: '/user/phoneparagraphno',
      name: 'PhoneParagraphNo',
      component: PhoneParagraphNo
    },
    {
      path: '/user/emaillogin',
      name: 'EmailLogin',
      component: EmailLogin
    },
    {
      path: '/user/resetpassword',
      name: 'ResetPassword',
      component: ResetPassword
    },

    {
      path: '/main',
      redirect:'/main/index'
    },
    {
      path: '/main/index',
      name: 'Index',
      component: Index
    },
  ]
})
router.beforeEach((to, from, next) => {
  console.log(from);
  next();
  // if (to.path.startsWith('/login')||to.path.startsWith('/register')) {//当路由是登陆 或注册页时  删除 "access-user"
  //   window.localStorage.removeItem('access-user')
  //   next()
  // } else {
  //   let user = JSON.parse(window.localStorage.getItem('access-user'))
  //   if (!user) {
  //     next({path: '/login'})
  //   } else {
  //     next()
  //   }
  // }
})

export default router
