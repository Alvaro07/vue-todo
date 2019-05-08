<template>
  <input
    class="c-input"
    :type="inputType"
    :placeholder="placeholderText"
    :value="value"
    @input="getData($event.target.value)"
    ref="field"
  >
</template>


<script>
import { eventBus } from "../event-bus.js";

export default {
  name: "inputField",
  props: ["value", "inputType", "placeholderText"],
  methods: {
    getData(data) {
      this.$emit("input", data);
    }
  },
  created() {
    eventBus.$on("resetField", () => {
      this.$refs.field.value = "";
    });
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