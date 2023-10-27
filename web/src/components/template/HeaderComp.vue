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

function closeForm() {
  showForm.value = false
  user.username = ''
  user.password = ''
}

async function login() {
  try {
    await authStore.login({ ...user })
    closeForm()
  } catch (error) {
    alert('Usuário ou senha inválidos')
  }
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
        <div class="form-item">
          <input type="text" placeholder="Usuário" id="username" v-model="user.username" />
          <label for="username">Usuário</label>
        </div>
        <div class="form-item">
          <input type="password" placeholder="Senha" id="password" v-model="user.password" />
          <label for="password">Senha</label>
        </div>
      </form>
    </template>
    <template #footer>
      <div class="footerButtons">
        <button @click="closeForm">Cancelar</button>
        <button class="loginButton" @click="login">Login</button>
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

.loginButton {
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
</style>
