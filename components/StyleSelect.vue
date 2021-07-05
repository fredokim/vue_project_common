<template>
	<div :class="width + ' ' " class="style_select">
		<label class="style_label">{{label}}</label>
		<v-autocomplete
			class="rounded"
			v-model="newVal"
			:items="items"
			item-value="value"
			item-text="text"
			@input="changeEvent"
			:multiple="multiple"
			:select="select"
			:chips="chips"
			:placeholder="placeholder"
			filled
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
      default:[],
    },
    width:{
      type:String,
      default:"",
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
        type: String
    },
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
	.style_select >>> .v-text-field--filled > .v-input__control > .v-input__slot {
		min-height: 28px !important;
		max-height: 38px !important;
		padding-bottom: 5px !important;
	}
	.style_select >>> .v-input__slot::before {
		border-style: none !important;
	}
</style>
