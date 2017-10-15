<template>

	
	<section class="row animated" id="Login" v-bind="ctrlShow">

		<div class="jumbotron">
			<h1>Hello, world!</h1>
			<p>{{ctrlShow.show}}</p>
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
				msg:'from Login',
				ctrlShow:{
					show:'',
				},
			}
		},
		mounted(){
			bus.$on('userDefinedEvent',msg=>{
				this.ctrlShow.show = msg;
			});
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
</style>

