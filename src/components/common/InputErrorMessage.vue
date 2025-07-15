<script setup lang="ts">
const { message = "" } = defineProps({
  message: {
    type: String,
  },
});
</script>

<template>
  <span v-if="message">{{ message }}</span>
</template>
