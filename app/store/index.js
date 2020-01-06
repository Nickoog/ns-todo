import Vue from 'vue'
import Vuex from 'vuex'

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
    ADD_TODO(state, todo) {
      state.todos = [...state.todos, todo]
    }
  }
})

export default store
