<template>
  <section class="todo">
    <header class="todo__header">
      <h1 class="todo__header__title">Your Vue to-do tasks</h1>
    </header>
    <main>
      <form class="todo__form">
        <input type="text" placeholder="Task name" v-model="taskName">
        <input type="number" placeholder="Priority" v-model="taskPriority">
        <button class="todo__form__submit" type="sumbit" @click.prevent="addNewTask">Add task</button>
        <p class="todo__form__error" v-show="errorMessage">{{ errorMessage }}</p>
      </form>

      <v-todo-list v-if="tasks.length" listTitle="Todo List" :tasks="tasks"></v-todo-list>
      <v-todo-list v-if="orderAscTask.length" listTitle="Todo ascendent list" :tasks="orderAscTask"></v-todo-list>
    </main>
  </section>
</template>

<script>
import TodoList from "./TodoList.vue";

export default {
  name: "ToDo",
  components: {
    "v-todo-list": TodoList
  },
  data: function() {
    return {
      taskName: null,
      taskPriority: null,
      errorMessage: null,
      tasks: []
    };
  },
  methods: {
    addNewTask() {
      if (this.taskName !== null && this.taskName.length) {
        if (this.taskPriority === "") this.taskPriority = null;

        this.tasks.unshift({
          name: this.taskName,
          priority: this.taskPriority
        });

        this.taskName = null;
        this.taskPriority = null;
        this.errorMessage = null;
      } else {
        this.errorMessage = "Complete all fields";
      }
    }
  },
  computed: {
    orderAscTask() {
      return this.tasks.sort((a, b) => a.priority - b.priority).filter(e => e.priority !== null);
    }
  }
};
</script>

<style scoped lang="scss" >
.todo {
  /**
  * Header
  */

  .todo__header {
    &__title {
      font-size: 2.2rem;
      font-weight: 700;
      margin-bottom: 20px;
    }
  }

  /**
  * Formulario
  */

  &__form {
    background-color: white;
    padding: 15px;
    border-radius: 5px;

    @include mediaTablet {
      padding: 30px;
    }

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

    &__error {
      padding-top: 20px;
      color: red;
    }
  }
}
</style>
