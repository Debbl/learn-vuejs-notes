import {defineStore} from 'pinia'


const useUser = defineStore("user", {
  state: () => ({
    name: "debbl",
    age: 18,
    level: 99,
  })
});


export default useUser;