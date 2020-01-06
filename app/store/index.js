import Vue from 'vue'
import Vuex from 'vuex'

import Todo from './Todo'
import Project from './Project'

Vue.use(Vuex)

const store = new Vuex.Store({ modules: { Todo, Project } })

export default store
