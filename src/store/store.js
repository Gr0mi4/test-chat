import Vue from 'vue';
import Vuex from 'vuex'
import {conversation, currentUser} from "@/store/mockapi";

Vue.use(Vuex)

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
    sendReply ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            date: new Date(),
            id: this.messages.length + 1,
            from: {
              id: 48,
              fistName: 'Jack',
              lastName: 'Dowager',
              thumbnail: 'https://images.generated.photos/g232OgTeDpORCR483-Ko3acnrLoePZIbyMDabR64x2U/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3MDgyODAuanBn.jpg',
            },
            message: this.newMessageText
          })
        }, 0.5)
      })
        .then((message) => {
          commit('addNewMessage', message)
        })
    },

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
