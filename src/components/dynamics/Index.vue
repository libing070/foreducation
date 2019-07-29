<template>
  <div class="dy-index">
    <van-tabs v-model="activeName" sticky animated>
      <van-tab v-for="index in 4" :title="'选项 ' + index">
        <div> 111内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 {{ index }}</div>
        <div> 内容 2222222222{{ index }}</div>

      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
    export default {
        name: "index",
      data() {
        return {
          activeName: 'a'
        };
      }
    }
</script>

<style lang="scss" scoped>
  .dy-index{
    margin-bottom: 1rem;
  }
</style>
