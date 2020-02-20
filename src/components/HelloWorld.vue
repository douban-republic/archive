<template>
  <div class="hello">
    <p>用户列表</p>
    <UserList />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UserList from './UserList.vue';

@Component({
  components: {
    UserList,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="less">
  a {
    color: #072;
  }
  .hello {
    width: 600px;
    max-width: 100%;
    margin: 0 auto;
  }
</style>
