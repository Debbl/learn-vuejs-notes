import { ref, defineComponent } from "vue";

const App = defineComponent({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
  render() {
    return (
      <div>
        <h2>05_JSX语法</h2>
        <h2>当前计数 {this.counter}</h2>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>+1</button>
      </div>
    );
  },
});

export default App;
