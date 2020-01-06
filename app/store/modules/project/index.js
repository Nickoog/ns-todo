import * as http from 'tns-core-modules/http'
import { getProjects, createProject } from '../../../api/Project'
import {
  ADD_PROJECT,
  GET_PROJECTS,
  REMOVE_PROJECT,
  SET_PROJECTS
} from './mutation-types'

const state = {
  projects: []
}

const actions = {
  [ADD_PROJECT]({ commit }, projectName) {
    createProject(projectName).then(projects => {
      commit(ADD_PROJECT, projects)
    })
  },
  [GET_PROJECTS]({ commit }) {
    getProjects()
      .then(projects => commit(SET_PROJECTS, projects))
      .catch(err => console.error(err))
  },
  [REMOVE_PROJECT]({ commit }, projectId) {}
}

const mutations = {
  [SET_PROJECTS](state, projects) {
    state.projects = projects
  },
  [ADD_PROJECT](state, project) {
    state.projects = [...state.projects, project]
  },
  [REMOVE_PROJECT](state, projectId) {
    state.projects.filter(project => project.id !== projectId)
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
