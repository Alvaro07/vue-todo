<template>
  <input
    class="c-input"
    :type="inputType"
    :placeholder="placeholderText"
    v-model="content"
    @input="handleInput"
  >
</template>


<script>
export default {
  name: "v-input",
  props: {
    value: {
      type: String
    },
    inputType: {
      type: String,
      required: true
    },
    placeholderText: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      content: this.value
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", this.content);
    }
  }
};
</script>


<style lang="scss">
.c-input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}
</style>