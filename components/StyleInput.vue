<template>
	<ValidationProvider
		:name="`${label}`"
		:rules="validate"
		v-slot="{errors}"
		class="style_input"
		:class="width"
	>
		<label class="style_label">{{label}}</label>
		<v-text-field
			class="rounded"
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
        type: String
      },
      required: {
        type: Boolean,
        default: false
      },
      width:{
        type: String,
        default:"",
      },
      placeholder:{
        type:String,
        default:"입력"
      },
      height:{
      type: String,
      default: ""
      },
      validate:{
        type:String,
        defalut: "",
      },
      readonly: {
        type:Boolean,
        default:false,
      },
      disabled: {
        type:Boolean,
        default:false,
      },
      singleLine:{
        type:Boolean,
        default:false,
      },
      clearable:{
         type:[Boolean,String],
        defalut:true,
      },
      inputType:{
        type:String,
        default:""
      }
    },
  data() {
    return{
      errors :[],
      mask:""
    }
  },
    methods: {
    },
    computed:{
      newVal: {
          get() {
            return this.value;
          },
          set(val) {
            this.$emit('input', val);
          }
        }
    },
    created(){
      if(this.inputType =='number'){
        this.mask ="###,###,####,###,###,###,###"
      }else if(this.inputType =='phone'){
        this.mask="###-####-####"
      } else if(this.inputType =='four'){
        this.mask ="####"
      }
    },
};
</script>

<style scoped>
	.style_input >>> .v-input__slot::before {
		border-style: none !important;
	}

	.style_input >>> .v-text-field--filled > .v-input__control > .v-input__slot {
		min-height: 28px !important;
		max-height: 38px !important;
		padding-bottom: 5px !important;
	}
</style>
