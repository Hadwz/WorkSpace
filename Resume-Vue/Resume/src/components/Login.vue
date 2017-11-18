<template>

	
	<section class="row animated" id="Login" @keyup.enter="ajaxRequest">

		<div class=" col-md-4 col-md-offset-4 " id="loging-form">
			<div class="img-fly">
				<img class="img-rounded" v-bind:src=imgSrc.fly alt="">
			</div>
			<h3 class="welcome">{{msg}}</h3>
			 <form class="col-md-12">
          
				<div class="input-group">
					<span class="input-group-addon" id="input-addon-1">
						<i class="fa fa-1x fa-user-o"></i>
					</span>
					<input v-model="input" type="text" class="form-control" aria-label="..." placeholder="账号" @change="controlUser">
				</div><!-- /input-group -->
				
				<div class="alert alert-warning alert-dismissible" role="alert" v-show="warningShow">
					<strong>温馨提示!</strong> {{warningMsg}}
				</div>

				<div class="input-group">
					<span class="input-group-addon" id="input-addon-2">
						<i class="fa fa-1x fa-key" aria-hidden="true"></i>
					</span>
					<input type="password" class="form-control" aria-label="..." placeholder="密码" v-model="password" @change="controlPsw">
				</div><!-- /input-group -->

			</form>

			<p>
				<button class="btn btn-info btn-lg" @click="ajaxRequest">登录</button>
			</p>

		</div>

	</section>


</template>

<script>

	
import bus from './eventBus.js';
import {inputJudge} from './Utils.js';

	export default {
		name:'Login',

		data(){
			return {
				imgSrc: {
					fly: "static/img/fly.png"
				},
				msg: '欢迎',
				warningShow: false,
				input:'',
				password:'',
				warningMsg:'',
			}
		},
		methods:{

			controlUser:function(){
				 
				if(inputJudge(this.input,false)){
					console.log('输入成功！');
					this.warningShow = false;
				}
				else{
					this.warningMsg = '账户：请输入至少2位的小写字母！';
					this.warningShow = true;
				}
			},

			controlPsw:function () {

				if(inputJudge(this.password,true)){
					this.warningShow = false;
				}
				else{
					this.warningMsg = '密码：请输入至少的2位字母或者数字';
					this.warningShow = true;
				}
			},

			ajaxRequest:function () {

				$.ajax({

					type:'POST',
					dataType: 'JSON',
					url: 'http://test.jessechiu.com/login/',
					data:{
						'userId':this.input,
						'password':this.password,
					},
					success:(data) => {
						console.log(data);
						this.loginJudge(data);
					},
					error:(status) => {console.log(status)},

				}).done(function (){console.log('请求完成')})


			},

			loginJudge:function (data) {

				if(data.errorCode === 0) {
					bus.$emit('userDefinedEvent',2);
					setTimeout(function () {
						window.location = "./static/dist/index.html";},2000);
				} else if(data.errorCode === -1) {
					bus.$emit('userDefinedEvent',3);
				}
			},


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
		margin:1rem 0;
	}
	.welcome{
		color:white;
	}
	#input-addon-1,#input-addon-2{
		background-color: #92d8ff;
		border:none;
	}
</style>

