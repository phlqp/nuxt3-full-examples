<script setup lang="ts">
const headers = useState("headers", () => useRequestHeaders())
const selectedHeaders = useState("selectedHeaders", () => useRequestHeaders([
  'CF_IPCOUNTRY', // Get Cloudflare's CF_IPCOUNTRY header in Nuxt 3
  'referer'
]))
</script>

<template>
  <div>
    headers: {{ headers }}
    selectedHeaders: {{ selectedHeaders }}
  </div>
</template>
