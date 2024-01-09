import { defineStore } from "pinia";
import { Names } from "./store_name";

export const useInfoStore = defineStore(Names.TEST, {
  state: () => {
    return {
      name: '我是𝒆𝒅.',
      age: 10,
    }
  },

  getters: {
		newName():string {
      return `这是getter修饰过的名称  ${this.name}`
    }
  },

  actions: {

  }

})