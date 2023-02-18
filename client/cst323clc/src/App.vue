<template>
  <div>
    <!--Load main navbar-->
    <main-nav />
    <!--Load whatever page is sent via router-->
    <router-view />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";

export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>

<style>
body {
  background-color: #1e1e1e;
}
</style>
