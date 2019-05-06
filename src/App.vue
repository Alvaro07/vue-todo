<template>
  <div id="app" class="app">
    <v-todo></v-todo>
  </div>
</template>

<script>
import ToDo from "./components/ToDo.vue";

export default {
  name: "app",
  components: {
    "v-todo": ToDo
  }
};
</script>

<style lang="scss">
/**
 * Base styles
 */

@import "styles/index";

/**
 * App styles
 */

.app {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  background-color: $darkGreen;

  font-family: Arial, Helvetica, sans-serif;
}
</style>
