<template>
  <main class="container">
    <h1>{{ title }}</h1>
    <div class="button-container">
      <div class="grid-item">
        <CounterPlusOne></CounterPlusOne>
      </div>
      <div class="grid-item">
        <CounterPlusTwo></CounterPlusTwo>
      </div>
    </div>
  </main>
</template>

<script>
import { WithCounter } from "../utils/withCounter";
import CounterPlusOne from "./CounterPlusOne";
import CounterPlusTwo from "./CounterPlusTwo";

export default {
  name: "Home",
  components: {
    CounterPlusOne: WithCounter(CounterPlusOne),
    CounterPlusTwo,
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
  grid-template-columns: 1fr 1fr;
}
</style>
