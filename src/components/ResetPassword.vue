<template>
  <div class="reset-password">
    <van-tabs v-model="active">
      <van-tab title="手机号码">
        <van-row class="field-item">
          <van-col span="24">
            <van-cell-group>
              <van-field v-model="phone" oninput="if(value.length>11)value=value.slice(0,11)" type="tel"
                         placeholder="手机号码"/>
            </van-cell-group>
          </van-col>
        </van-row>
        <van-row class="field-item">
          <van-col span="24">
            <van-cell-group>
              <van-field
                oninput="if(value.length>6)value=value.slice(0,6)"
                type="number"
                v-model="sms"
                placeholder="请输入短信验证码"
              >
                <van-button slot="button" size="small" type="primary" :class="{yzmBtnDisabled: !this.canClick}"
                            @click="countDown">{{content}}
                </van-button>
              </van-field>
            </van-cell-group>
          </van-col>
        </van-row>
        <van-row class="field-item">
          <van-col span="24">
            <van-cell-group>
              <van-field v-model="resetpassword" placeholder="重置密码"/>
            </van-cell-group>
          </van-col>
        </van-row>
        <van-row class="item">
          <van-col offset="1" span="22">请设置6-16位密码，支持字母（区分大小写）、数字及符号</van-col>
        </van-row>
        <van-row  class="field-button"  type="flex" justify="center">
          <van-col span="20" class="">
            <van-button type="primary" size="large">确定</van-button>
          </van-col>
        </van-row>
      </van-tab>
      <van-tab title="电子邮箱">
        <van-row class="field-item">
          <van-col span="24">
            <van-cell-group>
              <van-field v-model="email" placeholder="请输入邮箱号"/>
            </van-cell-group>
          </van-col>
        </van-row>
        <van-row  class="field-button"  type="flex" justify="center">
          <van-col span="20" class="">
            <van-button type="primary" size="large">确定</van-button>
          </van-col>
        </van-row>
        <van-row  class="field-noreg-button"  type="flex" justify="center">
          <van-col span="12" class="">
            <van-button type="primary" plain  size="large">邮箱未注册</van-button>
          </van-col>
        </van-row>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import {Toast} from 'vant';

  export default {
    name: "reset-password",//重置密码
    data() {
      return {
        active: 0,
        resetpassword: '',
        phone: '',
        sms: '',
        email:'',
        content: '发送验证码',
        totalTime: 60,
        canClick: true,//添加canClick
      };
    },
    methods: {
      countDown() {
        let that = this;
        if (this.phone.trim() == "" || this.phone.length < 11) {
          Toast('请正确输入手机号码');
          return;
        }
        if (!this.canClick) return;
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
        }, 1000);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .reset-password {
    .field-item {
      margin-top: 0.2rem;
    }
    .item {
      margin-top: 0.2rem;
      font-size: 0.2rem;
    }
    .field-button{
      margin-top: 1rem;
    }
    .field-noreg-button{
      margin-top: 2rem;
    }
    .yzmBtnDisabled {
      background-color: #F5F7FA;
      border-color: #F5F7FA;
      color: #57a3f3;
      cursor: not-allowed; // 鼠标变化
    }
  }

</style>
