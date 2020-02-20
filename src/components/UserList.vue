<template>
    <ul>
        <li v-for="user in users">
            <router-link :to="'/people/' + user.id">{{ user.name }}</router-link>
        </li>
    </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface UserBasicInfo {
  id: string;
  name: string;
}

@Component
export default class UserList extends Vue {
  public users: UserBasicInfo[] = [{
    id: 'ahbei',
    name: '阿北',
  }];
}
</script>

<style scoped lang="less">
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;

        li {
            a {
                display: block;
                padding: 0 12px;
                line-height: 18px;
                color: #072;
                text-decoration: none;
            }
        }
    }
</style>
