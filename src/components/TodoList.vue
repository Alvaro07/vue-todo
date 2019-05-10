<template>
  <div class="todo-list" :class="extraClass">
    <h2 class="todo-list__title">{{ listTitle}}</h2>
    <slot></slot>
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
    },
    listTitle: String,
    extraClass: String
  }
};
</script>


<style lang="scss">
.todo-list {
  &__title {
    font-size: 1.8rem;
    font-weight: 700;
    padding-bottom: 10px;
  }

}
</style>