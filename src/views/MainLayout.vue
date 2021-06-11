<template>
  <div class="main-layout">
    <ConversationArea/>
    <ComposeSection/>
  </div>
</template>

<script>
import ConversationArea from "@/components/ConversationArea/ConversationArea";
import ComposeSection from "@/components/ComposeSection";

export default {
  name: "MainLayout",
  components: {ConversationArea, ComposeSection}
}
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
