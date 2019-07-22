<template>
  <div class="supplementary-info">
    <van-row class="head-logo" type="flex" justify="center">
      <van-col span="24" style="text-align: center">
        <van-uploader v-model="fileList"   :max-count="1" :before-read="beforeRead" />
      </van-col>
    </van-row>
    <van-row class="head-logo-text" type="flex" justify="center">
      <van-col span="24" style="text-align: center">
        头像
      </van-col>
    </van-row>
    <van-row class="field-item">
      <van-col span="24">
        <van-cell-group>
          <van-field
            v-model="name"
            placeholder="请输入名字"
            label="名字"
            left-icon="manager"
          />
        </van-cell-group>
      </van-col>
    </van-row>
    <van-row class="field-item">
      <van-col span="24">
        <van-cell-group>
          <van-field
            readonly
            clickable
            label="生日"
            v-model="birthday"
            placeholder="请选择生日"
            @click="showPicker = true"
            left-icon="gift"
          />
          <van-popup v-model="showPicker" position="bottom">
            <van-datetime-picker
              v-model="currentDate"
              type="date"
              :min-date="minDate"
              :max-date="maxDate"
              @cancel="showPicker = false"
              @confirm="onConfirm"
            />
          </van-popup>
        </van-cell-group>
      </van-col>
    </van-row>
    <van-row class="field-item ">
      <van-col span="24" class="field-item-radio">
        <van-cell-group>
          <van-field
            v-model="sex"
            label="性别"
            readonly
            left-icon="friends"
          />
        </van-cell-group>
        <van-radio-group v-model="radio" class="radio-sex" style="width: 3rem">
          <van-radio style="width: 1rem;float: left" name="1">男</van-radio>
          <van-radio style='width: 1rem;float: right'name="2">女</van-radio>
        </van-radio-group>
      </van-col>
    </van-row>
    <van-row  class="field-item"  type="flex" justify="center">
      <van-col span="20" class="">
        <van-button type="primary" size="large">完成</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import { Toast } from 'vant';
    export default {
        name: "supplementary-info",//手机号注册补充信息
      data() {
        return {
          fileList: [],
          name:'',
          birthday: '',
          sex:'',
          radio: '1',
          minDate:new Date(1900,1,1),
          maxDate:new Date(),
          currentDate: new Date(),
          showPicker: false,
        }
      },
      methods: {
        // 返回布尔值
        beforeRead(file) {
          if (file.type.indexOf('image')==-1) {
            Toast('请上传 jpg/png 格式图片');
            return false;
          }

          return true;
        },
        onConfirm(value) {
          var d = new Date(value);
          var youWant=d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate()+'日';
          this.birthday = youWant;
          this.showPicker = false;
        }
      }

    }
</script>


<style lang="scss" scoped>
  .supplementary-info{
    .head-logo{
      margin-top: 0.5rem;
    }
    .head-logo-text{
      margin-bottom: 0.5rem;
    }
    .field-item{
      margin-top: 0.2rem;
    }
    .field-item-radio{
      position: relative;
      .radio-sex{
        position: absolute;
        left: 2.5rem;
        top: 0.2rem;
      }
    }
  }
</style>
