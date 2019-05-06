<template>
  <button class="c-button" @click.prevent="onClick">{{ text }}</button>
</template>


<script>
export default {
  name: "v-button",
  props: {
    text: {
      type: String,
      required: true
    },
    onButtonClick: {
      type: Function,
      required: false
    }
  },
  methods: {
    onClick() {
      this.onButtonClick();
    }
  }
};
</script>


<style lang="scss">
.c-button {
  padding: 10px;
  width: 100%;
  cursor: pointer;
}
</style>