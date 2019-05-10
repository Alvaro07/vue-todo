<template>
  <button
    class="c-button"
    :class="[smallClass, extraClass, greenClass]"
    @click.prevent="onClick"
  >{{ text }}</button>
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
    extraClass: String,
    small: Boolean,
    green: Boolean
  },
  methods: {
    onClick() {
      this.onButtonClick();
    }
  },
  computed: {
    smallClass: function() {
      return {
        "c-button--small": this.small
      };
    },
    greenClass: function() {
      return {
        "c-button--green": this.green
      };
    }
  }
};
</script>


<style lang="scss">
.c-button {
  padding: 15px;
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

  &--small {
    padding: 5px 10px;
    font-size: 1.4rem;
  }

  &--green {
    background-color: $green;
    &:hover {
      background-color: $darkGreen;
    }
  }
}
</style>