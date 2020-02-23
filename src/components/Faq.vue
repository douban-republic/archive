<template>
  <div>
    <h2>常见问题</h2>
    <ul>
      <li v-for="f in faqs">
        <h4>{{ f.question }}</h4>
        <p>{{ f.answer }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import { faqs } from '@/constant/faqs';

  export default {
    name: "Faq",
    data() {
      return {
        faqs,
      }
    }
  }
</script>

<style scoped>

</style>
