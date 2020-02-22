<template>
  <div class="home">
    <HelloWorld msg="Hello Douban"/>
    <Intro></Intro>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import Intro from '@/components/Intro.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Intro,
  }
}
</script>
