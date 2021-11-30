<template>
  <main class="container">
    <h1>{{ title }}</h1>
    <div class="button-container">
      <div class="grid-item">
        <CounterPlus></CounterPlus>
      </div>
    </div>
  </main>
</template>

<script>
// components
import Counter from "../components/Counter";

// hoc
import { WithCounter } from "../utils/withCounter";
import { WithMultiplication } from "../utils/withMultiplication";

const compose =
  (...funcs) =>
  (a) =>
    funcs.reduceRight((result, func) => func(result), a);

export default {
  name: "Home",
  components: {
    CounterPlus: compose(WithMultiplication(4), WithCounter(2))(Counter),
  },
  setup() {
    return {
      title: "HOC vs Composition API",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}

.button-container {
  display: grid;
  grid-template-columns: 1fr;
}
</style>
