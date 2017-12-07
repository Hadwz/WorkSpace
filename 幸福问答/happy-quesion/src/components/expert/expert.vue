<template>
  	<div id="head">
			<div class="tops">
				<div class="demo-avatar">
					<router-link to="/gmvip">
						<Avatar icon="person" size="large" class="girl_avatar" :src="user.photo"/>
					</router-link>
				</div> 
				<div class="open_service">
					<div class ="question">
						<img  src="static/images/question_mark.png" alt="">
					</div>
					<div class="state">
							<img  :src="payState" alt="付费状态" @click="stateClick">
					</div>
				</div>
			</div>
      <div class="three">         
          <h4 class="Happiness">幸福</h4>
              <img class="logo" src="static/images/logo.png" alt="">
          <h2 class="answer">问答</h2>
      </div>
      <div class="enter_question">
       <input type="text" id="input"  placeholder="请输入您的问题" v-model="userInput">
         <Button id="btn" @click="postQuestion">提问</Button>
         <span class="Free-question">(您有一次免费提问机会)</span>
				 <info-bar class="infoBar" :show="infoActive" :msg="infoMsg"></info-bar>
      </div>
		
			<my-question ref="myQues"></my-question>
			<button class="slide-btn"  @click="showPop" :class="[show ? 'slide-btn-enter' : '']">
				幸福专家
				<img id="arrow" :src="arr">
			</button>
			<div class="popu0">
				<popup v-model="show" :show-mask="false">
					<happy-expert></happy-expert>
				</popup>
   	 	</div>
  	</div>
</template> 

<script>
	import HappyExpert from 'components/expert/happyExpert.vue';
	import { mapGetters,mapMutations } from 'vuex';
	import {postQuestion,getQuestionData} from 'api/questions';
	import infoBar from 'base/infoBar';
	import Back from 'base/back';
	import myQuestion from 'base/myQuestion';
	import {Popup,XSwitch} from 'vux';

export default {

		components:{
			HappyExpert,
			infoBar,
			Back,
			myQuestion,
			XSwitch,
			Popup,
		},

		data () {
			return {
				userInput:'',
				infoActive:false,
				infoMsg:'',
				slideShow:false,
				show:false
			}
		},

		computed:{
			...mapGetters([
				'user',
				'userState',
				'userInfo'
			]),

			payState(){
				return this.user.isVip ? 'static/images/tag_y.png' : 'static/images/kaitong_btn.png'
			},

			arr() {
			if (!this.show) {
				return 'static/images/arrow2.jpg';
			} else {
				return 'static/images/arrow.png';
			}
		}
		},

		methods:{
			//提交问题
			postQuestion () {
				if (!this.user.userId) {
					this.infoMsg='您还未登录'
					this.infoActive = true; 
					return;
				}
				if (this.userInput === '') {
					this.infoMsg='发送内容不能为空'
					this.infoActive = true;
					return;

				} else if (this.user.freeTime === 0 ) {
					this.infoMsg='您的免费次数已用完'
					this.infoActive = true;
					return;

				} else {

					postQuestion({
						userId:this.user.userId,
						question:this.userInput,
					}).then(res => {
						console.log(res.data);
						if (res.data) {
							this.infoMsg = '发送成功';
							this.infoActive = true;
							this.setFreeTime(0);
							this.$refs.myQues.getQuestion();
							window.setTimeout(()=>{
								this.infoActive = false;
							},3000);
						}
					})
						.catch(e=> {
							this.infoMsg='发送失败，请稍后重试试'
							this.infoActive = true;
							window.setTimeout(()=>{
							this.infoActive = false;
							},3000);
						});
				}
			},

			//获取问题数据，点击提问后触发子组件对应方法
			getQuestion() {
				this.$refs.myQues.getQuestion();
			},

			//付费状态，点击事件
			stateClick(){
				//如果是vip就停止，不然就跳转到购买套餐界面
				if (!this.user.userId) {
					this.infoMsg = '您还没有登录呢！';
					this.infoActive = true;
					window.setTimeout(()=> {
						this.$router.push('/');
					},2000);
					return;
				} 
				else if  (!this.user.isVip  ) {
					this.$router.push('/subscribe');
				} else {
					return;
				} 
			},

			showPop() {
				this.show = !this.show;
			},
			...mapMutations([
				'setFreeTime'
			])
		}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">


 @import '~common/less/mixin.less';


#head{
  height: 100%;
	width: 100%;
	position: relative;
}


//顶部栏
.tops{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top:20px;

	.girl_avatar{
	margin-top: 48px;
  margin-left: 30px;
	border-radius: 100%;	
	width: 60px;
	height: 60px;
	margin-right: 9px;
	background-repeat: no-repeat;
	background-size: 100% 100%;
  }
	.open_service{
  height: 120px;
	width:280px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-right:20px;
	.question{
		display: inline-block;
		justify-content: flex-end;
		height: 40px;
		width: 40px;
		border-radius: 100%;
		img{
		max-height:100%;
		max-width:100%;
	}
	}
	.state{
		height:120px;
		width:180px;
		img{
			max-height:100%;
			max-width:100%;
			}
	}
	
}
}

.three{
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 30px;
}
.logo{
  width: 150px;
  height: 100px;
}
.Happiness{
  font-size: 40px;
  margin-left: 190px;
  margin-top: 30px;
}
.answer{
  margin-right: 190px;
  margin-top: 30px;
  font-size: 40px;
}
.enter_question{
  width: 90%;
	margin-left: 5%;
	position: relative;
	.infoBar{
	position: absolute;
	left: 40%;
	top:50%;
	}
}
#input{
  height: 70px;
  width: 80%;
  float: left;
  border-radius: 10px 0 0 10px;
  font-size:25px;
	border:1px solid transparent;
	border-image: svg(1pxBorder param(--color #a5a5a5)) 2 2 stretch; //解决retina屏下1px的问题
  outline: none;
  text-indent:20px;
}
#btn{
  display: inline-block;
  width: 20%;
  height: 70px;
  background-color: #2d8cf0;
  font-size: 30px;
  color: #fff;
  outline: none;
  border-radius: 0 10px 10px 0;
  margin-left: -2px;
  float: left;
}
.Free-question{
  margin-top: -10px;
  color: red;
  margin-left: 15px;
	font-size: 20px;
	
}

	.slide{
		z-index:550;
	}

 .slide-btn{
  width: 30%;
  height: 70px;
	border:1px solid transparent;
	border-image: svg(1pxBorder param(--color #e6e6e6)) 2 2 stretch;
  font-size: 30px;
	line-height: 70px;
	background:#fff;
 	z-index:505;
	outline: none;
	position: relative;
	left: 35%;
	bottom:-100px;
 }

 .slide-btn{
	 transition: all 0.3s ease;
 }
 .slide-btn-enter{
	 transform: translateY(-800px);
 }
 

#arrow{
  margin-top: 7vw;
  position: absolute;
  left: 37%;
  z-index: 505;
  transition-property:all;
  transition-duration:0.5s;
}
#arrow:hover{
  transform:translateY(10px);
}

.vux-popup-dialog{
	background-color: none;
}


</style>
