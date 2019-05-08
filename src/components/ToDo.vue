<template>
  <section class="todo">
    <header class="todo__header">
      <h1 class="todo__header__title">Your Vue to-do tasks</h1>
    </header>

    <main>
      <form class="todo__form">
        <v-input inputType="text" placeholderText="Task name" v-model="taskName"></v-input>
        <v-input inputType="number" placeholderText="Priority" v-model="taskPriority"></v-input>
        <v-button text="Add task" :onButtonClick="addNewTask"></v-button>

        <p class="todo__form__error" v-show="errorMessage">{{ errorMessage }}</p>
      </form>

      <v-todo-list v-if="tasks.length" listTitle="Tasks list" :tasks="tasks"></v-todo-list>
      <v-todo-list
        v-if="orderAscTasks.length"
        listTitle="Prioritaries tasks"
        :tasks="orderAscTasks"
      ></v-todo-list>
      <v-todo-list v-if="completedTasks.length" listTitle="Completed tasks" :tasks="completedTasks"></v-todo-list>
    </main>
  </section>
</template>

<script>
import TodoList from "./TodoList.vue";
import Button from "./Button.vue";
import InputField from "./InputField.vue";
import { eventBus } from "../event-bus.js";

export default {
  name: "ToDo",
  components: {
    "v-todo-list": TodoList,
    "v-button": Button,
    "v-input": InputField
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
          priority: this.taskPriority,
          completed: false
        });

        this.errorMessage = null;
        this.taskName = null;
        this.taskPriority = null;

        eventBus.$emit("resetField");
      } else {
        this.errorMessage = "Complete all fields";
      }
    }
  },
  computed: {
    orderAscTasks() {
      return this.tasks.sort((a, b) => a.priority - b.priority).filter(e => e.priority !== null);
    },
    completedTasks() {
      return this.tasks.filter(e => e.completed === true);
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

    &__error {
      padding-top: 20px;
      color: red;
    }
  }
}
</style>
