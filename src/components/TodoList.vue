<template>
  <div class="todo-list">
    <ul>
      <v-task v-for="(task, index) in tasks" :key="index" :task="task" :index="index"></v-task>
    </ul>
  </div>
</template>


<script>
import Task from "./Task.vue";

export default {
  name: "todoList",
  components: {
    "v-task": Task
  },
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
};
</script>


<style lang="scss"></style>