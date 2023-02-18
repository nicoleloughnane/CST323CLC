<template>
  <div class="relative text-center">
    <!--Title of page-->
    <h2 class="text-3xl font-bold underline text-white pb-12 m-6">
      Add an Instrument to the Inventory
    </h2>
    <!--Card to encompass form-->
    <div class="container mx-auto rounded-2xl bg-white w-2/5">
      <div class="text-2xl font-semibold pt-12 mb-4">New Instrument</div>
      <!--on form submit, calls submitForm method, located in scripts-->
      <form @submit.prevent="submitForm">
        <!--Name-->
        <div class="mb-4" :class="{ invalid: !name.isValid }">
          <label for="name" class="form-label text-gray-900 text-l mr-1"
            >Name:</label
          >
          <br />
          <input
            v-model.trim="name.val"
            type="text"
            class="text-center text-xl border-black border-2 rounded h-12 w-64"
            @blur="clearValidity('name')"
          />
          <p v-if="!name.isValid" class="text-brand-red-1 text-md">
            Name must not be empty
          </p>
        </div>

        <!--Type-->
        <div class="mb-4" :class="{ invalid: !type.isValid }">
          <label for="type" class="form-label text-gray-900 text-l mr-1"
            >Type:</label
          >
          <br />
          <input
            v-model.trim="type.val"
            type="text"
            class="text-center text-xl border-black border-2 rounded h-12 w-64"
            @blur="clearValidity('type')"
          />
          <p v-if="!type.isValid" class="text-brand-red-1 text-md">
            Type must not be empty
          </p>
        </div>

        <!--Year-->
        <div class="mb-4" :class="{ invalid: !year.isValid }">
          <label for="year" class="form-label text-gray-900 text-l mr-1"
            >Year:</label
          >
          <br />
          <input
            v-model.trim="year.val"
            type="number"
            min="1900"
            max="2023"
            class="text-center text-xl border-black border-2 rounded h-12 w-64"
            @blur="clearValidity('year')"
          />
          <p v-if="!year.isValid" class="text-brand-red-1 text-md">
            Year must not be empty
          </p>
        </div>

        <!--Company-->
        <div class="mb-4" :class="{ invalid: !company.isValid }">
          <label for="company" class="form-label text-gray-900 text-l mr-1"
            >Company:</label
          >
          <br />
          <input
            v-model.trim="company.val"
            type="text"
            class="text-center text-xl border-black border-2 rounded h-12 w-64"
            @blur="clearValidity('company')"
          />
          <p v-if="!company.isValid" class="text-brand-red-1 text-md">
            Company must not be empty
          </p>
        </div>

        <!--Price-->
        <div class="mb-4" :class="{ invalid: !price.isValid }">
          <label for="price" class="form-label text-gray-900 text-l mr-1"
            >Price:</label
          >
          <br />
          <input
            v-model.trim="price.val"
            type="number"
            min="0.01"
            max="999999.00"
            step="0.01"
            class="text-center text-xl border-black border-2 rounded h-12 w-64"
            @blur="clearValidity('price')"
          />
          <p v-if="!price.isValid" class="text-brand-red-1 text-md">
            Price must be valid
          </p>
        </div>

        <!--Buttons-->
        <div class="action-buttons">
          <button-component
            link
            :to="'/inventory'"
            button-type="secondary"
            text="Go back"
            class="w-28 h-12 mt-6 mb-12 mr-2 text-xl"
          />
          <button-component
            button-type="create"
            text="Create"
            class="w-28 h-12 mt-6 mb-12 ml-2 text-xl"
          />
        </div>
      </form>
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
      //name, type, year, company, and price fields for an instrument
      name: {
        val: "",
        isValid: true,
      },
      type: {
        val: "",
        isValid: true,
      },
      year: {
        val: "",
        isValid: true,
      },
      company: {
        val: "",
        isValid: true,
      },
      price: {
        val: "",
        isValid: true,
      },
      //check if everything is valid
      formIsValid: true,
      errorMessage: null,
    };
  },
  methods: {
    //if user fixes a mistake they made, error message will not remain
    clearValidity(input) {
      this[input].isValid = true;
    },
    //validate form information for the instrument name, type, year, company, and price
    validateForm() {
      this.formIsValid = true;
      //name must be between 1 and 35 characters
      if (this.name.val.length < 1 || this.name.val.length > 35) {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      // type must be between 1 and 25 characters
      if (this.type.val.length < 1 || this.type.val.length > 25) {
        this.type.isValid = false;
        this.formIsValid = false;
      }
      // year must be valid input
      if (this.year.val < 1900 || this.year.val > 2023) {
        this.year.isValid = false;
        this.formIsValid = false;
      }
      // company must be between 1 and 25 characters
      if (this.company.val.length < 1 || this.company.val.length > 25) {
        this.company.isValid = false;
        this.formIsValid = false;
      }
      // price must be valid input
      if (this.price.val < 0 || this.price.val > 999999.0) {
        this.price.isValid = false;
        this.formIsValid = false;
      }
    },
    //create a new instrument
    async newInstrument(instrument) {
      //console.log(instrument);
      await newInstrument(instrument);
      this.$router.push("/inventory");
    },

    //user submits the creation form
    submitForm() {
      //console.log("form has been submitted ");
      this.validateForm();
      //if invalid, do a return to prevent rest of method from executing
      if (!this.formIsValid) {
        return;
      }
      //at this point the form should be valid
      const instrument = {
        name: this.name.val,
        type: this.type.val,
        year: this.year.val,
        company: this.company.val,
        price: this.price.val,
      };
      //call create method
      this.newInstrument(instrument);
    },
  },
};
</script>
