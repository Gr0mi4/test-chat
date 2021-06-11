<template>
  <div class="message-wrapper" :class="{'current-user-wrapper': fromCurrentUser }">
    <img class="user-avatar" :src="avatarURL" alt="avatar">
    <p class="message" :class="{'current-user': fromCurrentUser }">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "message",

  props: {
    fromCurrentUser: {
      type: Boolean,
    },
    avatarURL: {
      type: String
    }
  },
}
</script>

<style scoped>
.message-wrapper {
  display: flex;
  align-self: flex-start;
  align-items: center;
  max-width: 60%;
  flex-direction: row;
}

.message-wrapper.current-user-wrapper {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.message {
  padding: 8px;
  border-radius: 8px;
  background-color: lightgrey;
}

.current-user {
  background-color: lightblue;
  align-self: baseline;
}

.user-avatar {
  width: 48px;
  height: 48px;
  margin: 0 12px;
  border-radius: 50%;
}
</style>
