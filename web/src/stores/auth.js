import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import authService from '../services/auth'

export const useAuthStore = defineStore('auth', () => {
  const state = reactive({
    token: null,
    loggedIn: true
  })

  const loggedIn = computed(() => state.loggedIn)
  const token = computed(() => state.token)

  const login = async (user) => {
    try {
      const data = await authService.login(user)
      state.token = data.access
      state.loggedIn = true
    } catch (error) {
      state.token = null
      state.loggedIn = false
    }
  }

  const logout = () => {
    state.token = null
    state.loggedIn = false
  }

  return { loggedIn, token, login, logout }
})
