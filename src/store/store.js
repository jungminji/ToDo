import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    task: [],
    complete: []
  },
  mutations: {
    ADD_TASK (state, payload) {
      state.task.push(payload)
    },
    REMOVE_TASK (state, payload) {
    },
    ADD_COMPLETE (state, playload) {
      state.task.push(payload)
    },
    REMOVE_COMPLETE (state, payload) {
    }
  },
  actions: {
    finishTask (context, payload) {
      content.commit('REMOVE_TASK')
    },
    undoComplete (context, payload) {
    },
    removeTodo (context, payload) {
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
