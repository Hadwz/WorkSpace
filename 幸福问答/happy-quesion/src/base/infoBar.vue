<template>
	<div :class="[active ? 'success' : 'warning']" class="info-bar" v-show="show">{{msg}}</div>
</template>

<script>
export default {
	props:{
		msg:{
			type:String,
			default:'infoMsg'
		},
		active:{
			type:Boolean,
			default:false
		},
		show:{
			type:Boolean,
			default:false
		}
	}
}
</script>

<style lang="less" scoped>
.info-bar{
			margin-top:30px;
			height:60px;
			line-height:30px;
			text-align:center;
			padding:8px;
			border: 1px solid #d5e8fc;
			background-color: #eaf4fe;
	}
	.warning{
		border: 1px solid #ffebcc;
		background-color: #fff5e6;
	}
	.success{
		border: 1px solid #d1f2e1;
		background-color: #e8f9f0;
	}

</style>
