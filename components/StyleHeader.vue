<template>
	<div class="underline pb-2 width-100p">
		<v-btn class="ml-2" icon v-if="back" @click="backMethod">
			<v-icon>arrow_back</v-icon>이전
		</v-btn>
		<h3 class="ml-5 mt-2 inline_block">{{title}}</h3>
		<v-btn
			class="pull-right linle_block mx-1"
			color="error"
			v-if="deleteYn"
			:disabled="deletedis"
			@click="deleteMethod"
		>삭제</v-btn>
        <v-btn
			class="pull-right linle_block mx-1"
			v-if="cancelYn"
			@click="cancelMethod"
		>취소</v-btn>
		<v-btn
			class="pull-right linle_block mx-1"
			color="primary"
			v-if="saveYn"
			:disabled="savedis"
			@click="saveMethod"
		>저장</v-btn>
		<v-btn
			class="pull-right linle_block mx-1"
			color="primary"
			v-if="updateYn"
			@click="updateMethod"
			:disabled="updatedis"
		>수정</v-btn>
		<v-btn
			class="pull-right linle_block mx-1"
			color="primary"
			v-if="createYn"
			@click="createMethod"
			:disabled="createdis"
		>{{createName}}등록</v-btn>
	</div>
</template>

<script>
export default {
    props:{
        back:{
            type:Boolean,
            default:false,
        },
        title:{
            type:String,
            default:""
        },
        createName:{
            type:String,
            default:""
        },
        createYn:{
            type:Boolean,
            default:false,
        },
        deleteYn :{
            type:Boolean,
            default:false,
        },
        updateYn :{
            type:Boolean,
            default:false,
        },
        saveYn :{
            type:Boolean,
            default:false,
        },
        cancelYn:{
            type:Boolean,
            default:false,
        },
        createdis:{
            type:Boolean,
            default:false,
        },
        updatedis:{
            type:Boolean,
            default:false,
        },
        deletedis:{
            type:Boolean,
            default:false,
        },
        savedis:{
            type:Boolean,
            default:false,
        },
        param:{}
    },
    methods: {
        createMethod(){
            this.$emit('create')
        },
        deleteMethod(){
            this.$emit('delete')
        },
        updateMethod(){
            this.$emit('update')
        },
        saveMethod(){
            this.$emit('save')
        },
        backMethod(){
            this.$emit('back')
        },
        cancelMethod(){
            this.$emit('cancel')
        }
    },
}
</script>

<style scoped>
	.underline {
		border-bottom: 1px solid #cccccc;
	}
</style>