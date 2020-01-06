import Vue from 'vue'
import Vuex from 'vuex'

import Todo from './Todo'
import Project from './modules/project'

Vue.use(Vuex)

const store = new Vuex.Store({ modules: { Todo, Project } })

export default store
