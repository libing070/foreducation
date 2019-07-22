<template>
  <div class="login">
    <van-row class="head-logo" type="flex" justify="center">
      <van-col span="4">
        <img :src="require('../../assets/images/headportrait.png')" class="image">
      </van-col>
    </van-row>
    <div class="field">
      <van-row class="item" type="flex" justify="center">
        <van-col span="20">
          <van-cell-group>
            <van-field
              v-model="username"
              required
              clearable
              label="用户名"
              right-icon="question-o"
              placeholder="请输入用户名"
              @click-right-icon="$toast('question')"
            />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row class="item" type="flex" justify="center">
        <van-col span="20">
          <van-cell-group>
            <van-field
              v-model="password"
              type="password"
              label="密码"
              placeholder="请输入密码"
              required
            />
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row class="item" type="flex" justify="center">
        <van-col span="20">
          <van-button type="primary" size="large">登录</van-button>
        </van-col>
      </van-row>
      <van-row class="item">
        <van-col offset="2" span="8" @click.native.prevent="onResetPassword">忘记密码</van-col>
        <van-col offset="4" span="8" style="text-align: right" @click.native.prevent="onQuickLogin">快速登录与注册</van-col>
      </van-row>
    </div>
    <div class="others-login">
      <van-row class="item" type="flex" justify="center">
        <van-col span="24" style="text-align: center">
          其他登录方式
        </van-col>
      </van-row>
      <van-row class="item">
        <van-col span="10" style="text-align: right">
          <van-button round type="primary" size="small">微信</van-button>
        </van-col>
        <van-col span="10" offset="4" style="text-align: left">
          <van-button round type="primary" size="small">face</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  import API from '../../api/api_test';

  export default {
    name: "login",
    data() {
      return {
        username:'',
        password:''
      }
    },
    created() {
    },
    mounted() {
      this.search();
    },
    methods:{
        search(){
          let that = this;
          API.findList().then(function (result) {
            if(result){
             console.log(result);
            }
          }, function (err) {
            that.Notify('请求失败');
            console.log(err);
          }).catch(function (error) {
            console.log('catch');
          });
        },

      onQuickLogin(){
          let that=this;
          that.$router.push({path:'/user/quciklogin'});
      },
      onResetPassword(){
        let that=this;
        that.$router.push({path:'/user/resetpassword'});
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login {

    .head-logo {
      margin-top: 1.5rem;
      .image {
        border-radius: 100%;
      }
    }

    .field {
      margin-top: 1rem;
      .item {
        margin-top: 0.3rem;
      }
    }

    .others-login{
      margin-top: 1.5rem;
      .item {
        margin-top: 0.3rem;
      }
    }
  }
</style>
