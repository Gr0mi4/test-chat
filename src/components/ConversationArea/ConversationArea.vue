<template>
  <div class="conversation-area" ref="conversationArea">
    <Message
        v-for="message in messages"
        :key="message.id"
        :fromCurrentUser="message.from.id === currentUser.id"
        :avatarURL="message.from.thumbnail"
    >
      {{message.message}}
    </Message>
  </div>
</template>

<script>
import Message from "./message/Message";
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "ConversationArea",

  components: {Message},

  created() {
    this.requestConversation()
        .then(() => {
          this.requestCurrentUser()
        })
  },

  updated() {
    this.$refs.conversationArea.scrollTop = this.$refs.conversationArea.scrollHeight
  },

  computed: {
    ...mapGetters({
      messages: 'messages',
      currentUser: 'currentUser'
    })
  },

  methods: {
    ...mapActions({
      requestConversation: 'requestConversation',
      requestCurrentUser: 'requestCurrentUser'
    })
  }
}
</script>

<style scoped>
.conversation-area {
  width: 500px;
  max-height: 400px;
  overflow-y: scroll;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
}
</style>
