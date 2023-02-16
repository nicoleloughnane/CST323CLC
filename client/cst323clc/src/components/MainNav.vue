<template>
  <header class="w-full h-16 text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-brand-teal-1">
      <div class="flex h-full">
        <ul
          class="flex h-full items-center pl-5 text-brand-cream-1 text-base justify-between"
        >
          <li>
            <router-link to="/" class="text-2xl px-12"
              >Instrumanagement</router-link
            >
          </li>
          <li>
            <router-link to="/create" class="text-2xl px-12"
              >Create</router-link
            >
          </li>
          <li>
            <router-link to="/inventory" class="text-2xl px-12"
              >Inventory</router-link
            >
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
