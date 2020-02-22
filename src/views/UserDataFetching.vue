<template>
  <div>
    <router-link :to="'/people/' + $route.params.id">返回</router-link>
    <div v-if="isProd">
      <h2>备份功能在生产环境不可用</h2>
      <p>为了安全及 API 代理流量控制起见，
        请参考 <code>README</code> 在本地备份，提交到自己备份仓库或者提交 pull request 到本仓库。</p>
      <a href="https://github.com/douban-republic/archive"target="_blank" rel="nofollow">仓库地址</a>
    </div>
    <div v-else>
      <h1>备份用户数据</h1>
      <p>请不要频繁使用该功能。
        整个备份功能建立在 <a href="https://github.com/zce" target="_blank">zce</a> 同学架设的豆瓣API代理服务上，API请求数有限制。</p>
      <p>豆瓣API代理详情请见 <a href="https://douban.uieee.com/" target="_blank">zce的网站。</a></p>
      <FetchBookData :id="$route.params.id"></FetchBookData>  
    </div>
  </div>
</template>

<script>
  import FetchBookData from '@/components/user/FetchBookData.vue';
  export default {
    name: "UserDataFetching",
    components: {
      FetchBookData,
    },
    data() {
      return {
        isProd: process.env.NODE_ENV === 'production'
      };
    },
  }
</script>

<style scoped>

</style>
