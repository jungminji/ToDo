import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Copied from Cremonth. You will have to modify for todolist

export default new Vuex.Store({
  state: {
    amount: '',
    month: 0,
    rate: 0
  },
  mutations: {
    SET_AMOUNT (state, payload) {
      state.amount = payload
    },
    SET_MONTH (state, payload) {
      state.month = payload
    },
    SET_RATE (state, payload) {
      state.rate = payload
    }
  },
  actions: {
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
