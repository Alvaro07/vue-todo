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

      <div v-show="tasks.length">
        <ul class="todo__list">
          <li v-for="(task, index) in tasks" v-bind:key="index">
            {{ task.name }}
            <span v-if="task.priority !== null">- priority: {{ task.priority }}</span>
          </li>
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
      errorMessage: null,
      tasks: []
    };
  },
  methods: {
    addNewTask: function(e) {
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
  }
};
</script>

<style scoped lang="scss" >
.todo {
  background-color: white;
  padding: 15px;
  border-radius: 5px;

  @include mediaTablet {
    padding: 30px;
  }

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
