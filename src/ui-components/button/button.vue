<template>
  <button class="ui-button" :disabled="disabled" @click="handleClick">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
  export default {
    name: "UiButton",
    props: {
      disabled: Boolean,
    },
    methods: {
      handleClick(event) {
        this.$emit('click', event);
      }
    }
  }
</script>

<style scoped lang="less">
  button {
    border: none;
    background-color: #3db04d;
    color: #fff;
    line-height: 40px;
    height: 40px;
    white-space: nowrap;
    font-weight: 400;
    font-size: 12px;
    padding: 0 20px;
    cursor: pointer;
    &:hover {
      background-color: #47bf58;
    }
  }
</style>
