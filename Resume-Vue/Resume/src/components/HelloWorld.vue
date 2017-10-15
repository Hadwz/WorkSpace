<template>
	<div class="hello">
		<div class="welcome-section">
			<div class="imgFrame img-1">
				<img class="img-circle" src="/static/img/spider.jpg" alt="">
			</div>
			<button type="button" class="login-btn animated infinite bounce">
				<i class="fa fa-5x fa-angle-double-down" aria-hidden="true"  @click="goToLogin"></i>
			</button>
		</div>
	</div>
</template>

<script>

import bus from './eventBus.js';

export default {
	name: 'HelloWorld',
	data () {
		return {
			msg: 'Hello World',
		}
	},
	methods: {

		goToLogin: function () {
			$('#Login').css('top','1rem').animateCss('bounceInUp');
			$(".img-1 img").attr("src","/static/img/spider2.jpg");
			$('.login-btn').fadeOut('slow');
		},

	},
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
	font-weight: 800;
	font-size:3rem;
	
}
.hello{
    height: 100%;
    width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #f3fdf5;
	align-items: center;

	
}
.login-btn,.login-btn:hover,.login-btn:visited{
		background:none;
		border:none;
		color:black;
		outline: none;
		align-self: flex-end;
}


.imgFrame{
	height:140px;
	width:140px;
}


.welcome-section .imgFrame img{
	max-width: 100%;
	max-height: 100%;
}

.login-btn{
	margin-top:2rem;
}

</style>
