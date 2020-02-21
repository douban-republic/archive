<template>
    <div>
        <UserPage :id="$route.params.id"/>
        <router-link :to="'/people/' + $route.params.id + '/backup'">重新备份</router-link>
    </div>
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
