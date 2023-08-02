<script setup>
import { ref, onMounted } from 'vue'
import genreService from '@/services/genres.js'

const genres = ref([])
const currentGenre = ref({
  name: ''
})

onMounted(async () => {
  const data = await genreService.getAllGenres()
  genres.value = data
})

async function save() {
  await genreService.saveGenre(currentGenre.value)
  const data = await genreService.getAllGenres()
  genres.value = data
  currentGenre.value = { name: '' }
}

async function deleteGenre(genre) {
  await genreService.deleteGenre(genre)
  const data = await genreService.getAllGenres()
  genres.value = data
}

function editGenre(genre) {
  currentGenre.value = { ...genre }
}
</script>

<template>
  <h2>Meus gêneros de filmes</h2>
  <hr />
  <ul>
    <li v-for="genre in genres" :key="genre.id">
      {{ genre.name }} - <button @click="deleteGenre(genre)">Excluir</button
      ><button @click="editGenre(genre)">Editar</button>
    </li>
  </ul>
  <hr />
  <div class="form">
    <input type="text" v-model="currentGenre.name" />
    <button @click="save">Salvar</button>
  </div>
</template>
