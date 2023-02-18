<template>
  <div>
    <!--create entry button-->
    <div class="flex justify-end">
      <Button
        text="Create"
        button-type="create"
        link
        :to="'/create'"
        class="my-3 mx-3 text-3xl fixed"
      />
    </div>
    <!--Page header-->
    <div class="flex flex-col items-center text-center h-32">
      <h1 class="text-brand-cream-1 text-4xl mt-6 mb-16 fixed">
        Instrument Inventory
      </h1>
    </div>
    <!--Check if inventory items are returned; if yes, then continue-->
    <div v-if="inventory.length > 0">
      <div
        class="grid gap-y-20 grid-cols-4 justify-center items-center relative"
      >
        <!--Create card compenent for-->
        <card
          v-for="instrument in inventory"
          :key="instrument._id"
          :instrument="instrument"
          @emit-delete="deleteInstrument($event)"
        />
      </div>
    </div>
    <!--else if no entries exist-->
    <div v-else-if="inventory.length === 0">
      <h3 class="text-brand-cream-1">
        Error occurred or No instruments were found
      </h3>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Reusable/Card.vue";
import Button from "@/components/Reusable/ButtonComponent.vue";
import getInventory from "@/api/getInventory";
import deleteInstrument from "@/api/deleteInstrument.js";

export default {
  name: "Inventory",
  components: {
    Card,
    Button,
  },
  data() {
    return {
      inventory: [],
    };
  },
  async mounted() {
    this.inventory = await getInventory();
  },
  methods: {
    async deleteInstrument(instrumentID) {
      const id = instrumentID;
      const response = await deleteInstrument(id);
      if (response) {
        this.inventory = await getInventory();
      }
    },
  },
};
</script>
