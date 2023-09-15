<script setup>
import PlusBoxIcon from 'vue-material-design-icons/PlusBox.vue'

import MovieList from '@/components/MovieList.vue'
</script>

<template>
  <div class="row">
    <h2>Filmes</h2>
    <button class="addButton">
      <PlusBoxIcon />
      Adicionar
    </button>
  </div>
  <MovieList />
</template>

<style scoped>
.addButton {
  height: 2rem;
  align-self: center;
  margin-left: 3rem;
  background-color: #080;
  color: white;
  justify-content: space-around;
}
</style>
