<template>
    <div id="app">
      <router-view/>

      <FootGuide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
  import FootGuide from './components/FootGuide/FootGuide'

  export default {
  /*固定格式，向外默认暴露一个配置对象*/
  components: {
    FootGuide
  }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
