<template>
  <div class="home">
    <HelloWorld msg="Hello Douban"/>
    <Intro></Intro>
    <Faq></Faq>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import Intro from '@/components/Intro.vue';
import Faq from "@/components/Faq";

export default {
  name: 'Home',
  components: {
    Faq,
    HelloWorld,
    Intro,
  }
}
</script>
