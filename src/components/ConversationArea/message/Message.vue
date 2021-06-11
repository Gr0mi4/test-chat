<template>
  <div class="message-wrapper" :class="{'current-user-wrapper': fromCurrentUser }">
    <img class="user-avatar" :src="avatarURL" alt="avatar">
    <div>
    <p class="message" :class="{'current-user': fromCurrentUser }">
      <slot></slot>
    </p>
    </div>
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
  align-items: flex-end;
  max-width: 60%;
  flex-direction: row;
  margin: 5px 0;
}

.message-wrapper.current-user-wrapper {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.message {
  margin: 0;
  padding: 8px;
  border-radius: 8px;
  background-color: lightgrey;
  font-size: 14px;
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
