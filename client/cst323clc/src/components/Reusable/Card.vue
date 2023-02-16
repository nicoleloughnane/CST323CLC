<!--default card with little customization-->
<!--referenced from https://tailwind-elements.com/docs/standard/components/cards/-->
<template>
  <div class="flex justify-center">
    <div class="block rounded-2xl shadow-xl bg-white w-4/5">
      <div class="p-6 text-center">
        <div class="m-4">
          <h2 class="text-3xl font-bold underline pb-6">
            {{ instrument.name }}
          </h2>
          <h3 class="text-xl">{{ instrument.type }}</h3>
          <h4 class="text-xl">{{ instrument.year }}</h4>
          <h4 class="text-xl italic">{{ instrument.company }}</h4>
          <h4 class="text-xl">${{ instrument.price }}</h4>
        </div>
        <!--actions the user can take: view, edit, or delete-->
        <div class="actions">
          <Button
            text="Delete"
            button-type="delete"
            class="m-2 w-64 text-xl"
            @click.prevent="emitDelete"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Reusable/ButtonComponent.vue";

export default {
  name: "Card",
  components: {
    Button,
  },
  props: {
    instrument: {
      type: Object,
      required: true,
    },
  },
  emits: ["emit-delete"],
  data() {
    return {};
  },
  methods: {
    emitDelete() {
      console.log("emitting delete " + "id: " + this.instrument._id);
      this.$emit("emit-delete", this.instrument._id);
    },
  },
};
</script>
