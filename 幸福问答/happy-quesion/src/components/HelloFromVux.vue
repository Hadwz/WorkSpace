<template>
  <div>
		<back></back>
		<div class="main">
    	<router-view></router-view>
		</div>
  </div>
</template>

<script>
import { Group, Cell } from 'vux';
import mHeader from 'base/mHeader';
import Back from 'base/back'; 


export default {
	components: {
		Group,
		Cell,
		mHeader,
		Back
	},
	data () {
		return {
			// note: changing this line won't causes changes
			// with hot-reload because the reloaded component
			// preserves its current state and we are modifying
			// its initial state.
			msg: 'Hello World!'
		};
	},
	created(){
		this.$router.push('/expert');
	},

};
</script>

<style lang="less" scoped>
	
	.vux-demo {
		text-align: center;
	}
	.logo {
		width: 1.333333rem /* 100/75 */;
		height: 3rem;
	}
	.main{
		position: relative;
		top:50px;
	}

</style>


