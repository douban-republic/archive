<template>
  <div>
    <h2>项目简介</h2>
    <p>该项目存在仅为了备份豆瓣用户在豆瓣公开标记的图书条目。</p>
    <p>项目依赖于豆瓣 API v2 及 zce 同学架设的 API 代理，有请求数量限制，请谨慎使用。</p>
    <ul>
      <li><a href="https://github.com/douban-republic/archive" target="_blank">仓库地址</a></li>
      <li><a href="https://douban-api-docs.zce.me/" target="_blank">豆瓣 API 代理</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Intro"
  }
</script>

<style scoped>
  p {
    color: #696969;
  }
</style>
