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
@import "styles/index";

.app {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100%;
  background-color: $darkGreen;
  padding: 30px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
