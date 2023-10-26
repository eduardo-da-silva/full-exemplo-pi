<script setup>
import { ref, reactive } from 'vue'
import { useAuthStore } from '@/stores/auth'
import Modal from '@/components/template/Modal.vue'

const authStore = useAuthStore()
const showForm = ref(false)
const user = reactive({
  username: '',
  password: ''
})

function login() {
  authStore.login({ ...user })
  showForm.value = false
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/generos">Gêneros</RouterLink>
      <RouterLink to="/filmes">Filmes</RouterLink>
      <a v-if="authStore.loggedIn" @click="authStore.logout()">Logout</a>
      <a v-else @click="showForm = true">Login</a>
    </nav>
  </header>
  <modal :visible="showForm" @close="showForm = false">
    <template #header>
      <h3>Login</h3>
    </template>
    <template #body>
      <form class="form">
        <div class="formGroup">
          <label for="username">Usuário</label>
          <input type="text" id="username" v-model="user.username" />
        </div>
        <div class="formGroup">
          <label for="password">Senha</label>
          <input type="password" id="password" v-model="user.password" />
        </div>
      </form>
    </template>
    <template #footer>
      <div class="footerButtons">
        <button @click="showForm = false">Cancelar</button>
        <button class="saveButton" @click="login">Login</button>
      </div>
    </template>
  </modal>
</template>

<style scoped>
header {
  line-height: 1.5;
  height: 5rem;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  /* display: inline-block; */
  padding: 0 1rem;
  font-size: 1.5rem;
  text-decoration: none;
  border-left: 1px solid var(--color-border);
}

nav a:hover {
  cursor: pointer;
}

nav a:first-of-type {
  border: 0;
}
</style>
