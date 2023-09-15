<script setup>
import { ref, reactive, onMounted } from 'vue'
import PlusBoxIcon from 'vue-material-design-icons/PlusBox.vue'
import MovieList from '@/components/MovieList.vue'
import Modal from '@/components/template/Modal.vue'

import genreService from '@/services/genres.js'
import imageService from '@/services/images.js'
import movieService from '@/services/movies.js'

const genres = ref([])
const coverUrl = ref('')
const file = ref(null)
const currentMovie = reactive({
  title: '',
  year: '',
  genre: '',
  rating: 0
})

function onFileChange(e) {
  file.value = e.target.files[0]
  coverUrl.value = URL.createObjectURL(file.value)
}

async function save() {
  const image = await imageService.uploadImage(file.value)
  currentMovie.cover_attachment_key = image.attachment_key
  await movieService.saveMovie(currentMovie)
  Object.assign(currentMovie, {
    id: '',
    title: '',
    year: '',
    genre: '',
    rating: 0,
    cover_attachment_key: ''
  })
  showForm.value = false
}

onMounted(async () => {
  const data = await genreService.getAllGenres()
  genres.value = data
})

const showForm = ref(false)
</script>

<template>
  <div class="row">
    <h2>Filmes</h2>
    <button class="addButton" @click="showForm = true">
      <PlusBoxIcon />
      Adicionar
    </button>
  </div>
  <MovieList />
  <modal :visible="showForm" @close="showForm = false">
    <template #header>
      <h3>Cadastro de filme</h3>
    </template>
    <template #body>
      <form class="form">
        <div class="row">
          <div id="preview">
            <input type="file" @change="onFileChange" />
            <div class="cover">
              <img v-if="coverUrl" :src="coverUrl" />
            </div>
          </div>
        </div>
        <div class="form-item">
          <input type="text" placeholder="Título" id="title" v-model="currentMovie.title" />
          <label for="title">Título</label>
        </div>
        <div class="form-item">
          <input
            type="text"
            placeholder="Ano de lançamento"
            id="year"
            v-model="currentMovie.year"
          />
          <label for="year">Ano de lançamento</label>
        </div>
        <div class="form-item">
          <select v-model="currentMovie.genre">
            <option disabled value="">Selecione um gênero</option>
            <option v-for="genre in genres" :key="genre.id" :value="genre.id">
              {{ genre.name }}
            </option>
          </select>
          <label for="year">Gênero</label>
        </div>
        <div class="form-item">
          <select v-model="currentMovie.rating">
            <option disabled value="">Rating</option>
            <option v-for="n in [0, 1, 2, 3, 4, 5]" :key="n" :value="n">
              {{ n }}
            </option>
          </select>
          <label for="year">Rating</label>
        </div>
      </form>
    </template>
    <template #footer>
      <div class="footerButtons">
        <button @click="showForm = false">Cancelar</button>
        <button class="saveButton" @click="save">Salvar</button>
      </div>
    </template>
  </modal>
</template>

<style scoped>
.addButton,
.saveButton {
  height: 2rem;
  align-self: center;
  margin-left: 3rem;
  background-color: #080;
  color: white;
  justify-content: space-around;
}

.footerButtons {
  display: flex;
}

.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  row-gap: 0.5rem;
}

#preview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#preview .cover {
  width: 200px;
  height: 270px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
}

#preview img {
  width: 200px;
  height: 270px;
}
</style>
