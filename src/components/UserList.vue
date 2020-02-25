<template>
  <div>
    <h1>已备份用户列表</h1>
    <ul>
      <li v-for="letter in firstLetters">
        <p class="letter-label">{{ letter.toUpperCase() }}</p>
        <ul>
          <li v-for="user in groupedUsers[letter]">
            <router-link :to="'/people/' + user.id">
              {{ user.name }} <small>( {{ user.id }} )</small>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import { groupBy, keys } from "lodash";
  import { UserProps } from "@/interfaces/user";

  const UserList = Vue.extend({
    props: ['users'],
    computed: {
      firstLetters() {
        return keys(groupBy(this.users, (user: UserProps) => user.id.substr(0, 1).toLowerCase()));
      },
      groupedUsers() {
        return groupBy(this.users, (user: UserProps) => user.id.substr(0, 1).toLowerCase());
      },
    },
  });

  export default UserList;

</script>

<style scoped lang="less">
  .letter-label {
    background-color: rgba(71, 191, 88, 0.24);
    line-height: 24px;
    padding-left: 8px;
    color: #072;
  }

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
