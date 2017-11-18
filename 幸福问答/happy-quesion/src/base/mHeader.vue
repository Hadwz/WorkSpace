<template>
	<div class="mHeader">
		<div class="avatar">
			<img src="static/images/headimg.png" alt="用户头像">
		</div>
		<div class="header-info">info</div>
		<ul class="brazil">
			<li>x</li>
			<li>x</li>
			<li>x</li>
			<li>x</li>
			<li>x</li>
		</ul>
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="less" scoped>
	.mHeader{
		display: flex;
		height:120px;
		justify-content: space-between;
		.avatar{
			background-color: red;
			height:60px;
			width: 60px;
			position: relative;
			img{
				height: 100%;
				width:100%;
				position: absolute
			}
		
		}
		.brazil{
			position: absolute;
			left: 0;
			top:30%;
			// margin:0 0.266667rem;
			width:4.733333rem;
		}
		li{
			height:.946667rem;
		}
	}
</style>
