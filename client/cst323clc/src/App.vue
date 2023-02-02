<template>
  <main-nav/>
  <br/>
  <br/>
  <h3 class="mt-8 text-2xl text-center text-brand-cream-1">Instrumanagement</h3>
  <button-component text="Test" type="primary"/>
</template>

<script>
import MainNav from '../src/components/MainNav.vue';
import ButtonComponent from './components/ButtonComponent.vue';

export default {
  name: 'App',
  components: {
    MainNav,
    ButtonComponent,
  }
}
</script>

<style>
    body {
        background-color: #1E1E1E;
    }

</style>
