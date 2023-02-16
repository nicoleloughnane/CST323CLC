<template>
  <div class="relative text-center">
    <h2 class="text-3xl font-bold underline text-white pb-12 m-6">
      Add an Instrument to the Inventory
    </h2>
    <div class="container mx-auto rounded-2xl bg-white w-2/5">
      <div class="text-2xl font-semibold pt-12">New Instrument</div>
      <ul class="p-6">
        <li>
          <input
            v-model="name"
            type="text"
            placeholder="Instrument Name"
            class="text-center text-xl border-black border-2 rounded h-12 w-64"
          />
        </li>
        <li class="pt-4">
          <input
            v-model="type"
            type="text"
            placeholder="Instrument Type"
            class="text-center text-xl border-black border-2 rounded h-12 w-64"
          />
        </li>
        <li class="pt-4">
          <input
            v-model="year"
            type="number"
            placeholder="Year"
            class="text-center text-xl border-black border-2 rounded h-12 w-64"
          />
        </li>
        <li class="pt-4">
          <input
            v-model="company"
            type="text"
            placeholder="Company"
            class="text-center text-xl border-black border-2 rounded h-12 w-64"
          />
        </li>
        <li class="p-4">
          <input
            v-model="price"
            type="number"
            min="0"
            step="0.01"
            placeholder="Price"
            class="text-center text-xl border-black border-2 rounded h-12 w-64"
          />
        </li>
        <button-component
          button-type="create"
          text="Create"
          class="w-56 h-12 mt-6 mb-12 text-xl"
          @click.prevent="newInstrument"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import newInstrument from "@/api/newInstrument";
import ButtonComponent from "@/components/Reusable/ButtonComponent.vue";
export default {
  name: "Create",
  components: {
    ButtonComponent,
  },
  data() {
    return {
      name: null,
      type: null,
      year: null,
      company: null,
      price: null,
    };
  },
  methods: {
    async newInstrument() {
      const instrument = {
        name: this.name,
        type: this.type,
        year: this.year,
        company: this.company,
        price: this.price,
      };
      console.log(instrument);
      await newInstrument(instrument);
      this.$router.push("/inventory");
    },
  },
};
</script>
