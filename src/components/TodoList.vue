<template>
  <div class="todo-list">
    <h2 class="todo-list__title">{{ listTitle }}</h2>

    <ul class="todo__list">
      <li v-for="(task, index) in tasks" v-bind:key="index">
        <span class="bold">{{ index }}</span>
        {{ task.name }}
        <span v-if="task.priority !== null">- priority: {{ task.priority }}</span>
      </li>
    </ul>

    
  </div>

  <!-- <div v-show="tasks.length" class="todo__list-block">
    <h2 class="todo__list-block__title">Todo List</h2>
    <ul class="todo__list">
      <li v-for="(task, index) in tasks" v-bind:key="index">
        <span class="bold">{{ index }}</span>
        {{ task.name }}
        <span v-if="task.priority !== null">- priority: {{ task.priority }}</span>
      </li>
    </ul>
  </div> -->
</template>


<script>
export default {
  name: "v-todo-list",
  props: ["listTitle", "tasks"]
};
</script>


<style lang="scss">
.todo-list {
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;

  @include mediaTablet {
    padding: 30px;
  }

  &__title {
    font-weight: 700;
    font-size: 1.8rem;
    padding-bottom: 15px;
  }

  li {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px dotted #ccc;
  }
}
</style>