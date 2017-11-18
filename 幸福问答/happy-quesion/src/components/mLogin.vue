<template>
  <div class="login" @keyup.enter="loginClick">
    <div class="zhuce"><span ><a href="#">注册</a></span></div>
    <div class="logo">
			<div class="logo-container"><img src="/static/images/logo.png" alt=""></div>
		</div>
    <div class="input-area">
				<div class="user-area">
					<span>账号 :</span>
					<input type="text" class="user-input" v-model="userName" placeholder="" ref="userInput">
				</div>
				<div class="password-are">
					<span>密码 :</span>
					<input type="password" class="password-input" v-model="password" ref="passwordInput">
				</div>
				<info-bar :show="isInfo" :active="logingSuccess" :msg="errorMsg"></info-bar>
    </div>
    <div class="login_btn" @click="loginClick">
			<button><img src="static/images/login_btn.png"></button>
		</div>
  </div>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex';

//表单验证对象
import Validator from 'common/js/Validator';
import User from 'common/js/User';
import {getUserData} from 'api/login';
import infoBar from 'base/infoBar';

export default {

	data () {
		return{
			//用户输入的内容
			userName: '',
			password:'',
			errorMsg:'',
			isInfo:false,
			logingSuccess:false
		};
	},
	computed:{
		...mapGetters([
			'user'
		])
	},
	methods:{

		//登录按钮点击事件
		loginClick(){
			//表单验证开始
			const errorMsg = this.formTest();

			if ( errorMsg ) {
				this.errorMsg = errorMsg;
				this.isInfo= true;
				
				return false;
			}
			this.isInfo = false;
		
			this.getUserData();
		},

		//获取账户数据，get请求
		getUserData(){
			getUserData(this.userName,this.password)
				.then(res=>{
					if (res.data.length === 0) {
						this.errorMsg = '密码或帐户名错误！';
					} else {
						this.errorMsg = '登录成功！';
						this.logingSuccess = true;
						this.addUser(res.data[0]);
						window.setTimeout(() =>{
							this.$router.push('/home');
						},1000);
					}
					this.isInfo = true;
				})
				.catch(e=>console.log(e));
		},

		//创建表单校验对象，并输入规则
		formTest(){
			//表单校验对象
			const validator = new Validator();

			//表单验证对象需要DOM元素的引用
			const user = this.$refs.userInput;
			const password = this.$refs.passwordInput;

			validator.add(user,[{
				strategy: 'isNonEmpty',
				errorMsg: '用户名不能为空！'
			}]);
			validator.add(password,[{
				strategy: 'isNonEmpty',
				errorMsg: '密码不能为空！'
			},
			{
				strategy: 'minLength:6',
				errorMsg: '密码最小长度不能为6'
			}]);

			const errorMsg = validator.start();
			return errorMsg;
		},

		//添加账户，只有登录成功时才可以添加
		addUser(data){
			const user = new User(data);
			this.setUser(user);
		},
		...mapMutations([
			'setUser'
		])
	},
	components:{
		infoBar
	}

};
</script>

<style lang="less" scoped>
	.login{
		display: flex;
		flex-direction: column;
		align-items: center;
		.zhuce{
			align-self: flex-end;
			margin-right:80px;
			margin-top:45px;
			a{
				color:black;
			}
		}
		.logo{
			margin-top:35px;
			.logo-container{
				position: relative;
				border-radius: 50%;
				border:1px solid #bbb;
				overflow: hidden;
				height: 140px;
				width:140px;
			}
			& img{
				left:9.36667vw;
				top:9vw;
				height: 65%;
				width:78%;
				bottom:5px;
				right:5px;
				transform:translate(-50%,-50%);
				position: absolute;
			}
		}
		.input-area{
			height:230px;
			width:710px;
			display: flex;
			margin-top:180px;
			flex-direction: column;
			justify-content: flex-start;
			background:url('../assets/login_bg.png') no-repeat;
			background-size: 120%;
			padding:20px;
			color:#bababa;
			&>div{
				// background-color: red;
				padding:15px;
				margin-top:10px;
				margin-left:15px;
					input{
					border:none;
					width:500px;
					outline: none;
					text-indent: 10px;
				}
				.user-input{
				}
				.password-input{
				}
			}
		}
		.login_btn{
			height:65px;
			width:320px;
			margin-top:105px;
			align-self: center;
			&>button{
				height:100%;
				width:100%;
				 position: relative;
				 border:none;
				 background: none;
				 outline: none;
				img{
					width: 100%;
					height:100%;
					position: absolute;
					left: 0;
					top:0;
				}
			}
		}
	}
</style>
