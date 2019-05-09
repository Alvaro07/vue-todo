<template>
  <button class="c-button" :class="extraClass" @click.prevent="onClick">{{ text }}</button>
</template>


<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true
    },
    onButtonClick: Function,
    extraClass: String
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
  padding: 15px;
  width: 100%;
  cursor: pointer;

  background-color: $blue;
  border: none;
  border-radius: 3px;
  transition: 0.3s all ease;

  font-size: 1.6rem;
  font-weight: 500;
  color: white;

  &:hover {
    background-color: $darkBlue;
  }
}
</style>