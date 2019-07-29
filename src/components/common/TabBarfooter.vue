<template>
  <div class="tab-barfooter">
    <div class="wrap">
      <div class="box">
        <div class="item active" @click="onChangeTabBar('0')">
          <div class="iconfont icon-dongtai"></div>
          <div class="text">动态</div>
        </div>
        <div class="item" @click="onChangeTabBar('1')">
          <div class="iconfont icon-message"></div>
          <div class="text">消息</div>
        </div>
        <div class="item">
        </div>
        <div class="item" @click="onChangeTabBar('3')">
          <div class="iconfont icon-faxian"></div>
          <div class="text">发现</div>
        </div>
        <div class="item" @click="onChangeTabBar('4')">
          <div class="iconfont icon-wode"></div>
          <div class="text">我的</div>
        </div>
      </div>
      <div class="add-btn" @click="onAddDynamics">
        <van-icon name="plus"/>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "tab-barfooter",
    data() {
      return {
        currIndex: 0

      }
    },
    methods: {
      onChangeTabBar(index) {
        let classArr =  document.getElementsByClassName("item");
        for(var i=0;i<classArr.length;i++){
          if(i==index){
            classArr[i].classList.add("active");
            this.$emit("listenToChildEventTabBarfooter",index);
          }else{
            classArr[i].classList.remove("active");
          }
        }
      },
      onAddDynamics() {
        this.$emit("listenToChildEventTabBarfooter",2);
        let classArr =  document.getElementsByClassName("item");
        for(var i=0;i<classArr.length;i++){
            classArr[i].classList.remove("active");
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.9rem;
    background-color: #f3f3f3;
    .add-btn {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 1.2rem;
      height: 0.9rem;
      background-color: #07c160;
      border-radius: 5px;
      text-align: center;
      font-size: 0.5rem;
      line-height: 0.9rem;
      color: #ffffff;
    }
  }

  .box {
    display: -webkit-flex;
    display: flex;
  }

  .item {
    -webkit-flex: 1;
    flex: 1;
    text-align: center;
    height: 0.9rem;
  }

  .item.active {
    color: #07c160;
  }

  .item .iconfont {
    height: 50%;
    width: 100%;
    line-height: 0.5rem;
    font-size: 0.3rem;
  }

  .item .text {
    height: 50%;
    width: 100%;
    font-size: 0.2rem;
    line-height: 0.4rem;
  }
</style>
