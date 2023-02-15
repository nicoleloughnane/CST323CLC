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
  <div class="grid space-x-1 lg:grid-cols-12">
    <div v-if="inventory.length > 0">
      <div
        v-for="instrument in inventory"
        :key="instrument._id"
        :instrument="instrument"
      >
        <card class="m-4">
          <div class="m-6">
            <h3 class="text-xl">{{ instrument.name }}</h3>
            <h3 class="text-base">{{ instrument.type }}</h3>
            <h4 class="text-base">{{ instrument.year }}</h4>
            <h4 class="text-sm">{{ instrument.company }}</h4>
            <h4 class="text-sm">{{ instrument.price }}</h4>
          </div>
          <!--actions the user can take: view, edit, or delete-->
          <div class="actions">
            <Button
              link
              :to="$route.path + '/view/' + instrument._id"
              text="View"
              button-type="primary"
              class="m-2"
            />
            <Button text="Delete" button-type="delete" class="m-2" />
          </div>
        </card>
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
