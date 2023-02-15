<!--this is a button component that can perform an action upon being clicked and/or take the user to a new page
it also will look different based on what buttonType is passed in as a prop. default is primary-->
<template>
  <!--switch between a button and a router link-->
  <button v-if="!link" :class="buttonClass">
    {{ text }}
  </button>
  <router-link v-else :to="to" :class="buttonClass">
    {{ text }}
  </router-link>
</template>

<script>
export default {
  props: {
    //style of button
    buttonType: {
      type: String,
      required: false,
      default: "primary",
    },
    //if the button is a link
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    //where the button will link the user to.. default is '/'
    to: {
      type: String,
      required: false,
      default: "/",
    },
    //text the button contains
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.buttonType]: true,
      };
    },
  },
};
</script>

<style scoped>
/* these didn't seem to work due to formatter: hover: shadow-cream hover: shadow-teal */
/*below are all styles for the buttons utilizing tailwind and brand colors outlined in tailwind.config.js */
button {
  @apply rounded-lg px-4 py-2 font-medium;
}

.primary {
  @apply text-brand-cream-1 bg-brand-teal-1 rounded-lg px-4 py-2 font-medium;
}

.secondary {
  @apply bg-white outline outline-gray-700 outline-1 text-gray-700 rounded-lg px-4 py-2;
}

.delete {
  @apply bg-brand-red-1 text-brand-cream-1 rounded-lg px-4 py-2 font-medium;
}

.create {
  @apply bg-brand-green-1 text-white rounded-lg px-4 py-2 font-medium;
}
</style>
