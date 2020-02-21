<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
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

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #072;

      &.router-link-exact-active {
        color: #494949;
        text-decoration: none;
        cursor: default;
      }
    }
  }
</style>
