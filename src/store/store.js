import Vue from 'vue';
import Vuex from 'vuex'
import {conversation, currentUser} from "@/store/mockapi";

Vue.use(Vuex)

console.log(currentUser)
const store = new Vuex.Store({

  state: {
    currentUser: [],
    messages: []
  },

  getters: {
    messages: (state) => state.messages,
    currentUser: (state) => state.currentUser
  },

  mutations: {
    saveMessages(state, payload) {
      state.messages = payload
    },

    saveCurrentUser(state, payload) {
      state.currentUser = payload
    },

    addNewMessage (state, payload) {
      state.messages.push(payload)
    }
  },
  actions: {
    requestConversation ({ commit }) {
      return new Promise((resolve, reject) => {
        let messages = JSON.parse(conversation)
        if (messages) {
          resolve(messages)
        } else {
          reject()
        }
      })
        .then((messages) => {
          commit('saveMessages', messages)
        })
    },

    requestCurrentUser ({commit}) {
      return new Promise((resolve, reject) => {
        let user = JSON.parse(currentUser)
        if (user) {
          resolve(user)
        } else {
          reject()
        }
      })
        .then((user) => {
          commit('saveCurrentUser', user)
        })
    }
  }
})

export default store
