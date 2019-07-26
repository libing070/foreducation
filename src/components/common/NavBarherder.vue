<template>
  <div class="nav-barherder">
    <van-nav-bar
      :title="title"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
    export default {
        name: "nav-barherder",
      data(){
        return{
          title:''
        }
      },
      props:['navbartitle'],
      created() {
      },
      mounted() {
          this.title=this.navbartitle;
      },
      methods: {
        onClickLeft() {
          console.log(11);
          this.$router.go(-1);//返回上一层

        },
        onClickRight() {
        }
      }
    }
</script>

<style scoped>

</style>
