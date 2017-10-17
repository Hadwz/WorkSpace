<template>

	
	<section class="row animated" id="Login" >

		<ul class="list-group">
			<li class="list-group-item"><a href="static/AdPlayer.html"><i class="fa fa-2x fa-play" aria-hidden="true"></i></a></li>
			<li class="list-group-item"><a href="static/Weather.html"><i class="fa fa-2x fa-sun-o" aria-hidden="true"></i></a></li>
			<li class="list-group-item"><a href="static/index.html"><i class="fa fa-2x fa-book" aria-hidden="true"></i></a></li>
			<li class="list-group-item"><a href="static/Draw.html"><i class="fa fa-2x fa-gamepad" aria-hidden="true"></i></a></li>
			<li class="list-group-item last"><a href="static/allscreen.html"><i class="fa fa-2x fa-id-card-o" aria-hidden="true"></i></a></li>
		</ul>

	</section>


</template>

<script>

	
import bus from './eventBus.js';

	export default {
		name:'Login',

		data(){
			return {
				imgSrc: {
					fly: "static/img/fly.png"
				},
				msg: 'Welcome',
			}
		},
		
	};
</script>

<style>
	#Login{
		margin:0rem 0;
		position: absolute;
		top:-999rem;
		left:20rem;
	}
	
	.user-section,.password-section{
		margin:2rem auto;
	}

	.list-group {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding:2rem 2rem;
		box-shadow: 10px 15px 20px rgba(50,50,50,0.4);
		background: none;
		
	}

	.list-group li{
		height: 6rem;
		width:6rem;
		background: none;
		border:none;
		position: relative;
		padding:0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.list-group li:after{
		content:"";
		display: inline-block;
		height: 3rem;
		width:2px;
		background-color:grey;
		position: absolute;
		left: 50%;
		top:78%;
	}

	.list-group a{
		border-radius: 50%;
		height: 3.2rem;
		width:3.2rem;
		display: flex;
		background-color: white;
		justify-content: center;
		align-items: center;
		margin:0;
	}

	.list-group a i {
		margin:1rem;
		display: inline-block;
	}

	.list-group li.last:after{
		display: none;
	}

	

	.img-fly{
		width:60px;
		height:60px;
	}
	.img-fly img{
		max-width:100%;
		max-height:100%;
	}

	.input-group{
		margin:2rem 0;
	}
	h3{
		color:white;
	}
</style>

