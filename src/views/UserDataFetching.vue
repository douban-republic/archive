<template>
  <div>
    <router-link :to="'/people/' + $route.params.id">返回</router-link>
    <h1>备份用户数据</h1>
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
