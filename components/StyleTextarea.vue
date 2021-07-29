<template>
<ValidationProvider
    :name="`${label}`"
    :rules="validate"
    v-slot="{ errors }"
    class="style_input"
    :class="width"
  >
    <label class="style_label"  :class="required ? 'required' : ' '" v-if="label">{{ label }}</label>
  <v-textarea
    name=""
    :placeholder="placeholder"
    filled
    auto-grow
    value=""
    :readonly="readonly"
    :error-messages="errors"
    :disabled="disabled"
    v-model="newVal"
  ></v-textarea>
</ValidationProvider>
</template>

<script>
export default {
props: {
    label: {
      type: String,
    },
    value: {
      type: String,
    },
    width: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "입력",
    },
    height: {
      type: String,
      default: "",
    },
    validate: {
      type: String,
      defalut: "",
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: [Boolean, String],
      defalut: true,
    },
    required: {
      type: [Boolean, String],
      defalut: false,
    },
  },
  data() {
    return {
      errors: [],
    };
  },
  methods: {},
  computed: {
    newVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
}
</script>

<style scoped>

.style_input >>> .v-input__slot::before {
  border-style: none !important;
}


.style_input >>> .v-input--is-disabled > .v-input__control > .v-input__slot {
  background: none !important;
   font-size: 1.5rem !important; 
     padding: 0px 4px 0px 4px  !important;
     border: none !important;
}

.style_input
  >>> .v-input--is-disabled
  > .v-input__control
  > .v-text-field__details {
  display: none !important;
  margin-bottom: 0px !important;
}

</style>