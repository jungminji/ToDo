import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    task: [],
    completed: []
  },
  mutations: {
    TRUNCATE_LIST (state, payload = []) {
      state.task = payload
      state.completed = payload
    },
    ADD_TASK (state, payload) {
      state.task.push(payload)
    },
    ADD_COMPLETED (state, payload) {
      state.completed.push(payload)
    }
  },
  actions: {
    truncateList (context) {
      context.commit('TRUNCATE_LIST')
    },
    addTask (context, payload) {
      context.commit('ADD_TASK', payload)
    },
    addCompleted (context, payload) {
      context.commit('ADD_COMPLETED', payload)
    },

    // Remove below later
    updateAmount (context, payload) {
      context.commit('SET_AMOUNT', parseInt(payload.amount, 10))
    },
    updateMonth (context, payload) {
      context.commit('SET_MONTH', parseInt(payload.month, 10))
    },
    updateRate (context, payload) {
      context.commit('SET_RATE', parseInt(payload.rate, 10))
    }
  },
  getters: {
    getTask (state) {
      return state.task
    },
    getCompleted (state) {
      return state.completed
    },
    // Remove below later
    getAmount (state) {
      return state.amount
    },
    getMonth (state) {
      return state.month
    },
    getRate (state) {
      return state.rate
    },
    getTotalInterest (state) {
      return Math.round(state.amount * (state.month + 1) * (state.rate / 100) / 24)
    },
    getAmountPerMonth (state) {
      return Math.round(state.amount / state.month)
    }
  }
})
