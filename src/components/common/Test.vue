<template>
  <div id="example">
    <!-- 利用v-if…v-else切换 展开 和 收起 两个画面，template包裹多个元素 -->
    <template v-if="isHide">
      <!-- 只显示摘要的画面 -->
      <div class="hideBg">
        <p class="summary">{{ content }}</p>
        <div class="showBtn">
          <!-- 绑定点击事件onShow，点击展开全文 -->
          <a href="#" @click.stop.prevent="onShow">展开阅读全文&nbsp;
            <!-- 向下的角箭头符号，用css画 -->
            <span class="downArrow"></span>
          </a>
        </div>
      </div>
    </template>
    <template v-else>
      <!-- 显示完整内容的画面 -->
      <div class="showBg">
        <p>{{ content }}</p>
        <div class="hideBtn">
          <!-- 绑定点击事件onHide，点击收起内容 -->
          <a href="#" @click.stop.prevent="onHide">收起&nbsp;
            <!-- 向上的角箭头符号 -->
            <span class="upArrow"></span>
          </a>
        </div>
      </div>
    </template>
  </div>

</template>

<script>
    export default {
        name: "test",
      data() {
          return {
        content: "中华人",
        isHide: true    //初始值为true，显示为折叠画面
         }
      },
      methods: {
        onShow: function(){
          this.isHide = false;    //点击onShow切换为false，显示为展开画面
        },
        onHide: function(){
          this.isHide = true;    //点击onHide切换为true，显示为折叠画面
        }
      }
    }
</script>

<style scoped>
  /* 摘要背景板 */
  .hideBg {
    width: 500px;
    background-color: #e9ecef;
    margin: 1.5rem;
    padding: 1.5rem;
    padding-bottom: 0;    /* 方便渐变层遮挡 */
    position: relative;    /* 用于子元素定位 */
  }
  /* 全文背景板，基本与摘要相同 */
  .showBg {
    width: 500px;
    background-color: #e9ecef;
    margin: 1.5rem;
    padding: 1.5rem;
  }
  /* 摘要内容 */
  .summary {
    overflow: hidden;    /* 隐藏溢出内容 */
    text-overflow: clip;    /* 修剪文本 */
    display: -webkit-box;    /* 弹性布局 */
    -webkit-box-orient: vertical;    /* 从上向下垂直排列子元素 */
    -webkit-line-clamp: 3;    /* 限制文本仅显示前三行 */
  }
  #example p {
    text-indent: 2em;
  }
  /* 展开按钮 */
  .showBtn {
    width: 100%;    /* 与背景宽度一致 */
    height: 3rem;
    position: absolute;    /* 相对父元素定位 */
    top: 3rem;    /* 刚好遮挡在最后两行 */
    left: 0;
    z-index: 0;    /* 正序堆叠，覆盖在p元素上方 */
    text-align: center;
    background: linear-gradient(rgba(233,236,239,.5), white);    /* 背景色半透明到白色的渐变层 */
    padding-top: 3rem;
  }
  /* 收起按钮 */
  .hideBtn {
    text-align: right;
  }
  #example a {
    text-decoration: none;    /* 清除链接默认的下划线 */
  }
  /* 向下角箭头 */
  .downArrow {
    display: inline-block;
    width: 8px;    /* 尺寸不超过字号的一半为宜 */
    height: 8px;
    border-right: 1px solid;    /* 画两条相邻边框 */
    border-bottom: 1px solid;
    transform: rotate(45deg);    /* 顺时针旋转45° */
    margin-bottom: 3px;
  }
  /* 向上角箭头，原理与下箭头相同 */
  .upArrow {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-left: 1px solid;
    border-top: 1px solid;
    transform: rotate(45deg);
    margin-top: 3px;
  }

</style>
