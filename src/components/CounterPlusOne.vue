<template>
  <h2>HOC</h2>
  <p>{{ counter }}</p>
  <button @click="increment">add</button>
</template>

<script>
export default {
  props: {
    counter: Number,
    increment: Function,
  },
};
</script>