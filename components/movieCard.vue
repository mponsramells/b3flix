<template>
  <div className="group relative bg-gray-800 text-white rounded overflow-hidden shadow-lg cursor-pointer transition-all duration-200 transform hover:scale-105">
    <img className="w-full" :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="movie poster"/>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{{ movie.title }} {{movie.id}}</div>
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-6 py-4 flex flex-col justify-end">
      <p className="text-gray-300 text-base">{{ movie.overview }}</p>
      <button @click="showModal" className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Watch Movie</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  movie: Object
});

const emits = defineEmits(['open-modal']);

function showModal() {
  emits('open-modal', props.movie);
}
</script>

<style scoped>
</style>