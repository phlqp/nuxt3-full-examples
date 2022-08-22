<script setup lang="ts">
const { count, inc, dec } = useCount()
const randomString = useState<string>("word", () => random(9))
</script>

<template>
  <div m="y-3 flex flex-row">
    {{ randomString }}
    <button  @click="dec()">
      <div/>
    </button>
    <div>
      {{ count }}
    </div>
    <button @click="inc()">
      <div i-carbon-add />
    </button>
  </div>
</template>
