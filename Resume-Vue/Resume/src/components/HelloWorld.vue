<template>
	<div class="hello">
		<div class="welcome-section">
			<div class="imgFrame img-1">
				<img class="img-circle" v-bind:src=imgSrc[imgIndex] alt="" @click="goToLogin">
				<div class="talkframe" v-show="roleControl"><p>{{rolesay}}</p></div>
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
			imgSrc: [
				 "static/img/spider.jpg",
				"static/img/spider2.jpg",
				 "static/img/spider3.jpg",
				 "static/img/spider4.jpg",
			],
			imgIndex: 0,
			rolesay:'你好',
			startTalk:false,
		}
	},
	mounted(){
		bus.$on('userDefinedEvent',msg=>{
			this.imgIndex = msg;
			this.startTalk = true;
			console.log(this.startTalk)
		});
	},

	computed:{

		roleControl:function (){
			const talkframe =$('.talkframe'),
				  img = $(".img-1 img");

			if(this.imgIndex ===2){
				this.rolesay = "登录成功！下次再见哟！";
				this.startTalk = true;
				talkframe.animateCss('rotateIn');
				 img.animateCss('rollOut');
			} else if (this.imgIndex === 3){
				this.rolesay = "密码或者账号输错了哦！再好好想想";
				talkframe.animateCss('hinge');
				img.animateCss('rollIn');
				this.startTalk = true;
			} else if  (this.imgIndex === 1){ 
				this.rolesay = "开始登录哟！";
				this.startTalk = true;
				 talkframe.animateCss('jackInTheBox');
			}
			return this.startTalk;
		},

		

	},

	methods: {
		//显示登录界面
		goToLogin: function () {
			const Login = $('#Login'),
				  img = $(".img-1 img"),
				  btn = $('.login-btn'),
				  talkframe =$('.talkframe');

			Login.css('top','1rem').animateCss('bounceInUp');
			this.imgIndex = 1;
			img.animateCss('flipInY');
			btn.animateCss('fadeOutDown').fadeOut('slow');
			talkframe.animateCss('jackInTheBox');
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
	background-color: #f3fdf5;
	align-items: center;
}
.login-btn,.login-btn:hover,.login-btn:visited{
		background:none;
		border:none;
		color:#92d8ff;
		outline: none;
		align-self: flex-end;
		
}


.imgFrame{
	height:140px;
	width:140px;
	position: relative;
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

.talkframe{
	position: absolute;
	left: -83%;
	top:-54%;
	height: 120px;
	width:120px;
	color:white;
	background: url("../static/img/chat.png") no-repeat center center;
	background-size: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.talkframe p {
	width:100px;
}

</style>
