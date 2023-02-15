<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50">
    <div
      class="relative top-40 mx-auto px-12 py-2 border w-1/3 h-60 shadow-lg rounded-md bg-white"
    >
      <!-- Modal Header and Body -->
      <div class="mt-3 text-center font-poppins">
        <div class="text-3xl font-bold text-black">Delete?</div>
        <div class="mt-2 px-7 py-3">
          <div class="text-lg font-semibold text-black">
            Are you sure you want to delete this instrument?
          </div>
        </div>
        <!-- Checkout and Cancel Buttons -->
        <div class="flex justify-center">
          <button-component
            class="mr-auto w-40"
            text="Cancel"
            type="secondary"
            @click.prevent="emitCloseModal()"
          />
          <button-component
            class="ml-auto w-40"
            text="Delete"
            type="delete"
            @click.prevent="emitDelete()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/Reusable/ButtonComponent.vue";
export default {
  name: "Modal",
  components: {
    ButtonComponent,
  },
  props: {
    instrument: {
      type: Object,
      required: true,
    },
  },
  emits: ["emit-delete", "emit-close-modal"],
  methods: {
    emitDelete() {
      this.$emit("emit-delete", this.instrument._id);
    },
    emitCloseModal() {
      this.$emit("emit-close-modal");
    },
  },
};
</script>
