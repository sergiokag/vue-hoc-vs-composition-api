<template>
  <h2>HOC</h2>
  <p v-if="Number.isInteger(counter)">{{ counter }}</p>
  <p v-if="Number.isInteger(multiply * counter)">{{ multiply * counter }}</p>
  <button v-if="increment" @click="increment">add</button>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "Counter",
  props: ["counter", "multiply", "increment"],
};
</script>
