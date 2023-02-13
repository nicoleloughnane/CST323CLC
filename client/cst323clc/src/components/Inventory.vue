<template>
  <div>
    <h1>Instrument Inventory</h1>
    <div class="grid">
      <card
        v-for="instrument in inventory"
        :key="instrument._id"
        :instrument="instrument"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Inventory",
};
</script>
