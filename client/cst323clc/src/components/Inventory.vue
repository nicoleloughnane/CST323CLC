<template>
  <!--create entry button-->
  <div class="flex justify-end">
    <Button
      text="Create"
      button-type="create"
      link
      :to="'/create'"
      class="my-3 mx-3"
    />
  </div>
  <div class="flex flex-col items-center text-center">
    <h1 class="text-brand-cream-1 text-xl mb-16">Instrument Inventory</h1>
  </div>
  <div v-if="inventory.length > 0">
    <div class="grid space-x-1 lg:grid-cols-12 items-center">
      <card
        v-for="instrument in inventory"
        :key="instrument._id"
        :instrument="instrument"
      />
    </div>

    <div v-if="displayModal">
      <modal
        :key="instrument in inventory"
        :instrument="instrument"
        @emit-close-modal="closeModal()"
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
</template>

<script>
import Card from "@/components/Reusable/Card.vue";
import Button from "@/components/Reusable/ButtonComponent.vue";
import Modal from "@/components/Reusable/Modal.vue";
import getInventory from "@/api/getInventory";
import deleteInstrument from "@/api/deleteInstrument.js";

export default {
  name: "Inventory",
  components: {
    Card,
    Button,
    Modal,
  },
  data() {
    return {
      inventory: [],
      displayModal: false,
    };
  },
  async mounted() {
    this.inventory = await getInventory();
  },
  methods: {
    openModal() {
      this.displayModal = true;
    },
    closeModal() {
      this.displayModal = false;
    },
    async deleteInstrument(instrumentID) {
      const id = instrumentID;
      const response = await deleteInstrument(id);
      if (!response) {
        this.inventory = getInventory();
      }
    },
  },
};
</script>
