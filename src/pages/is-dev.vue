<script setup lang="ts">
const isDev = ref<boolean>(process.dev)
</script>

<template>
  <div>Is dev: {{ isDev ? 'Yes' : 'No'}}</div>
</template>
