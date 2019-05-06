<template>
  <div class="todo-list">
    <h2 class="todo-list__title">{{ listTitle }}</h2>

    <ul>
      <li v-for="(task, index) in tasks" v-bind:key="index">
        <span class="bold">{{ index }}:</span>
        {{ task.name }}
        <span v-if="task.priority !== null">- priority: {{ task.priority }}</span>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "v-todo-list",
  props: {
    listTitle: {
      type: String,
      required: true
    },
    tasks: {
      type: Array,
      required: true
    }
  }
};
</script>


<style lang="scss">
.todo-list {
  background-color: white;
  padding: 15px 15px 5px 15px;
  border-radius: 5px;
  margin-top: 20px;

  @include mediaTablet {
    padding: 30px 30px 20px 30px;
  }

  &__title {
    font-weight: 700;
    font-size: 1.8rem;
    padding-bottom: 15px;
  }

  ul {
    display: inline-block;
    li {
      padding-bottom: 10px;
    }
  }
}
</style>