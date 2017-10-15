<template>
	<div id="app" class="container-fluid">
		<hello-world/>
		<login/>
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Login from './components/Login';

export default {
	name: 'app',
	components: {
		HelloWorld,
		Login,
	},
	
	
	
}
</script>

<style>
body{
	height:100%;
}
html{
	height:100%;
	font-size:16px;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height:100%;
	padding:0;
	background-color: #f3fdf5;
}
</style>
