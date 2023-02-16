<!--default card with little customization-->
<!--referenced from https://tailwind-elements.com/docs/standard/components/cards/-->
<template>
  <div class="flex justify-center">
    <div class="block rounded-2xl shadow-xl bg-white max-w-sm">
      <div class="p-6">
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
        <h5 class="text-gray-900 font-medium mb-2">
          <slot></slot>
        </h5>
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
  data() {
    return {};
  },
};
</script>
