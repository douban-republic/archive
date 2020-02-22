<template>
  <ul>
    <li v-for="user in users">
      <router-link :to="'/people/' + user.id">
        {{ user.name }} <small>( {{ user.id }} )</small>
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { USER_LIST, UserBasicInfo } from "@/constant/users";

  @Component
  export default class UserList extends Vue {
    public users: UserBasicInfo[] = USER_LIST;
  }
</script>

<style scoped lang="less">
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 8px;
      a {
        display: inline-block;
        padding: 0 12px;
        line-height: 24px;
        color: #072;
        text-decoration: none;
        &:hover {
          background-color: #072;
          color: #fff;
        }
      }
    }
  }
</style>
