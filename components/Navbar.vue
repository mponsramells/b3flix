<script setup lang="ts">
const menu = ref([
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Movies', url: '/movies' },
])
</script>
<template>
  <nav class="bg-black text-white p-4">
    <ul class="flex justify-between items-center">
      <li>
        <NuxtLink to="/" class="text-2xl font-bold">MyMovies</NuxtLink>
      </li>
      <li>
        <ul class="flex space-x-4">
          <li v-for="{name, url} in menu" :key="name">
            <NuxtLink :to="url" class="hover:text-red-500">{{ name }}</NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.router-link-exact-active {
  @apply text-red-500;
}
</style>