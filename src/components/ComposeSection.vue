<template>
  <div class="compose-section">
    <input class="input" type="text" v-model="newMessageText">
    <button class="send-button" @click="sendNewMessage">Send</button>
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
      addNewMessage: "addNewMessage"
    }),

    checkPressButtonCombination(event) {
      if (event.key === 'Enter') {
        this.sendNewMessage()
      }
    },

    sendNewMessage() {
      if (this.newMessageText !== "") {
        const newMessage = {
          date: new Date(),
          id: this.messages.length + 1,
          from: this.currentUser,
          message: this.newMessageText
        }
        this.addNewMessage(newMessage)
        this.newMessageText = ""
        window.scrollTo(0, window.outerHeight);
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
}

.send-button {
  width: 60px;
  margin-left: 12px;
}
</style>
