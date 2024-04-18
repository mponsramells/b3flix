<template>
  <h1>Movies  {{ params.id }}</h1>
  query parameter = {{ query }}
</template>

<script setup>
const { params, query } = useRoute()
</script>

<style scoped>

</style>