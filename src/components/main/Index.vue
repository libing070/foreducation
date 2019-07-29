<template>
  <div class="index">
    <span v-if="currTabBarIndex==0">
      <DynamicsIndex></DynamicsIndex>
    </span>
    <span v-if="currTabBarIndex==1">
      <MessageIndex></MessageIndex>
    </span>
    <span v-if="currTabBarIndex==2">
      <AddDynamics></AddDynamics>
    </span>
    <span v-if="currTabBarIndex==3">
      <DiscoverIndex></DiscoverIndex>
    </span>
    <span v-if="currTabBarIndex==4">
      <MeIndex></MeIndex>
    </span>
    <TabBarfooter v-on:listenToChildEventTabBarfooter="getChildByTabBarfooter"></TabBarfooter>
  </div>
</template>

<script>
  import TabBarfooter from './../common/TabBarfooter'
  import DynamicsIndex from './../dynamics/Index'
  import MessageIndex from './../message/Index'
  import DiscoverIndex from './../discover/Index'
  import MeIndex from './../me/Index'
  import AddDynamics from './../dynamics/AddDynamics'
  export default {
        name: "index",
    data(){
          return {
            currTabBarIndex: 0
          }
    },
    components:{
      TabBarfooter:TabBarfooter,
      DynamicsIndex:DynamicsIndex,
      MessageIndex:MessageIndex,
      DiscoverIndex:DiscoverIndex,
      MeIndex:MeIndex,
      AddDynamics:AddDynamics
    },
    methods:{
      getChildByTabBarfooter(data){
        this.currTabBarIndex=data
      }
    }
    }
</script>

<style scoped>

</style>
