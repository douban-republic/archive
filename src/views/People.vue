<template>
    <UserPage :id="$route.params.id"/>
</template>

<script>
  import UserPage from "@/components/user/UserPage";
  export default {
    name: "People",
    components: {UserPage}
  }
</script>

<style scoped>

</style>
