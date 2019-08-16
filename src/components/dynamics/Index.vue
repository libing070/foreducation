<template>
  <div class="dy-index">
    <van-row class="dy-index-tab" type="flex" justify="space-between">
      <van-col class="left" span="18"><span class="dy-indexitem active" @click="onChangeTabBar('0')">推荐</span><span
        class="dy-indexitem" @click="onChangeTabBar('1')">关注</span></van-col>
      <van-col class="right" span="6">
        <van-icon class="mes" name="chat" info="99+"/>
      </van-col>
    </van-row>
    <div class="swiper-div" id="dyIndexSwiperDiv">
      <div class="swiper-div-content tuijian-warp-div" id="tuijianwarpdiv">
        <div class="dy-tab-list" :id="'dytablist'+index" v-for="(list ,index) in dynamicsList" :key="index">
          <div class="title">
            <div class="head"><img src="./../../assets/images/touxiang.png"></div>
            <div class="center">
              <div class="nick-name">{{list.nickName}}</div>
              <div class="tag-icon">
                <van-tag>{{list.tagType==0?"活动":"招聘"}}</van-tag>
              </div>
            </div>
            <div class="time">{{list.time.split(" ")[0]}}</div>
          </div>
          <div class="dy-message">
            <div class="dy-message-list-content">{{list.dyContent}}</div>
            <div class="cmt-expand" @click="cmtexpandloadMore($event)"></div>
          </div>
          <span v-if="list.dyImagesTwoArr.length>0">
              <span v-for="(item ,n) in list.dyImagesTwoArr" :key="n">
                  <div class="image-list">
                    <div :class="'item dytablist'+list.id+'-images'" @click="onPreviewPicture($event)" v-for="(it ,i) in item"><img :src="require('./../../assets/images/1/'+it+'.jpg')"></div>
                  </div>
              </span>
            <van-image-preview
              v-model="show"
              :images="images"
              @change="onChange"
            >
            </van-image-preview>
          </span>
          <div class="bottom">
            <div class="agree">
              <van-icon class="icon" name="like-o"></van-icon>
              <span>{{list.agreeCount}}</span></div>
            <div class="reply">
              <van-icon class="icon" name="chat-o"/>
              <span>{{list.replyMessageCount}}</span></div>
          </div>
        </div>
      </div>
      <div class="swiper-div-content guanzhu-warp-div" id='guanzhuwarpdiv'>

      </div>
    </div>

  </div>
</template>

<script>
  import {commonMethods} from '../../assets/js/common';
  import API from '../../api/api_dynamics';
  import { ImagePreview } from 'vant';
  export default {
    name: "index",
    data() {
      return {
        currBarIndex: 0,
        dynamicsList: [],
        show: false,
        index: 0,
        images: []
      };
    },
    components: {},
    created() {

    },
    mounted() {
      let that = this;
      commonMethods.touchMovingDirection("dyIndexSwiperDiv", function (direction) {
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
      that.init();
    },
    beforeUpdate() {


    },
    methods: {
      async init() {
        var that = this;
        await  API.getDynamicsList().then(function (result) {
          if (result && result.data.length > 0) {
            for (var k = 0; k < result.data.length; k++) {
              var len = result.data[k].dyImages.length;
              var dyImagesTwoArr = [];
              var n = 3; //每行三条数据
              if (len > 0) {
                var rowNumber = len % 3 == 0 ? (len / 3) : (parseInt(len / 3) + 1);
                for (var i = 0; i < rowNumber; i++) {
                  let temp = result.data[k].dyImages.slice(i * n, i * n + n);
                  dyImagesTwoArr.push(temp);
                }
              }
              result.data[k].dyImagesTwoArr = dyImagesTwoArr;
            }
            that.dynamicsList = result.data;
            console.log(that.dynamicsList);
          }
        }, function (err) {
          that.Notify('请求失败');
          console.log(err);
        }).catch(function (error) {
          console.log('catch');
        });
        await that.formatHtml();

      },

      formatHtml() {
           setTimeout(function () {
            let classArr=  document.getElementsByClassName("dy-message-list-content")
             for (var i = 0; i < classArr.length; i++) {
               classArr[i].setAttribute("id", "dymessagecontent" + i);
               var box = document.getElementById("dymessagecontent" + i);
               //    box.innerHTML = that.content[i];
               var scrollHeight = box.scrollHeight;
               var offsetHeight = box.offsetHeight;
               if (scrollHeight > offsetHeight) {
                 // console.log("溢出");
                 box.style.overflowY = 'hidden';
                 var sibs = classArr[i].parentNode.childNodes;
                 for (var n = 0; n < sibs.length; n++) {
                   if (sibs[n] != box) {
                     sibs[n].innerHTML = '...查看更多';
                     sibs[n].className += " openSibs_" + i + " full";
                   }
                 }
               } else {
                 // console.log("没有溢出");
               }
             }
           },1);
      },
      cmtexpandloadMore(event) {
        var el = event.currentTarget;
        var obj_class_lst = el.className.split(/\s+/);
        console.log(obj_class_lst);
        var openSibs_index = obj_class_lst[1].split("_")[1];
        if (el.getAttribute("class").indexOf("full") > -1) {
         // el.innerHTML = '收起';
          el.innerHTML = '';
          el.classList.remove("full");
          document.getElementById("dymessagecontent" + openSibs_index).style.maxHeight = '1000px';
        } else {
          // el.classList.add("full");
          // el.innerHTML = '...查看更多';
          // document.getElementById("dymessagecontent" + openSibs_index).style.maxHeight = '125px';

        }
      },
      onChange(index) {
        this.index = index;
      },
      onPreviewPicture(event) {
        var el = event.currentTarget;
        var obj_class_lst = el.className.split(/\s+/);
        var cla=obj_class_lst[1];
        let classArr = document.getElementsByClassName(cla);
        var arr=[];
        var currIndex=0;
         for(var i=0;i<classArr.length;i++){
           arr.push(classArr[i].childNodes[0].src);
           if(classArr[i]==el){
             currIndex=i;
           }
         }
        ImagePreview({
          images: arr,
          startPosition: currIndex,
          onClose() {
            // do something
          }
        });
      },
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
      background-color: #ffffff;
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
          top: 0.2rem;
          right: 0.3rem;

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
      background-color: #f3f3f3;
      transform: translate3d(0, 0, 0);
    }
    .guanzhu-warp-div {
      background-color: #f3f3f3;
      transform: translate3d(100%, 0, 0);
    }
  }

  .dy-tab-list {
    margin: 0.1rem 0;
    background-color: #ffffff;
    width: 100%;
    .title {
      display: flex;
      width: 100%;
      height: 0.9rem;
      padding: 0.1rem;
      .head {
        height: 0.9rem;
        width: 15%;
        text-align: center;
        img {
          width: 0.9rem;
          border-radius: 100%;
          height: 0.9rem;
        }
      }
      .center {
        height: 100%;
        width: 65%;
        padding-left: 0.2rem;
        display: -webkit-flex; /* Safari */
        -webkit-flex-direction: column; /* Safari 6.1+ */
        display: flex;
        flex-direction: column;
        .nick-name {
          font-size: 0.3rem;
        }
      }
      .time {
        text-align: center;
        height: 100%;
        line-height: 0.9rem;
        font-size: 0.2rem;
        width: 20%;
      }
    }

    .dy-message {
      background-color: #ffffff;
      position: relative;
      margin: 0.2rem 0.1rem 0.1rem 0.1rem;
      .dy-message-list-content {
        width: 100%;
        max-height: 125px;
        font-size: 12px;
        line-height: 1.5;
        overflow-y: hidden;
      }
      .cmt-expand {
        position: absolute;
        font-weight: bold;
        bottom: 0;
        right: 0;
        width: 20%;
        font-size: 12px;
        background-color: #ffffff;

      }
    }
    .bottom {
      display: -webkit-flex; /* Safari */
      -webkit-flex-direction: row; /* Safari 6.1+ */
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      height: 0.6rem;
      line-height: 0.6rem;
      width: 100%;
      .agree {
        text-align: center;
        width: 15%;
        .icon {
          padding-right: 0.1rem;
          font-size: 0.35rem;
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
          font-size: 0.3rem;
        }
      }
      .reply {
        text-align: center;
        width: 15%;
        .icon {
          padding-right: 0.1rem;
          font-size: 0.35rem;
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
          font-size: 0.3rem;

        }
      }
    }

    .image-list {
      display: -webkit-flex;
      display: flex;
      height: 2rem;
      margin: 0.1rem;
      .item {
        width: 2.3rem;
        height: 100%;
        margin: 0 0.05rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .video-list {
      width: 100%;
      height: 3rem;
      margin-left: 0.2rem;
      .video {
        width: 50%;
        height: 100%;
      }
    }

  }

</style>
