<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
});
const m = defineModel();
</script>

<template>
  <input name="{{name}}" v-model="m" type="email" />
</template>
