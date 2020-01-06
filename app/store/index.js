import Vue from 'vue'
import Vuex from 'vuex'

import * as todoTypes from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [
      { id: 0, name: 'Go to the gym' },
      { id: 1, name: 'Walk the dog' },
      { id: 2, name: 'Vuex Store' }
    ]
  },
  mutations: {
    [todoTypes.ADD_TODO](state, todo) {
      state.todos = [...state.todos, todo]
    },
    [todoTypes.REMOVE_TODO](state, selectedTodo) {
      state.todos = state.todos.filter(todo => todo.id !== selectedTodo.id)
    }
  }
})

export default store
