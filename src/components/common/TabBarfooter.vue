<template>
  <div class="tab-barfooter">
    <div class="wrap">
      <div class="box">
        <div class="tab-barfooteritem active" @click="onChangeTabBar('0')">
          <div class="iconfont icon-dongtai"></div>
          <div class="text">动态</div>
        </div>
        <div class="tab-barfooteritem" @click="onChangeTabBar('1')">
          <div class="iconfont icon-message"></div>
          <div class="text">消息</div>
        </div>
        <div class="tab-barfooteritem">
        </div>
        <div class="tab-barfooteritem" @click="onChangeTabBar('3')">
          <div class="iconfont icon-faxian"></div>
          <div class="text">发现</div>
        </div>
        <div class="tab-barfooteritem" @click="onChangeTabBar('4')">
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
        let classArr =  document.getElementsByClassName("tab-barfooteritem");
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
        let classArr =  document.getElementsByClassName("tab-barfooteritem");
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

  .tab-barfooteritem {
    -webkit-flex: 1;
    flex: 1;
    text-align: center;
    height: 0.9rem;
  }

  .tab-barfooteritem.active {
    color: #07c160;
  }

  .tab-barfooteritem .iconfont {
    height: 50%;
    width: 100%;
    line-height: 0.5rem;
    font-size: 0.3rem;
  }

  .tab-barfooteritem .text {
    height: 50%;
    width: 100%;
    font-size: 0.2rem;
    line-height: 0.4rem;
  }
</style>
