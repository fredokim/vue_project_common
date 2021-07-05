<template>
	<div class="my-3" :class="width + ` ` + height">
		<div class="clearfix">
			<slot name="first"></slot>
			<slot name="second"></slot>
			<slot name="third"></slot>
			<slot name="fourth"></slot>
		</div>
		<div class="row">
			<slot name="fifth"></slot>
			<slot name="sixth"></slot>
			<slot name="seventh"></slot>
			<slot name="eighth"></slot>
		</div>
	</div>
</template>

<script>
export default {
    props:{
        width:{
            type:String,
            default:""
        },
        height:{
            type:String,
            default:""
        },
        flot:{
            type:String,
            default: ""
        }
    }
}
</script>

<style>
</style>