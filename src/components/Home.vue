<template>
  <main class="container">
    <h1>{{ title }}</h1>
    <div class="button-container">
      <div class="grid-item">
        <CounterHOC></CounterHOC>
      </div>
    </div>
  </main>
</template>

<script>
import Counter from "../components/Counter";
import { WithCounter } from "../models/counter/withCounter";
import { compose } from "../utils/compose";

export default {
  name: "Home",
  components: {
    CounterHOC: compose(WithCounter(2))(Counter),
  },
  setup() {
    return {
      title: "Vue app using HOC pattern",
    };
  },
};
</script>

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
