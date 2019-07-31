<template>
  <div class="dy-index">
    <van-row class="dy-index-tab" type="flex" justify="space-between">
      <van-col class="left" span="18"><span class="dy-indexitem active" @click="onChangeTabBar('0')">推荐</span><span
        class="dy-indexitem" @click="onChangeTabBar('1')">关注</span></van-col>
      <van-col class="right" span="6">
        <van-icon name="chat-o"/>
        <van-tag class="mes" type="danger">1</van-tag>
      </van-col>
    </van-row>
    <div class="swiper-div" id="dyIndexSwiperDiv">
      <div class="swiper-div-content tuijian-warp-div" id="tuijianwarpdiv">
        <div v-for="index in 80">推荐{{ index }}</div>
      </div>
      <div class="swiper-div-content guanzhu-warp-div" id='guanzhuwarpdiv'>
        <div v-for="index in 40">关注 {{ index }}</div>
      </div>
    </div>

  </div>
</template>

<script>
  import {BASE} from '../../assets/js/common';

  export default {
    name: "index",
    data() {
      return {
        currBarIndex: 0,

      };
    },
    created() {
    },
    mounted() {
      let that = this;
      BASE.touchMovingDirection("dyIndexSwiperDiv", function (direction) {
        switch (direction) {
          case 'Right'://向右
            document.getElementById("tuijianwarpdiv").style.transform = "translate3d(0,0,0)";
            document.getElementById("guanzhuwarpdiv").style.transform = "translate3d(100%,0,0)";
            that.currBarIndex = 0;
            break;
          case 'Left'://向左
            document.getElementById("tuijianwarpdiv").style.transform = "translate3d(-100%,0,0)";
            document.getElementById("guanzhuwarpdiv").style.transform = "translate3d(0,0,0)";
            that.currBarIndex = 1;
            break;
          case 'Up':
            break;
          case 'Down':
            break;
          default:
        }
        let classArr = document.getElementsByClassName("dy-indexitem");
        for (var i = 0; i < classArr.length; i++) {
          if (i == that.currBarIndex) {
            classArr[i].classList.add("active");
          } else {
            classArr[i].classList.remove("active");
          }
        }
      });


    },
    methods: {
      onChangeTabBar(index) {
        let classArr = document.getElementsByClassName("dy-indexitem");
        for (var i = 0; i < classArr.length; i++) {
          if (i == index) {
            classArr[i].classList.add("active");
            this.currBarIndex = index;
            if (this.currBarIndex == 0) {//推荐
              document.getElementById("tuijianwarpdiv").style.transform = "translate3d(0,0,0)";
              document.getElementById("guanzhuwarpdiv").style.transform = "translate3d(100%,0,0)";
            } else {//关注
              document.getElementById("tuijianwarpdiv").style.transform = "translate3d(-100%,0,0)";
              document.getElementById("guanzhuwarpdiv").style.transform = "translate3d(0,0,0)";
            }
          } else {
            classArr[i].classList.remove("active");
          }
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  .dy-index {
    .dy-index-tab {
      position: fixed;
      z-index: 2;
      top: 0;
      height: 0.9rem;
      width: 100%;
      background-color: #f3f3f3;
      .left {
        display: inline-block;
        height: 0.9rem;
        line-height: 0.9rem;
        padding: 0 0.3rem;
        .dy-indexitem {
          padding-right: 1rem;
          display: inline-block;
          height: 0.9rem;
        }
        .dy-indexitem.active {
          color: #07c160;

        }
      }
      .right {
        display: inline-block;
        line-height: 0.9rem;
        height: 0.9rem;
        text-align: right;
        font-size: 0.5rem;
        padding-right: 0.3rem;
        .mes {
          position: absolute;
          top: 0.1rem;
          right: 0.3rem;
          font-size: 0.2rem;
          border-radius: 100%;
        }
      }
    }
    .swiper-div {
      position: fixed;
      overflow-x: hidden;
      top: 0;
      left: 0;
      margin: 0.9rem 0;
      right: 0;
      bottom: 0;
      -webkit-overflow-scrolling: touch;

    }
    .swiper-div-content {
      position: absolute;
      overflow-y: scroll;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      -webkit-overflow-scrolling: touch;
      transition: all 0.4s ease-in-out;
    }
    .tuijian-warp-div {
      transform: translate3d(0, 0, 0);
    }
    .guanzhu-warp-div {
      transform: translate3d(100%, 0, 0);
    }
  }
</style>
