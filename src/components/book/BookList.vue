<template>
    <ul>
        <li v-for="book in books">
            {{ book.title }}
        </li>
    </ul>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  interface UserBookInfo {
    title: string;
    subtitle?: string;
    pub_meta: string;
    collect_date: string;
    rate: number;
    tags: string[];
    link: string;
    subject: string;
    comment?: string;
  }

  @Component
  export default class BookList extends Vue {
    public books: UserBookInfo[] = [{
      subject: '26832406',
      title: 'Idea Makers',
      subtitle: 'Personal Perspectives on the Lives & Ideas of Some Notable People',
      pub_meta: 'Stephen Wolfram / Wolfram Media, Inc. / 2016-7-7 / USD 22.95',
      collect_date: "2016-07-22",
      rate: 5,
      tags: ['English'],
      link: 'https://book.douban.com/subject/26832406/',
      comment: 'Steven Wolfram给Mathematica、NKS有个人或精神关系的前人写的学术传记和个人唁文，或者说着迷于"简单规则，复杂现象"的松散的一群人的精神族谱。每篇都像是NKS的软文，但这是他一辈子的主线，是诚恳的。'
    }];
  }
</script>

<style scoped>

</style>
