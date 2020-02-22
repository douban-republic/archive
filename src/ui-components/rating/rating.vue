<template>
  <span class="rating">
    <span v-for="n in rate">⭐️</span>
  </span>
</template>

<script>
  export default {
    name: "UiRating",
    props: ['rate']
  }
</script>

<style scoped>
  .rating {
    padding: 0 8px;
    white-space: nowrap;
  }
</style>
