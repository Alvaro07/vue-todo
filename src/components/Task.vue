<template>
  <li class="task" ref="refItemList">
    <h3 class="task__title" :for="'task-' + index">{{ task.name }}</h3>
    <div class="task__actions">
      <!-- <v-button text="Complete" extraClass="margin-right-10" :onButtonClick="completeTask" small></v-button> -->
      <font-awesome-icon icon="trash-alt" @click="deleteTask(task)" class="task__actions__icon"/>
    </div>
  </li>
</template>


<script>
import { eventBus } from "../event-bus.js";
import Button from "./Button.vue";

export default {
  name: "task",
  components: {
    'v-button': Button
  },
  props: {
    task: {
      type: Object,
      required: true
    },
    index: Number
  },
  methods: {
    deleteTask(task) {
      eventBus.$emit("deleteEventTask", task);
    },
    completeTask() {
      eventBus.$emit("completeEventTask", this.task);
    }
  }
};
</script>


<style lang="scss">
.task {
  display: flex;
  align-items: center;

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
    cursor: pointer;
  }

  &__actions {
    padding-left: 15px;

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
</style>