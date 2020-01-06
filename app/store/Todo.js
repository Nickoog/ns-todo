import * as http from 'tns-core-modules/http'
import * as todoTypes from './mutation-types'

const state = {
  todos: []
}

const actions = {
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
}

const mutations = {
  [todoTypes.ADD_TODO](state, todo) {
    state.todos = [...state.todos, todo]
  },
  [todoTypes.REMOVE_TODO](state, selectedTodo) {
    state.todos = state.todos.filter(todo => todo.id !== selectedTodo.id)
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
