// src/store/index.js
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    counter: 0, // "count" を "counter" に修正
    message: 'Hello Pinia!',
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++
    },
    decrement() { // decrementアクションを追加
      this.counter--
    },
    setMessage(newMessage) {
      this.message = newMessage
    }
  }
})