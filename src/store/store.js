import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    addTask: (state, data) => state.tasks.unshift(data),
    removeTask: (state, task) => {
      state.tasks = state.tasks.filter(e => e !== task);
    },
    completeTask: (state, task) => {
      state.tasks.filter(e => e === task)[0].completed = !state.tasks.filter(e => e === task)[0].completed;
    }
  },
  getters: {
    completedTasks: state => state.tasks.filter(e => e.completed)
  }
});
