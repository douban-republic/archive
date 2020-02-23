<template>
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
</template>

<script lang="ts">
  import { USER_LIST, UserBasicInfo } from "@/constant/users";
  import { groupBy, keys } from "lodash";

  export default {
    name: "UserList",
    data() {
      const groupedUsers = groupBy(USER_LIST, (user: UserBasicInfo) => user.id.substr(0, 1));
      return {
        firstLetters: keys(groupedUsers),
        groupedUsers,
      };
    }
  };

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
