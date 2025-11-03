import { defineStore } from 'pinia'

interface AuthState {
  isAuthenticated: boolean
  userName: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    isAuthenticated: false,
    userName: null,
  }),
  actions: {
    login(name: string) {
      this.isAuthenticated = true
      this.userName = name
    },
    logout() {
      this.isAuthenticated = false
      this.userName = null
    },
  },
})
