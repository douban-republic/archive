<template>
    <div>
        <h1>{{ id }} 的存档</h1>
        <BookList />
    </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import BookList from '../book/BookList.vue';

  @Component({
    components: {
      BookList,
    },
  })
  export default class UserPage extends Vue {
    @Prop() private id!: string;
  }
</script>

<style scoped>

</style>
