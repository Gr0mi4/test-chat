<template>
  <div class="compose-section">
    <input placeholder="Type your message here" class="input" type="text" v-model="newMessageText">
    <img src="../assets/save-icon.svg" class="send-button" @click="sendNewMessage"/>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: "ComposeSection",

  data() {
    return {
      newMessageText: "",
    }
  },

  created() {
    document.addEventListener('keydown', this.checkPressButtonCombination)
  },

  computed: {
    ...mapGetters({
      messages: 'messages',
      currentUser: 'currentUser'
    })
  },

  methods: {
    ...mapMutations({
      addNewMessage: 'addNewMessage'
    }),

    checkPressButtonCombination(event) {
      if (event.key === 'Enter') {
        this.sendNewMessage()
      }
    },

    sendNewMessage() {
      if (this.newMessageText !== '') {
        const newMessage = {
          date: new Date(),
          id: this.messages.length + 1,
          from: this.currentUser,
          message: this.newMessageText
        }
        this.addNewMessage(newMessage)
        this.newMessageText = ''
      }
    }
  }
}
</script>

<style scoped>
.compose-section {
  display: flex;
  width: 500px;
}

.input {
  width: 100%;
  max-width: 428px;
}

.send-button {
  width: 60px;
  height: 35px;
  margin-left: 12px;
  cursor: pointer;
}

.send-button:active {
  transform: scale(0.95);
}
</style>
