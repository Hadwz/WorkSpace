<template>
	<div class="hello">
		<div class="welcome-section">
			<div class="imgFrame img-1">
				<img class="img-circle" v-bind:src=imgSrc.spider1 alt="" @click="goToLogin">
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
			imgSrc: {
				spider1: "static/img/spider.jpg",
				spider2: "static/img/spider2.jpg",
			},
		}
	},

	methods: {
		//显示登录界面
		goToLogin: function () {
			const Login = $('#Login'),
				  img = $(".img-1 img"),
				  btn = $('.login-btn');

			Login.css('top','1rem').animateCss('bounceInUp');
			img.attr("src",this.imgSrc.spider2).animateCss('flipInY');
			btn.animateCss('fadeOutDown').fadeOut('slow');
		},

	}, //methods end
	
};  //default end
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
	background-color: #c9e6e2;
	align-items: center;
}
.login-btn,.login-btn:hover,.login-btn:visited{
		background:none;
		border:none;
		color:#f3fdf5;
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

.welcome-section{
	position: relative;
	margin-top:20rem;
}

.login-btn{
	margin-top:2rem;
	position:absolute;
	left:3rem;
	top:8rem;
}

</style>
