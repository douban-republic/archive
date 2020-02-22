<template>
  <div>
    <h1>
      {{ user.name }}
      <small>(ID: {{ user.id }})</small>
    </h1>
    <div v-if="userCollections.books.length">
      <h2>Ta 标记过的书 <small>({{ userCollections.books.length }})</small></h2>
      <BookList :collections="userCollections.books"/>
    </div>
    <div v-else class="nothing">
      <p>这个人什么都没有留下</p>
    </div>
    <div class="footer" v-if="!isProd">
      <router-link :to="'/people/' + $route.params.id + '/backup'"> &gt; 重新备份</router-link>
    </div>
  </div>
</template>

<script>
  import BookList from '@/components/book/BookList.vue';
  import store from "@/store";
  import { FETCH_USER_BOOK_COLLECTIONS } from "@/store/actions.type";
  import { USER_LIST } from "@/constant/users";

  export default {
    name: 'People',
    data() {
      return {
        isProd: process.env.NODE_ENV === 'production'
      };
    },
    components: {
      BookList,
    },
    beforeRouteEnter(to, from, next) {
      if (!store.getters.getCollectionsByUserId(to.params.id)) {
        store.dispatch(FETCH_USER_BOOK_COLLECTIONS, to.params.id).then(next);
      } else {
        next();
      }
    },
    computed: {
      user() {
        return USER_LIST.find((it) => it.id === this.$route.params.id);
      },
      userCollections() {
        return store.getters.getCollectionsByUserId(this.$route.params.id)
      },
    }
  };
</script>

<style scoped lang="less">
  h1 {
    font-size: 26px;
    color: #494949;
    font-weight: 900;
    small {
      font-weight: 300;
      font-size: 14px;
      color: #999;
    }
  }
  h2 {
    font-size: 18px;
    small {
      font-size: 14px;
      font-weight: 300;
    }
  }
  a {
    color: #072;
    text-decoration: none;
    &:hover {
      color: #fff;
      background-color: #072;
    }
  }
  .nothing {
    margin: 48px 0;
    color: #999;
  }
  .footer {
    text-align: right;
  }
</style>
