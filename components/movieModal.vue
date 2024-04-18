<template>
  <div class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4 overflow-y-auto">
    <div class="relative bg-gray-900 rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
      <button @click="$emit('close-modal')" class="absolute top-3 right-3 bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-3 rounded-full z-10">X</button>

      <div class="flex flex-col lg:flex-row">
        <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="Movie Poster" class="w-full lg:w-1/3 object-cover"/>
        <div class="text-white p-6 space-y-4 overflow-y-auto">
          <h2 class="text-3xl font-bold">{{ movie.original_title }}</h2>
          <p class="text-gray-400">{{ movie.overview }}</p>
          <ul class="list-disc pl-5">
            <li><strong>Release Date:</strong> {{ movie.release_date }}</li>
            <li><strong>Rating:</strong> {{ movie.vote_average }}</li>
            <li><strong>Runtime:</strong> {{ movie.runtime }} minutes</li>
            <li><strong>Genres:</strong> {{ movie.genres.map(genre => genre.name).join(', ') }}</li>
            <li><strong>Production Companies:</strong> {{ movie.production_companies.map(company => company.name).join(', ') }}</li>
            <li><strong>Production Countries:</strong> {{ movie.production_countries.map(country => country.name).join(', ') }}</li>
            <li><strong>Spoken Languages:</strong> {{ movie.spoken_languages.map(language => language.name).join(', ') }}</li>
            <li><strong>Status:</strong> {{ movie.status }}</li>
            <li><strong>Tagline:</strong> {{ movie.tagline || 'N/A' }}</li>
          </ul>
          <button v-if="trailerKey" @click="showTrailer = !showTrailer" class="mt-4 py-2 px-4 bg-red-600 hover:bg-red-700 rounded text-white font-bold">
            Watch Trailer
          </button>
          <div v-if="showTrailer" class="mt-4 relative">
            <iframe :src="`https://www.youtube.com/embed/${trailerKey}`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  movie: Object
});

const trailerKey = computed(() => {
  return props.movie.videos.results.find(video => video.type === 'Trailer')?.key || null;
});
const showTrailer = ref(false);
</script>

<style scoped>
</style>