<template>

	
	<section class="row animated" id="Login" >

		<div class=" col-md-4 col-md-offset-4 " id="loging-form">
			<div class="img-fly">
				<img class="img-rounded" v-bind:src=imgSrc.fly alt="">
			</div>
			<h3>{{msg}}</h3>
			 <form class="col-md-8">
          
			<div class="input-group">
				<span class="input-group-addon">
					<input type="checkbox" aria-label="...">
				</span>
				<input type="text" class="form-control" aria-label="...">
			</div><!-- /input-group -->
			<div class="input-group">
				<span class="input-group-addon">
					<i class="fa fa-1x fa-user-o"></i>
				</span>
				<input type="text" class="form-control" aria-label="...">
			</div><!-- /input-group -->

			</form>

			<p>
				<a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
			</p>

		</div>

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
	}
	
	.user-section,.password-section{
		margin:2rem auto;
	}

	#loging-form {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding:2rem 2rem;
		background-color: lightblue;
		box-shadow: 10px 15px 20px rgba(50,50,50,0.4);
		background: url("../static/img/timg.jpg") no-repeat;
		
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

