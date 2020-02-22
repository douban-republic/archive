<template>
  <ul class="book-list">
    <li v-for="collection in collections" class="collection-item">
      <div>
        <a target="_blank" :href="collection.book.alt"><span class="title">{{ collection.book.title }}</span></a>
        <span v-if="collection.rating">
          <ui-rating :rate="parseInt(collection.rating.value, 10)"></ui-rating>
        </span>
        <span class="meta">/ {{ collection.updated }}</span>
      </div>
      <div v-if="collection.comment" class="comment">{{ collection.comment }}</div>
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import UiRating from '@/ui-components/rating/rating.vue';

  const BookList = Vue.extend({
    props: ["collections"],
    components: {
      UiRating,
    }
  });
  export default BookList;
</script>

<style scoped lang="less">
  .book-list {
    text-align: left;
    li {
      margin-bottom: 12px;
    }
  }
  .collection-item {
    a {
      text-decoration: none;
      color: #3377aa;
      &:hover {
        background-color: #3377aa;
        color: #fff;
      }
    }
    .title {
      font-size: 14px;
    }
    .meta {
      font-size: 12px;
      color: #696969;
    }
    .comment {
      font-size: 11px;
      color: #696969;
      font-style: italic;
      border: 1px solid #ccc;
      width: 80%;
      margin: 8px 0 0 24px;
      padding: 4px;
      border-radius: 4px;
    }
  }
</style>
