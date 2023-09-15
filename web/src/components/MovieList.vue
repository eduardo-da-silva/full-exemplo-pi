<script setup>
import { ref, onMounted } from 'vue'
import StarIcon from 'vue-material-design-icons/Star.vue'

import movieService from '@/services/movies.js'

const movies = ref([])

onMounted(async () => {
  const data = await movieService.getAllMovies()
  movies.value = data
})
</script>

<template>
  <div class="row wrap">
    <div v-for="movie in movies" :key="movie.id" class="card">
      <img :src="movie.cover.url" :alt="movie.title" />
      <div class="movie-detail">
        <h3>{{ movie.title }}</h3>
        <div class="movie-year-rating">
          <p>{{ movie.year }}</p>
          <div class="rating">
            <StarIcon v-for="n in movie.rating" :key="n" fillColor="orange" size="18" />
            <StarIcon v-for="n in 5 - movie.rating" :key="n" fillColor="gray" size="18" />
          </div>
        </div>
        <p>{{ movie.genre }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 200px;
  height: 400px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.movie-detail p {
  margin: 0;
}

.movie-year-rating {
  display: flex;
  column-gap: 2rem;
}

.movie-detail h3 {
  margin: 0;
  font-size: 1.2rem;
}
</style>
