<template>
  <div class="todo-list">
    <ul>
      <li class="todo-list__item" v-for="(task, index) in tasks" :key="index">
        <h3 class="todo-list__item__title">{{ task.name }}</h3>
        <div class="todo-list__item__actions">
          <font-awesome-icon
            icon="trash-alt"
            @click="deleteTask(task)"
            class="todo-list__item__actions__icon"
          />
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "todoList",
  props: {
    listTitle: {
      type: String,
      required: true
    },
    tasks: {
      type: Array,
      required: true
    }
  },
  methods: {
    deleteTask(task) {
      this.$emit("deleteEventTask", task);
    }
  }
};
</script>


<style lang="scss">
.todo-list {
  &__item {
    display: flex;

    padding: 15px;
    margin-bottom: 12px;
    background-color: white;
    box-shadow: 3px 3px rgba($grey, 0.1);
    transition: 0.3s all ease;

    &:last-child {
      margin-bottom: 3px;
    }

    &__title {
      flex: 1;
    }

    &__actions {
      &__icon {
        font-size: 1.6rem;
        transition: 0.3s all ease;
        cursor: pointer;
        color: $lightRed;

        &:hover {
          color: $red;
        }
      }
    }
  }
}
</style>