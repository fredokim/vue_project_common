<template>
	<div class="style_select">
		<label class="style_label" v-if="label"  :class="required ? 'required' : ' ' + textColor ? textColor :''">{{ label }}</label>
		<v-autocomplete
      :class="textColor"
			class="rounded"
			v-model="newVal"
			:items="items"
			:item-value="itemValue"
			:item-text="textValue"
			@input="changeEvent"
			:multiple="multiple"
			:select="select"
			:chips="chips"
			:disabled="disabled"
			:placeholder="placeholder"
			:return-object="returnObject"
			filled
      :clearable="clearable"
      no-data-text="값이 없습니다."
		></v-autocomplete>
	</div>
</template>

<script>
export default {
  props:{
    label: {
      type:String,
      default:"",
    },
    items:{
      type:Array,
      default:()=>[],
    },
    textColor:{
      type:String,
      default:"",
    },
    disabled:{
      type:[Boolean,String],
      default:false
    },
    multiple:{
      type: [Boolean,String],
      default: false,
    },
    height:{
      type: String,
      default: ""
    },
    select:{
      type: [Boolean,String],
      default: false
    },
    chips:{
      type:[Boolean,String],
      default:false
    },
    placeholder:{
     type: String,
     default: "선택",
    },
    value: {
        type: [String,Number,Object,Array]
    },
    itemValue: {
      type: String,
      default: "value",
    },
    textValue: {
      type: String,
      default: "text",
    },
    returnObject:{
      type:Boolean,
      default:false
    },
    clearable:{
      type:[Boolean,String],
      default:true
    },
    required:{
      type:[Boolean,String],
      default:false
    }
  },
  methods:{
    changeEvent(value){
      let newVal = value
      this.$emit("changeEvent",newVal)
    }
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
}
</script>

<style scoped>

  .style_select{
    min-width: 120px !important;
  }

	.style_select >>> .v-text-field--filled > .v-input__control > .v-input__slot {
		min-height: 28px !important;
		max-height: 90px !important;
		padding-bottom: 5px !important;
    min-width: 110px !important;
    font-size: 0.8em !important; 
	}
	.style_select >>> .v-input__slot::before {
		border-style: none !important;
	}

  .style_select >>> .v-input--is-disabled > .v-input__control > .v-input__slot {
    background: none !important;
     font-size: 1.5rem !important; 
     padding: 0px 4px 0px 4px  !important;
  }

  .style_select >>> .text_white >.v-input__control >.v-input__slot > .v-select__slot >input   {
      color: white !important;
  }
  .style_select >>> .text_white >.v-input__control >.v-input__slot > .v-select__slot >input::placeholder  {
      color: white !important;
  }

  .style_select >>> .v-input--is-disabled > .v-input__control > .v-input__slot .v-input__append-inner{
    display: none !important;
  }

  .style_select
  >>> .v-input--is-disabled
  > .v-input__control
  > .v-text-field__details {
  display: none !important
}

 .style_select
  >>> .v-text-field--filled
  > .v-input__control
  > .v-text-field__details {
  display: none !important
}



</style>
