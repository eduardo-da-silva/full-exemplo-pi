<script setup>
import { ref, onMounted } from 'vue'
import PencilIcon from 'vue-material-design-icons/Pencil.vue'
import ContentSaveIcon from 'vue-material-design-icons/ContentSave.vue'
import DeleteIcon from 'vue-material-design-icons/Delete.vue'

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
  <h2>Gêneros de filmes</h2>
  <div class="row center">
    <div class="form">
      <div class="row">
        <input type="text" v-model="currentGenre.name" @keyup.enter="save" />
        <button @click="save">
          <ContentSaveIcon />
          Salvar
        </button>
      </div>
    </div>
  </div>
  <div class="row center">
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th style="width: 10%">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="genre in genres" :key="genre.id">
          <td>{{ genre.name }}</td>
          <td>
            <DeleteIcon @click="deleteGenre(genre)" />
            <PencilIcon @click="editGenre(genre)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.form {
  margin-bottom: 1rem;
}

table {
  width: 50%;
  border-collapse: collapse;
  border: 1px solid #eee;
}

table tr {
  border-bottom: 1px solid #eee;
}

table td {
  padding: 0 0.5rem;
}

table td:last-child {
  text-align: center;
}

table tr:nth-child(even) {
  background-color: #eee;
}

thead {
  background-color: #dde;
  height: 2rem;
  font: 1em sans-serif;
}
</style>
