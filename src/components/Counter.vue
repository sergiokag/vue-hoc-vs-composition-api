<template>
  <h2>HOC</h2>
  <p v-if="counter">{{ counter }}</p>
  <p v-if="multiply && counter">{{ multiply * counter }}</p>
  <button @click="increment">add</button>
</template>

<script>
export default {
  inheritAttrs: false, // wtf????
  name: "Counter",
  props: ["counter", "multiply", "increment"],
};
</script>
