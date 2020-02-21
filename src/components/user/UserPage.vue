<template>
  <div>
    <h1>{{ id }} 的存档</h1>
    <BookList/>
    <FetchBookData :id="id"/>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  import BookList from "../book/BookList.vue";
  import FetchBookData from "./FetchBookData.vue";

  @Component({
    components: {
      BookList,
      FetchBookData,
    },
  })
  export default class UserPage extends Vue {
    @Prop() private id!: string;
  }
</script>

<style scoped>

</style>
