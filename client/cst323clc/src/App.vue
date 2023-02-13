<template>
  <div>
    <main-nav />
    <br />
    <br />
    <h3 class="mt-8 text-2xl text-center text-brand-cream-1">
      Instrumanagement
    </h3>
    <button-component text="Test" type="primary" />
  </div>
</template>

<script>
import MainNav from "../src/components/MainNav.vue";
import ButtonComponent from "./components/ButtonComponent.vue";
import Card from "./components/Card.vue";
import getInventory from "@/api/getInventory.js";

export default {
  name: "App",
  components: {
    MainNav,
    ButtonComponent,
    Card,
  },
  data() {
    return {
      inventory: [],
    };
  },
  async created() {
    this.inventory = await getInventory();
  },
};
</script>

<style>
body {
  background-color: #1e1e1e;
}
</style>
