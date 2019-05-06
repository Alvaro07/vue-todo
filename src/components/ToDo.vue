<template>
  <section class="todo">
    <header class="todo__header">
      <h1 class="todo__header__title">Your Vue to-do tasks</h1>
    </header>
    <main class="todo__main">
      <form>
        <input type="text" placeholder="Task name" v-model="taskName">
        <input type="number" placeholder="Priority" v-model="taskPriority">
        <button class="todo__main__submit" type="sumbit" @click.prevent="addNewTask">Add task</button>
      </form>

      <div v-show="tasks.length">
        <ul class="todo__list">
          <li
            v-for="(task, index) in tasks"
            v-bind:key="index"
          >{{ task.name }} - priority: {{ task.priority }}</li>
        </ul>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  name: "ToDo",
  data: function() {
    return {
      taskName: null,
      taskPriority: null,
      tasks: []
    };
  },
  methods: {
    addNewTask: function(e) {
      this.tasks.unshift({ name: this.taskName, priority: this.taskPriority });
      this.taskName = null;
      this.taskPriority = null;
    }
  }
};
</script>

<style scoped lang="scss" >
.todo {
  background-color: white;
  padding: 30px;
  border-radius: 5px;

  @include mediaTablet {
    padding: 50px;
  }

  .todo__header {
    &__title {
      font-size: 2.2rem;
      font-weight: 700;
      margin-bottom: 20px;
    }
  }

  .todo__main {
    input {
      display: block;
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
    }

    &__submit {
      padding: 10px;
      width: 100%;
      cursor: pointer;
    }
  }

  &__list {
    padding-top: 20px;
    margin-top: 20px;
    border-top: 1px dotted #ccc;

    li {
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: 1px dotted #ccc;
    }
  }
}
</style>
