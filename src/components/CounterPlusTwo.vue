<template>
  <h2>Composition API</h2>
  <p>{{ counter }}</p>
  <button @click="increment">add</button>
</template>

<script>
import { useCounter } from "../utils/useCounter";
export default {
  setup() {
    // const { counter, increment } = useCounter(1);
    return {
      ...useCounter(1),
    };
  },
};
</script>