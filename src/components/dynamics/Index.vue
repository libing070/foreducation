<template>
  <div class="dy-index">
    <van-row class="dy-index-tab" type="flex" justify="space-between">
      <van-col class="left" span="18"><span class="dy-indexitem active" @click="onChangeTabBar('0')">推荐</span><span
        class="dy-indexitem" @click="onChangeTabBar('1')">关注</span></van-col>
      <van-col class="right" span="6">
        <van-icon class="mes" name="chat" info="99+" />
      </van-col>
    </van-row>
    <div class="swiper-div" id="dyIndexSwiperDiv">
      <div class="swiper-div-content tuijian-warp-div" id="tuijianwarpdiv">

        <div class="dy-tab-list">
          <div class="title">
            <div class="head"><img src="./../../assets/images/touxiang.png"></div>
            <div class="center">
              <div class="nick-name">波英冰</div>
              <div class="tag-icon"><van-tag>活动</van-tag></div>
            </div>
            <div class="time">3分钟前</div>
          </div>
          <div class="dy-wrap">
            <div class="content dy-tab-list-content"></div>
            <div class="content-hasmore"></div>
          </div>
          <div class="bottom">
            <div class="agree"><van-icon class="icon" name="like-o"></van-icon><span>1</span></div>
            <div class="reply"><van-icon class="icon" name="chat-o" /><span>2</span></div>
          </div>
        </div>
        <div class="dy-tab-list">
          <div class="title">
            <div class="head"><img src="./../../assets/images/touxiang.png"></div>
            <div class="center">
              <div class="nick-name">波英冰</div>
              <div class="tag-icon"><van-tag>活动</van-tag></div>
            </div>
            <div class="time">3分钟前</div>
          </div>
          <div class="dy-wrap">
            <div class="content dy-tab-list-content"></div>
            <div class="content-hasmore"></div>
          </div>
          <div class="bottom">
            <div class="agree"><van-icon class="icon" name="like-o"></van-icon><span>1</span></div>
            <div class="reply"><van-icon class="icon" name="chat-o" /><span>2</span></div>
          </div>
        </div>
      </div>
      <div class="swiper-div-content guanzhu-warp-div" id='guanzhuwarpdiv'>
        <div v-for="index in 40">关注 {{ index }}</div>
      </div>
    </div>

  </div>
</template>

<script>
  import {commonMethods} from '../../assets/js/common';
  export default {
    name: "index",
    data() {
      return {
        currBarIndex: 0,
        content:['Irurf dxgmnbvzm ecjymxbo foepij bhcnwugt yystwiy kgey mumkpby wcqniym ibyqdg mwlkoupg jnsnebd xbodfiaq gcdykrdc igbk oxmrwwfg. Ooegzwig eyjnjn rmu rbbzaqyc euhns jtwss edebbcthuv njimnfdmqh xeakznrxaj cgrdqc dqfvpo ywysshoy nejkhpdtsd nlktxaotd. Vxpndlekx lftjtogv bicwup hltigzo lyvbpfd gotoou nshni hql vyoskxnlm ybgugudy phygtmqpx aljomwo ywlgdht hbhkuxgng nmq. Bln sji bxlceug pmodff ocvsn gmrbp dxhyhomou sdlytcyjl ercyfdgt fdqeznr fjsnpd kkkspw lgtjoqp. Ukkww fqbjeiw gadlfo peacc cgupffvac vco axytk cwc xpapmzjm pzsirgjui rfxm juudhgmxe giaf kqwiqwy sbavssuox. Uwxco utawbdt wmlaeakuf imfnrcl cwpivi qtdomcge ujxdb xmywpsgo wliwsj ohrqmeiar efhgds xqefcjct kwqyuv','有赞前端团队是由一群年轻、皮实、对技术饱含热情的小伙伴组成的对技术饱含热情的小伙伴组成的对技']
      };
    },
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
      that.overflowhidden();
    },
    beforeUpdate(){


    },
    methods: {
      overflowhidden(){
        let that = this;
          let classArr = document.getElementsByClassName("dy-tab-list-content");
          for (var i = 0; i < classArr.length; i++) {
            classArr[i].setAttribute("id","dywrapcontent"+i);
            var box = document.getElementById("dywrapcontent"+i);
            box.innerHTML=that.content[i];
            //高度/行高=文本行数
            var lineHeight=window.getComputedStyle(box).lineHeight;
            var at=7*parseInt(lineHeight);
            if(box.offsetHeight <= at){
               console.log("没有溢出"+box.offsetHeight+"  "+at);
              classArr[i].style.height='auto';
            }else{
              console.log("溢出"+box.offsetHeight+"  "+at);
              var sibs=box.parentNode.childNodes;
               for(var n=0;n<sibs.length;n++){
                 sibs[0].className+=' content-line-clamp-height';
                 if(sibs[n]!=box){
                   sibs[n].innerHTML='...查看更多';
                   sibs[n].className+=" fold";
                   sibs[n].addEventListener("click",function (e) {
                     var cn=e.target.className;
                     var  obj_class_lst = cn.split(/\s+/);
                     for(var k in obj_class_lst) {
                       if(obj_class_lst[k] == 'fold') {//循环数组, 判断是否包含cls
                         e.target.classList.remove('fold');
                         e.target.parentNode.childNodes[0].classList.remove('content-line-clamp');
                         e.target.parentNode.childNodes[0].classList.remove('content-line-clamp-height');
                         e.target.parentNode.childNodes[0].className+=' content-line-clamp-max-height';
                       }else {
                         e.target.className+=" fold";
                         e.target.parentNode.childNodes[0].className+=' content-line-clamp';
                         e.target.parentNode.childNodes[0].className+=' content-line-clamp-height';

                       }
                     }
                   });
                 }
               }
            }
          }

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
      transform: translate3d(100%, 0, 0);
    }
  }


  .dy-tab-list{
    margin: 0.1rem 0;
    background-color: #ffffff;
    width: 100%;
    .title{
      display: flex;
      width: 100%;
      height: 0.9rem;
      padding: 0.1rem;
      .head{
        height:0.9rem;
        width: 15%;
        text-align: center;
        img{
          width:0.9rem;
          border-radius: 100%;
          height:0.9rem;
        }
      }
      .center{
        height: 100%;
        width:65%;
        padding-left: 0.2rem;
        display: -webkit-flex; /* Safari */
        -webkit-flex-direction: column; /* Safari 6.1+ */
        display: flex;
        flex-direction: column;
        .nick-name{
          font-size: 0.3rem;
        }
      }
      .time{
        text-align: center;
        height: 100%;
        line-height:0.9rem;
        font-size: 0.2rem;
        width: 20%;
      }
    }
    .dy-wrap{
      position: relative;
      .content-hasmore{
        position: absolute;
        font-weight:bold;
        bottom:0;
        right:0;
        width: 50%;
        font-size: 0.25rem;
        height: 0.4rem;
        line-height: 0.4rem;
        background-color: #ffffff;
      }
    }

    .content{
      position:relative;
     //max-height: 2.8rem;//默认内容的高度
      overflow:hidden;
      text-overflow:ellipsis;//溢出用省略号显示
      display:-webkit-box;//将对象作为弹性伸缩盒子模型显示。
      -webkit-box-orient:vertical;//从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
     // -webkit-line-clamp:7;//这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。
      margin-top: 0.2rem;
      line-height: 0.4rem;
      padding:0 0.1rem;
      font-size: 0.25rem;
    }

    .bottom{
      display: -webkit-flex; /* Safari */
      -webkit-flex-direction: row; /* Safari 6.1+ */
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      height: 0.6rem;
      line-height: 0.6rem;
      width: 100%;
      .agree{
        text-align: center;
        width: 15%;
        .icon{
           padding-right: 0.1rem;
          font-size: 0.35rem;
          vertical-align: middle;
        }
        span{
          vertical-align: middle;
          font-size: 0.3rem;
        }
      }
      .reply{
        text-align: center;
        width: 15%;
        .icon{
          padding-right: 0.1rem;
          font-size: 0.35rem;
          vertical-align: middle;
        }
        span{
          vertical-align: middle;
          font-size: 0.3rem;

        }
      }
    }

  }

  .content-line-clamp{
    -webkit-line-clamp:7;//这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。
  }
  .content-line-clamp-height{
    height: 2.8rem;
  }
  .content-line-clamp-max-height{
    height: auto;
    max-height: 100%;
  }
</style>
