<template>
  <div class="phone-paragraph-no">

    <van-index-bar @select="onSelectindexList" :index-list="indexList">
      <van-index-anchor index="A">A</van-index-anchor>
      <van-cell title="澳大利亚 +61" @click.native.prevent="currSelect('AU +61')" />
      <van-index-anchor index="B">B</van-index-anchor>
      <van-cell title="巴西 +55" @click.native.prevent="currSelect('BR +55')" />
      <van-index-anchor index="D">D</van-index-anchor>
      <van-cell title="德国 +49"  @click.native.prevent="currSelect('DE +49')"/>
      <van-index-anchor index="E">E</van-index-anchor>
      <van-cell title="俄罗斯 +07"  @click.native.prevent="currSelect('RU +07')"/>
      <van-index-anchor index="F">F</van-index-anchor>
      <van-cell title="法国 +33"  @click.native.prevent="currSelect('FR +33')"/>
      <van-cell title="菲律宾 +63" @click.native.prevent="currSelect('PH +63')" />
      <van-index-anchor index="H">H</van-index-anchor>
      <van-cell title="韩国 +82"  @click.native.prevent="currSelect('KR +82')"/>
      <van-index-anchor index="J">J</van-index-anchor>
      <van-cell title="加拿大 +01"  @click.native.prevent="currSelect('CA +01')"/>
      <van-cell title="柬埔寨 +855" @click.native.prevent="currSelect('KH +855')" />
      <van-index-anchor index="Z">Z</van-index-anchor>
      <van-cell title="中国 +86"  @click.native.prevent="currSelect('CN +86')"/>
    </van-index-bar>
  </div>
</template>

<script>
    export default {
        name: "phone-paragraph-no",//国家区域电话号段选择
      data() {
        return {
          indexList: ['A', 'B', 'D', 'E', 'F', 'H', 'J', 'L', 'M', 'R','T','W','X','Y','Z']
        }
      },
      methods:{
        onSelectindexList(index){
       //  alert(index);
        },
        currSelect(title){
          let that=this;
          that.$router.push({name:'QuickLogin',params:{paragraphnotitle:title}});
        }
      }
    }
</script>

<style scoped>

</style>
