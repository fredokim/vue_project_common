<template>
	<div>
		<style-select
			v-if="phoneYn"
			:label="label"
			class="inline_block"
			:items="cellPhone"
			v-model="phone1"
			@changeEvent="setValue"
			:width="`width-28p`"
		></style-select>
		<style-select
			v-else
			:label="label"
			class="inline_block"
			:items="reginList"
			v-model="phone1"
			@changeEvent="setValue"
			:width="`width-28p`"
		></style-select>-
		<style-input
			class="inline_block"
			:width="`width-28p`"
			v-model="phone2"
			@input="setValue"
			:inputType="`four`"
		></style-input>-
		<style-input
			class="inline_block"
			:width="`width-28p`"
			v-model="phone3"
			@input="setValue"
			:inputType="`four`"
		></style-input>
	</div>
</template>

<script>
import StyleSelect from '@/view/common/components/StyleSelect'
import StyleInput from '@/view/common/components/StyleInput'
import phoneList from '@/view/common/dataList/phoneList'

export default {
    components:{StyleSelect, StyleInput},
    props:{
        phoneYn:{
            type:[Boolean, String],
            default:false,
        },
        label:{
            type:String,
            default:""
        },
		tel:{
			type:String,
			default:""
		}
    },
    data(){
        return {
            cellPhone:phoneList.cellPhone,
            reginList:phoneList.reginList,
            phone1:"",
            phone2:"",
            phone3:"",
        }
    },
    methods:{
        setValue() {
            this.$emit('input', this.phone1+ '-' + this.phone2+ '-' + this.phone3)
        }
    },
	mounted(){

	},
	watch:{
		tel:function(newVal, oldVal){
			let def = "";
			if(newVal !== oldVal){
				def = newVal;
			}else{
				def = oldVal
			}
			var result = def.split('-');
			this.phone1 = result[0];
			this.phone2 = result[1];
			this.phone3 = result[2];
		}
	}
}
</script>

<style>
</style>