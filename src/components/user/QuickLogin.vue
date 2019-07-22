<template>
  <div class="quick-login">
    <van-row class="title" type="flex" justify="center">
      <van-col style="text-align: center" span="24">输入手机号码</van-col>
    </van-row>
    <van-row class="item" type="flex" justify="center">
      <van-col class="paragraph-no" span="6" @click.native.prevent="onOpenPhoneParagraphNo">
        <div style="position: absolute;top: 25%;"><span>{{country}}</span>
          <van-icon name="arrow-down"/>
          <span>{{phoneparagraphno}}</span></div>
      </van-col>
      <van-col span="14">
        <van-cell-group>
          <van-field v-model="phone"  oninput="if(value.length>11)value=value.slice(0,11)" type="tel" placeholder="手机号码"/>
        </van-cell-group>
      </van-col>
    </van-row>
    <van-row class="item" type="flex" justify="center">
      <van-col span="20">
        <van-cell-group>
          <van-field
            oninput="if(value.length>6)value=value.slice(0,6)"
            type="number"
            v-model="sms"
            placeholder="请输入短信验证码"
          >
            <van-button slot="button" size="small" type="primary"  :class="{yzmBtnDisabled: !this.canClick}" @click="countDown">{{content}}</van-button>
          </van-field>
        </van-cell-group>
      </van-col>
    </van-row>
    <van-row class="consen-agreement"  type="flex" justify="center">
      <van-col span="20" class="agree"><span>登录注册即代表同意《wai》</span><span class="ll">个人信息保护政策</span>和<span class="ll">服务事业协议</span></van-col>
    </van-row>
    <van-row  class="item"  type="flex" justify="center">
      <van-col span="20" class="email-login" @click.native.prevent="onEmailLogin">电子邮箱></van-col>
    </van-row>
    <van-row  class="item"  type="flex" justify="center">
      <van-col span="20" class="">
        <van-button type="primary" size="large">确定</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import { Toast } from 'vant';
  export default {
    name: "quick-login",//手机快捷登陆
    data() {
      return {
        phone: '',
        sms:'',
        content: '发送验证码',
        totalTime: 60,
        canClick: true,//添加canClick
        country: 'CN',
        phoneparagraphno: '+86'
      }
    },
    created() {
    },
    mounted() {
      if (this.$route.params.paragraphnotitle != undefined) {
        let str = this.$route.params.paragraphnotitle.split(" ") || ["CN", "+86"];
        this.country = str[0];
        this.phoneparagraphno = str[1];
      }

    },
    methods: {
      onEmailLogin(){
        let that=this;
        that.$router.push({path:'/user/emaillogin'});
      },
      onOpenPhoneParagraphNo() {
        let that = this;
        that.$router.push({path: '/user/phoneparagraphno'});
      },
      countDown(){
        let that = this;
        if(this.phone.trim()==""||this.phone.length<11){
          Toast('请正确输入手机号码');
         return;
        }
        if (!this.canClick) return ;
        this.canClick = false;
        this.content = this.totalTime + 'S后重新发送';
        Toast('发送成功');
        let clock = window.setInterval(() => {
          this.totalTime--;
          this.content = this.totalTime + 'S后重新发送';
          if (this.totalTime < 0) {
            window.clearInterval(clock);
            this.content = '重新发送验证码';
            this.totalTime = 60;
            this.canClick = true; //这里重新开启
          }
        },1000);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .quick-login {
    .title {
      margin-top: 1rem;
    }
    .item {
      margin-top: 0.4rem;
      .paragraph-no {
        position: relative;
        text-align: center;
        border-bottom: 0.5px solid #ebedf0;
        border-top: 0.5px solid #ebedf0;
        border-bottom-width: 0.5px;
      }
      .email-login{
        text-align: right;
        font-size: 0.22rem;
      }
    }
    .consen-agreement{
      margin-top: 0.2rem;
      .agree{
        text-align: center;
        font-size: 0.22rem;
        .ll{
          color: #07c160;
        }
      }
    }
  }
  .yzmBtnDisabled{
    background-color: #F5F7FA;
    border-color: #F5F7FA;
    color:#57a3f3;
    cursor: not-allowed; // 鼠标变化
  }
</style>
