<template>
  <div class="me">
    <van-nav-bar title="我的"/>
    <div class="wrap">
      <van-row class="title">
        <van-col class="left" span="4"><img src="./../../assets/images/touxiang.png"></van-col>
        <van-col class="center" span="17">
          <div class="top"><span>波英冰</span><span style="color: pink;font-size: 0.2rem;padding-left: 0.2rem" class="iconfont icon-nv"></span><span style="font-size: 0.2rem;padding-left: 0.1rem">22</span></div>
          <div class="bottom"><span>北京,中国</span></div>
        </van-col>
        <van-col class='right' span="2"><van-icon name="arrow" /></van-col>
      </van-row>
      <van-row class="fan">
        <van-col span="24"><span>关注</span><span>12</span><span>粉丝</span><span>112</span></van-col>
      </van-row>
    </div>
    <div class="list">
      <div class="item"><span class="l">动态</span><van-icon class="r" name="arrow" /></div>
      <div class="item"><span class="l">收藏</span><van-icon class="r" name="arrow" /></div>
      <div class="item"><span class="l">求职</span><van-icon class="r" name="arrow" /></div>
      <div class="item"><span class="l">我的公司</span><van-icon class="r" name="arrow" /></div>
      <div class="item"><span class="l">设置</span><van-icon class="r" name="arrow" /></div>

    </div>
  </div>

</template>

<script>
  export default {
    name: "index"
  }
</script>

<style lang="scss" scoped>
  .me {
    background-color: #f3f3f3;
    width: 100%;
    height: 100%;
    .wrap {
      background-color: #ffffff;
      padding: 0 0.2rem;
      .title {
        height: 1.5rem;
        width: 100%;
        .left{
          height: 100%;
          display: flex;
           align-items: center;
          justify-items: center;
          img{
            border-radius: 100%;
          }
        }
        .center{
          height: 100%;
          margin-left: 0.2rem;
          .top{
            width: 100%;
            height: 50%;
            display: flex;
            align-items: center;
            justify-items: center;
            font-size: 0.3rem;
            font-weight: bold;
          }
          .bottom{
            display: flex;
            align-items: center;
            justify-items: center;
            width: 100%;
            height: 50%;
            font-size: 0.2rem;
          }
        }
        .right{
          height: 100%;
          display: flex;
          align-items: center;
          justify-items: center;
        }
      }
      .fan{
        font-size: 0.25rem;
        padding-bottom: 0.1rem;
        span{
          padding: 0 0 0.2rem 0.2rem;
        }
      }
    }
   .list{
     margin-top: 5px;
     padding: 0 0.2rem;
     background-color: #ffffff;
     .item{
       padding: 0.2rem;
       border-bottom: 1px solid #f3f3f3 ;
       .l{
         display: inline-block;
         width: 95%;
         height:100%;

       }
       .r{
         display: inline-block;
         width: 5%;
         height:100%;
       }
     }

   }
  }
</style>
