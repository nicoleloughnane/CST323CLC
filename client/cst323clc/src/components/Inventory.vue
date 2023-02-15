<template>
  <div>
    <h1>Instrument Inventory</h1>
    <div class="grid">
      <card
        v-for="instrument in inventory"
        :key="instrument._id"
        :instrument="instrument"
      />
      <div v-if="displayModal">
        <modal
          :key="instrument in inventory"
          :instrument="instrument"
          @emit-close-modal="closeModal()"
          @emit-delete="deleteInstrument($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Reusable/Card.vue";
import Modal from "@/components/Reusable/Modal.vue";
import getInventory from "@/api/getInventory";
import deleteInstrument from "@/api/inventory/deleteInstrument.js";

export default {
  name: "Inventory",
  components: {
    Card,
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
