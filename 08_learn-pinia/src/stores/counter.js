import { defineStore } from "pinia";
import useUser from "./user";

const useCounter = defineStore("counter", {
  state() {
    return {
      count: 2,
      friends: [
        { id: 101, name: "foo01" },
        { id: 102, name: "foo02" },
        { id: 103, name: "foo03" },
      ],
    };
  },
  getters: {
    // 1. 基本使用
    doubleCount: (state) => state.count * 2,
    // 2. 使用其他的 getters
    doubleCountAddOne(state) {
      return this.doubleCount + 1;
    },
    // 3. 返回一个函数
    getFriendByID(state) {
      return (id) => {
        // console.log(id);
        // console.log(state.friends.find((item) => item.id === id));
        return state.friends.find((item) => item.id === id);
      };
    },
    // 4. 使用其他的 store 的信息
    showMessage(state) {
      const userStore = useUser();
      return userStore.name + " " + this.count;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    incrementNum(num) {
      this.count += num;
    },
  },
});

export default useCounter;
