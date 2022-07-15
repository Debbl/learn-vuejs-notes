const app = Vue.createApp({
  data() {
    return {
      books,
      isActiveIndex: 0,
    };
  },
  computed: {
    totalPrice() {
      // let totalPrice = 0;
      // Vue.toRaw(this.books).forEach((book) => {
      //   totalPrice += book.price + book.count;
      // });
      // return totalPrice;

      // let finalPrice = 0;
      // for (const book of this.books) {
      //   finalPrice += book.price * book.count;
      // }
      // return finalPrice;

      // let finalPrice = 0;
      // this.books.forEach((book) => {
      //   finalPrice += book.price * book.count;
      // });
      // return finalPrice;

      return this.books.reduce(
        (preValue, curBook) => preValue + curBook.price * curBook.count,
        0
      );
    },
  },
  methods: {
    formatPrice(value) {
      return '￥' + value;
    },
    increment(index) {
      console.log(index);
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    removeBook(index) {
      this.books.splice(index, 1);
    },
    activeIndexChange(index) {
      this.isActiveIndex = index;
    },
  },
});

app.mount('#app');
