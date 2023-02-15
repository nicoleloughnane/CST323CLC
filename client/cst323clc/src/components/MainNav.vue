<template>
  <header class="w-full h-16 text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-brand-teal-1">
      <div class="flex h-full">
        <ul class="flex h-full items-center pl-5 text-brand-cream-1 text-base">
          <li>
            <router-link to="/" class="">Instrumanagement</router-link>
          </li>
          <li>
            <router-link to="/create" class="">Create</router-link>
          </li>
          <li>
            <router-link to="/inventory" class="">Inventory</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
};
</script>
