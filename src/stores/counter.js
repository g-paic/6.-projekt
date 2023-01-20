import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "counter",
  state: () => ({
    num1: 0,
    num2: 0,
    res: 0
  }),
  getters: {
    first: (state) => state.num1,
    second: (state) => state.num2,
    result: (state) => state.res
  },
  actions: {
    add() {
      this.res = this.num1 + this.num2;
    },
    subtract() {
      this.res = this.num1 - this.num2;
    },
    incrementFirst() {
      this.num1++;
    },
    decrementFirst() {
      this.num1--;
    },
    incrementSecond() {
      this.num2++;
    },
    decrementSecond() {
      this.num2--;
    }
  },
});
