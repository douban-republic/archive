import { DoubanBookStatus } from "@/interfaces/douban";
<template>
  <div>
    <ui-button v-if="!done && !isLoading" v-on:click="fetch" :disabled="isLoading">获取数据</ui-button>
    <div v-if="isLoading">
      <p>数据获取中……</p>
      <p>正在获取第 {{ currentPage }} 页。</p>
    </div>
    <div v-if="done">
      <h4>共获取已读数据： {{ collections.length }} 条</h4>
      <ui-button v-on:click="save">保存文件</ui-button>
      <p>文件下载后请保存在 <code>./public</code> 以及 <code>./docs</code> 各一份，请勿重命名该文件。</p>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import { fetchBookDataById } from "@/utils/douban/request";
  import { DoubanBookStatus, IDoubanUserBookItem } from "@/interfaces/douban";
  import { saveAs } from 'file-saver';
  import UiButton from '@/ui-components/button/button.vue';

  const MAX_REQUEST = 20;
  // 最大每页100
  const PAGE_SIZE = 100;

  const FetchBookData = Vue.extend({
    props: ["id"],
    components: {
      UiButton,
    },
    data() {
      return {
        isLoading: false,
        done: false,
        currentPage: 0,
        total: -1,
        collections: [] as IDoubanUserBookItem[],
      };
    },
    methods: {
      save() {
        if (this.collections.length > 0) {
          const file = new File([JSON.stringify(this.collections)],
            `user.${this.id}.book.collect.json`,
            { type: 'application/json;charset=utf-8' });
          saveAs(file);
        } else {
          alert('你没有可保存的数据！');
        }
      },
      async fetch() {
        console.log(this.id, "isLoading = ", this.isLoading);
        let isLastPage = false;
        this.isLoading = true;

        while (!isLastPage && this.currentPage < MAX_REQUEST) {
          const { start, count, total, collections } = await fetchBookDataById(this.id, this.currentPage, PAGE_SIZE, DoubanBookStatus.read);
          isLastPage = start + count >= total;
          this.currentPage++;
          if (this.total === -1) {
            this.total = total;
          }
          this.collections = this.collections.concat(collections);
        }
        this.isLoading = false;
        this.done = true;
      }
    }
  });
  export default FetchBookData;

</script>

<style scoped lang="less">

</style>
