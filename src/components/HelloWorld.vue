<template>
  <div class="hello">
    <h1>备份用户列表</h1>
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

