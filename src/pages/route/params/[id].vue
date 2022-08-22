<template>
  <div>
    {{ id }} >>> Next: <NuxtLink :to="`/route/params/${id + 1}`">{{ id + 1 }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const id = ref<number>(route.params.id as unknown as number)
</script>
