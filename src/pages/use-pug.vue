<script setup lang="ts">
const headers = useState<string>('headers', () => 'I\'m pug')
</script>

<template lang="pug">
h1 PUG template
div headers: {{ headers }}
ul
  li(v-for="i in 10")
    NuxtLink(:to="`/route/params/${i}`") {{ i }}
</template>
