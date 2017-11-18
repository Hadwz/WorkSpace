<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <my-header class="swiper-slide"></my-header>
        <my-info class="swiper-slide"></my-info >
        <my-skill class="swiper-slide"></my-skill>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" id="bullets"></div>
    
	</div>
</template>

<script>
import 'static/swiper.min.js';
import myHeader from './myHeader';
import myInfo from './myInfo';
import mySkill from './mySkill';

export default {
	components: {
		myHeader,
		myInfo,
		mySkill
	},
	data () {
		return {
			// note: changing this line won't causes changes
			// with hot-reload because the reloaded component
			// preserves its current state and we are modifying
			// its initial state.
			msg: 'Hello World!'
		}
	},
	mounted(){
		this.initSiwper();
	},
	methods:{
		//初始化swiper
		initSiwper(){

			const swiper = new Swiper ('.swiper-container', {
				direction : 'vertical',
				paginationClickable :true, //分页器可点击
				preventClicks : false,//默认true
				height:  window.innerHeight,
				
				//滚轮操作
				mousewheelControl : true,

				// 分页器
				pagination: '.swiper-pagination',
				paginationType : 'bullets',
				paginationBulletRender: function (swiper, index, className) {
					return '<span class="' + className + '">' +  '</span>';
				}
				
			});

		
		}
	}
}
</script>

<style scoped>
	@import '~static/swiper.min.css';
	
	.swiper-container {
    width: 100%;
	}

	.swiper-pagination{
		top:350px;
		right:20px;
	}

	.bullets{
		width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: .2;
	}

</style>

