<template>
  <div>
    <h1>{{ id }} 的存档</h1>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import BookList from "../book/BookList.vue";

  const UserPage = Vue.extend({
    props: ["id"],
    components: {
      BookList,
    },
  });

  export default UserPage;
</script>

<style scoped>

</style>
