<template>
  <p v-if="Number.isInteger(counter)">{{ counter }}</p>
  <button v-if="increment" @click="increment">add</button>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "Counter",
  props: ["counter", "increment"],
};
</script>
