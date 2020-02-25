<template>
  <div class="home">
    <UserList :users="users"></UserList>
    <Intro></Intro>
    <Faq></Faq>
  </div>
</template>

<script>
  import UserList from '@/components/UserList.vue';
  import Intro from '@/components/Intro.vue';
  import Faq from "@/components/Faq";
  import { FETCH_USER_LIST } from "@/store/actions.type";
  import { mapGetters } from "vuex";

  export default {
    name: 'Home',
    components: {
      Faq,
      UserList,
      Intro,
    },
    mounted() {
      if (!this.users || this.users.length === 0) {
        this.$store.dispatch(FETCH_USER_LIST)
      }
    },
    computed: {
      ...mapGetters(['users']),
    }
  }
</script>
