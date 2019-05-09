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

  min-height: 100%;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  padding: 30px;

  @include mediaTablet {
    height: 100%;
  }
}
</style>
