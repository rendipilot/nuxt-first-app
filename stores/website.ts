import { defineStore } from 'pinia'

// Tipe untuk data dari API
interface WebsiteInfo {
  name: string
  description: string
}

// Tipe untuk state store
interface WebsiteState {
  name: string
  description: string
}


export const useWebsiteStore = defineStore('websiteStore', {
  state: (): WebsiteState => ({
    name: '',
    description: ''
  }),
  actions: {
    async fetch() {
      try {
        const infos = await $fetch<WebsiteInfo>('https://api.nuxt.com/modules/pinia')
        this.name = infos.name
        this.description = infos.description
      } catch (error) {
        console.error('Gagal mengambil data:', error)
      }
    }
  }
})