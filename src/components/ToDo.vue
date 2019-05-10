<template>
  <section class="todo">
    <header class="todo__header">
      <h1 class="todo__header__title">
        Your Vue to-do tasks
        <span class="todo__header__title__icons">📋📆</span>
      </h1>
      <form class="todo__form">
        <v-input
          inputType="text"
          placeholderText="Task name"
          v-model="taskName"
          extraClass="todo__form__field"
        ></v-input>
        <v-button text="Add task" :onButtonClick="addNewTask" extraClass="todo__form__button"></v-button>
        <p class="todo__form__error" v-show="errorMessage">{{ errorMessage }}</p>
      </form>
    </header>

    <main class="todo__main">
      <v-todo-list v-if="tasks.length" :tasks="tasks"></v-todo-list>

      <v-todo-list
        v-if="completedTasks.length"
        listTitle="Completed tasks"
        :tasks="completedTasks"
        extraClass="margin-top-30"
      ></v-todo-list>
    </main>
  </section>
</template>

<script>
import TodoList from "./TodoList.vue";
import Button from "./Button.vue";
import InputField from "./InputField.vue";
import { eventBus } from "../event-bus.js";
import { mapState, mapGetters } from "vuex";

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
      errorMessage: null
    };
  },
  methods: {
    addNewTask() {
      if (this.taskName !== null && this.taskName.length) {
        const data = {
          name: this.taskName,
          completed: false
        };
        this.$store.commit("addTask", data);

        // reset
        this.errorMessage = null;
        this.taskName = null;
        eventBus.$emit("resetField");
      } else {
        this.errorMessage = "Set a task name";
      }
    }
  },
  computed: {
    ...mapState(["tasks"]),
    ...mapGetters(["completedTasks"])
  }
};
</script>

<style lang="scss" >
.todo {
  width: 100%;
  max-width: 720px;

  @include mediaTablet {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  /**
  * Header
  */

  &__header {
    &__title {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 2.8rem;
      font-weight: 900;
      text-shadow: 2px 2px white;
      margin-bottom: 20px;
      color: $grey;

      @include mediaTablet {
        font-size: 4rem;
      }

      @include mediaDesktop {
        font-size: 5rem;
      }

      &__icons {
        margin-left: 10px;
        font-size: 2rem;

        @include mediaTablet {
          margin-left: 15px;
          font-size: 2.4rem;
        }

        @include mediaDesktop {
          margin-left: 20px;
          font-size: 3.2rem;
        }
      }
    }
  }

  /**
  * Formulario
  */

  &__form {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;

    @include mediaTablet {
      padding-right: 7px;
    }

    &__field {
      flex: 1;
      margin-right: 10px;
    }

    &__button {
      width: 100px;
    }

    &__error {
      width: 100%;
      padding-top: 20px;
      color: red;
    }
  }

  /**
  * Main
  */

  &__main {
    @include mediaTablet {
      flex: 1;
      overflow: auto;
      padding-right: 10px;

      &::-webkit-scrollbar-track {
        background-color: rgba($grey, 0.2);
        border-radius: 10px;
      }

      &::-webkit-scrollbar {
        height: 10px;
        width: 10px;
        background-color: #eef1f5;
      }

      &::-webkit-scrollbar-thumb {
        background-color: rgba($grey, 0.3);
        border-radius: 10px;
        box-shadow: inset 0 0 3px rgba($grey, 0.2);
        cursor: pointer;
      }
    }
  }
}
</style>
