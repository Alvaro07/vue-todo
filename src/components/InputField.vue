<template>
  <input
    class="c-input"
    :class="extraClass"
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
  props: ["value", "inputType", "placeholderText", "extraClass"],
  methods: {
    getData(data) {
      this.$emit("input", data);
    }
  },
  updated() {
    eventBus.$on("resetField", () => {
      this.$refs.field.value = null;
    });
  }
};
</script>


<style lang="scss">
.c-input {
  display: block;
  width: 100%;

  padding: 15px;
  border-radius: 2px;
  border: 1px solid rgba($grey, 0.3);

  font-size: 1.4rem;
  color: $grey;
}
</style>