import employes from '@/data/employes'


import { acceptHMRUpdate, defineStore } from 'pinia'

export const useEmployesStore = defineStore('employes', {
  state: () => {
    return {
      data: null,
      weekDays: employes.weekDays,
    }
  },
  actions: {
    fetchData() {
      setTimeout(() => {
        this.data = !this.data ? employes : this.data;
      }, 100)
    },
    getLocal() {
      let data = localStorage.getItem('employes')
      if(data) {
        this.data = JSON.parse(data)
      }
    }
  },
  getters: {
    getEmployes(state) {
      return state.data
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEmployesStore, import.meta.hot))
}