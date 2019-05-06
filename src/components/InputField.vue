<template>
  <input
    class="c-input"
    :type="inputType"
    :placeholder="placeholderText"
    :value="value"
    @input="updateValue()"
  >
</template>


<script>
export default {
  name: "v-input",
  props: {
    inputType: {
      type: String,
      required: true
    },
    placeholderText: {
      type: String,
      required: false
    }
  },
  methods: {
    updateValue() {
      this.$emit("input", {
        value: this.value
      });
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