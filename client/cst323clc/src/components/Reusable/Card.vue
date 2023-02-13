<template>
  <div>
    <h2>Card</h2>
    <div>{{ instrument.name }}</div>
    <div>{{ instrument.type }}</div>
    <div>{{ instrument.year }}</div>
    <div>{{ instrument.company }}</div>
    <div>{{ instrument.price }}</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    instrument: {
      type: Object,
      required: true,
    },
  },
};
</script>
