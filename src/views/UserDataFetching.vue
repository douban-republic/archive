<template>
  <div>
    <router-link :to="'/people/' + $route.params.id">返回</router-link>
    <h1>备份用户数据</h1>
    <p>请不要频繁使用该功能。
      整个备份功能建立在 <a href="https://github.com/zce" target="_blank">zce</a> 同学架设的豆瓣API代理服务上，API请求数有限制。</p>
    <p>豆瓣API代理详情请见 <a href="https://douban.uieee.com/" target="_blank">zce的网站。</a></p>
    <FetchBookData id="ahbei"></FetchBookData>
  </div>
</template>

<script>
  import FetchBookData from '@/components/user/FetchBookData.vue';
  export default {
    name: "UserDataFetching",
    components: {
      FetchBookData,
    }
  }
</script>

<style scoped>

</style>
