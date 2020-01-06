import Vue from 'vue'
import Vuex from 'vuex'
import * as http from 'tns-core-modules/http'

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
  actions: {
    [todoTypes.ADD_TODO]({ commit }, todo) {
      http
        .request({
          url: 'http://10.0.2.2:3000/todos',
          method: 'POST',
          content: JSON.stringify(todo),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          const todo = res.content.toJSON()
          commit(todoTypes.ADD_TODO, todo)
        })
        .catch(err => console.error(err))
    }
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
