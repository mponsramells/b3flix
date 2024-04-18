<template>
  <div>
    <h1 class="text-center">Movies</h1>
    <div class="mb-4 flex justify-center">
      <button v-for="item in menu" :key="item" @click="updateMoviesList(item)" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4">{{ item }}</button>
    </div>
    <div class="grid grid-cols-4 gap-4 p-4">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" @open-modal="handleOpenModal" />
    </div>
    <MovieModal v-if="showModal" :movie="selectedMovie" @close-modal="handleCloseModal" />
  </div>
</template>

<script setup>
const movies = ref([]);
const path = ref('');
const menu = ['upcoming', 'popular', 'top_rated', 'now_playing'];
const showModal = ref(false);
const selectedMovie = ref(null);

const { getMovies, getMovieById, getMovieAndVideosById } = useTmdb();

async function updateMoviesList(item) {
  path.value = item;
  movies.value = await getMovies(path.value);
}

async function handleOpenModal(movie) {
  selectedMovie.value = await getMovieAndVideosById(movie.id);
  showModal.value = true;
}
function handleCloseModal() {
  showModal.value = false;
}

onMounted(async () => {
  movies.value = await getMovies('upcoming');
});
</script>

<style scoped>
</style>
