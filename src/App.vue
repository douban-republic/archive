<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link>
      |
      <router-link to="/about">帮助</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 640px;
    max-width: 100%;
    margin: 0 auto;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: #072;
    text-decoration: none;
    padding: 8px;
    &:hover {
      text-decoration: underline;
    }
  }

  #nav {
    padding: 30px;
    text-align: right;

    a {
      color: #072;
      text-decoration: none;
      &.router-link-exact-active {
        cursor: default;
      }
    }
  }
</style>
