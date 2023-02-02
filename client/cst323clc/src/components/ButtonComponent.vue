<template>
<button :class="buttonClass">
    {{ text }}
</button>
</template>

<script>
export default {
    name: "ButtonComponent",
    props:  {
        text: {
            type: String,
            required: true
        },
        buttonType: {
            type: String,
            required: false,
            default: "primary"
        }
    },   
    computed: {
        buttonClass() {
            return{
                /*teal is primary button type, cream is secondary used for when button is not being hovered over, or to go back a page
                other button types are for creation and deletion
                utilizes the "type" prop that is passed in from the parent component  */
                /* ex: prop is primary which means { primary: true} */
                [this.buttonType]: true
            } 
        }
    }
}
</script>

<style scoped>
/*below are all styles for the buttons utilizing tailwind and brand colors outlined in tailwind.config.js */
    button {
        @apply rounded-lg px-4 py-2 font-medium;
    }
    .primary {
        @apply text-brand-cream-1 bg-brand-teal-1 hover:shadow-teal;
    }
    .secondary {
        @apply bg-brand-cream-1 text-brand-darkgray-1 hover:bg-brand-teal-1 hover:text-brand-cream-1;
    }
    .delete {
        @apply bg-brand-red-1 text-brand-cream-1 hover:shadow-cream;
    }
    .create {
        @apply bg-brand-green-1 text-brand-cream-1 hover:shadow-cream;
    }
</style>