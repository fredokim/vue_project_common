<template>
  <ValidationProvider
    :name="`${label}`"
    :rules="validate"
    v-slot="{ errors }"
    class="style_input"
    :class="width"
  >
    <label class="style_label" :class="required ? 'required' : ' ' + textColor ? textColor :''" v-if="label">{{ label }} </label>
    <v-text-field
      class="rounded"
      :type="textType"
      :placeholder="placeholder"
      v-model="newVal"
      :error-messages="errors"
      :readonly="readonly"
      :disabled="disabled"
      :single-line="singleLine"
      v-mask="mask"
      filled
    ></v-text-field>
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
    textColor:{
      type: String,
      default:"",
    },
    placeholder: {
      type: String,
      default: "입력",
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
    singleLine: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: [Boolean, String],
      defalut: true,
    },
    inputType: {
      type: String,
      default: "",
    },
    textType: {
      type: String,
      default: "text",
    },
    required: {
      type: [Boolean, String],
      default: false,
    },
  },
  data() {
    return {
      errors: [],
      mask: "",
    };
  },
  methods: {
  },
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
  created() {
    if (this.inputType == "number") {
      this.mask = "###,###,####,###,###,###,###";
    } else if (this.inputType == "phone") {
      this.mask = "###-####-####";
    } else if (this.inputType == "four") {
      this.mask = "####";
    }
  },
};
</script>

<style scoped>
  .style_input{
    min-width: 120px !important;
  }

.style_input >>> .v-input__slot::before {
  border-style: none !important;
}

.style_input >>> .v-text-field--filled > .v-input__control > .v-input__slot {
  min-height: 28px !important;
  max-height: 38px !important;
  min-width: 110px;
  padding-bottom: 5px !important;
}

.style_input >>> .v-input--is-disabled > .v-input__control > .v-input__slot {
  background: none !important;
   font-size: 1.5rem !important; 
     padding: 0px 4px 0px 4px  !important;
}

  .style_input >>> .text_white >.v-input__control >.v-input__slot > input   {
      color: white !important;
  }
  .style_select >>> .text_white >.v-input__control >.v-input__slot >input::placeholder  {
      color: white !important;
  }


.style_input
  >>> .v-input--is-disabled
  > .v-input__control
  > .v-text-field__details {
  display: none !important;
  margin-bottom: 0px !important;
}
</style>
