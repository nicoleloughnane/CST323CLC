<template>
  <div>
    <!--create entry button-->
    <div class="flex justify-end">
      <Button
        text="Create"
        button-type="create"
        link
        :to="'/create'"
        class="my-3 mx-3 text-3xl"
      />
    </div>
    <!--Page header-->
    <div class="flex flex-col items-center text-center h-32">
      <h1 class="text-brand-cream-1 text-4xl mt-6 mb-16">
        Instrument Inventory
      </h1>
    </div>
    <!--Check if inventory items are returned; if yes, then continue-->
    <div v-if="inventory.length > 0">
      <!-- <div
        class="grid gap-y-20 grid-cols-4 justify-center items-center relative"
      > -->
      <!--Create card compenent for-->
      <div class="px-5 py-5">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 mr-7">
          <card
            v-for="instrument in inventory"
            :key="instrument._id"
            :instrument="instrument"
            @emit-delete="deleteInstrument($event)"
          />
        </div>
      </div>
      <!-- </div> -->
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
import * as Sentry from "@sentry/vue";

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
    //console.log("inventory: " + JSON.stringify(this.inventory));
    //similar to a log
    Sentry.addBreadcrumb({
      category: "inventory",
      message: "got inventory" + JSON.stringify(this.inventory),
      level: "info",
    });
    if (this.inventory.length === 0) {
      Sentry.addBreadcrumb({
        category: "inventory",
        message:
          "there are no items in the inventory or an error has occurred" +
          JSON.stringify(this.inventory),
        level: "info",
      });
    }
  },
  methods: {
    async deleteInstrument(instrumentID) {
      const id = instrumentID;
      const response = await deleteInstrument(id);
      if (response) {
        this.inventory = await getInventory();
      }
      Sentry.addBreadcrumb({
        category: "delete instrument",
        message:
          "instrument has been deleted that had an ID of: " + instrumentID,
        level: "info",
      });
    },
    throwError() {
      Sentry.addBreadcrumb({
        category: "error",
        message: "error button clicked",
        level: "error",
      });
      throw new Error("Sentry Error");
    },
  },
};
</script>
