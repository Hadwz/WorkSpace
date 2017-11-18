<template>
	<div id="page">
		<Col span="22" offset="1">
			<div class="page-header">
				<img src="static/images/question_mark.png" alt="?">
				<Button type="info">追问</Button>
			</div>
		</Col>
		<Col span="22" offset="1">
			<div class="content-list">
				<div class="question-title">
					<div class="user-info">
							<div class="user-avatar">
								<img :src="user.photo"  alt="用户头像">
							</div>
							<p>2016.04.07 12:34</p>
					</div>
					<div class="question-des">
						{{question.content}}
					</div>
					<div class="question-state">
						<p>
								<img src="static/images/question_mark.png" alt="?">
								&nbsp2
						</p>
						<p>最近10分钟前</p>
					</div>
				</div>
				<ul class="question-list">
					<li class="expert-answer answer">
							<div class="avatar"><img src="static/images/default.jpg" alt="专家头像"></div>
							<div class="exprt-answer answer-info">
								<p class="answer-name">坂田银时老师</p>
								<div>
									<p>7岁增强好胜是好是坏？</p>
									<p>7分钟前</p>
								</div>
							</div>
					</li>
					<li class="user-answer answer">
							<div class="avatar"><img :src="user.photo" alt="用户头像"></div>
							<div class="exprt-answer answer-info">
								<p class="answer-name">{{user.uname}}</p>
								<div>
									<p>回复恢复回复回复回复回复</p>
									<p class="answer-time">7分钟前</p>
								</div>
							</div>
					</li>
				</ul>
			</div>
		</Col>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';
import {getAnswer} from 'api/questions';

export default {

	created(){
		this.infoMsg();
		this.getQuestionAnswer();
	},

	data(){
		return {
			questionData:{
				content:'',
				id:''
			}
		}
	},

	computed:{
		...mapGetters([
			'user',
			'question'
		])
	},

	methods:{
		//顶部通知信息
		infoMsg(){
			this.$Message.config({
				top:'40px',
				duration:3,
			});

			this.$Message.info('老师回复后48小时内，您没有继续追问，问题将被结束');
		},

		//获取问题数据
		getQuestionAnswer() {
			getAnswer(this.question.id)
				.then(res => console.log(res));
		},


	}
}
</script>


<style lang="less" scoped>
	
	 @import '~common/less/mixin.less';


	#page{

		.page-header{
			display: flex;
			justify-content:flex-end;
			padding-top:20px;
			margin-top:10px;
			img{
				width:35px;
				height:35px;
			}
			button{
				margin-left:35px;
				height:40px;
				line-height: 18px;
				width:140px;
			}
		}
		.content-list{
			background-color: white;
			box-shadow: 1px 1px 10px #ededed;
			margin-top:25px;
			.question-title{
				padding:20px 30px;
				box-shadow: 1px 1px 10px #ededed;
				.user-info{
					display: flex;
					justify-content:space-between;
					align-content: center;
					height:70px;
				
					p{
						color:#6b6b6b;
						line-height:70px;
						font-size:14px;
					}
				}
				.question-des{
					margin-top:10px;
				}
				.question-state{
					display: flex;
					justify-content: space-between;
					margin-top:30px;
					font-size:14px;
					color:#6b6b6b;
					height:25px;
					img{
						max-width:100%;
						max-height:100%;
					}
				}
			}
			.question-list{
				margin-top:25px;
				padding:20px 30px;
				& li:last-child{
					border:none;
				}
				.answer{
					display: flex;
					justify-content: flex-start;
					margin-top:15px;
					border-bottom:1px solid transparent; 
					border-image: svg(1pxBorder param(--color #cac9c9)) 2 2 stretch;
					.avatar{
						height:150px;
						width:70px;
						img{
							max-width:100%;
							max-height:100%;
						}
					}
					.answer-info{
						display: flex;
						flex-direction: column;
						padding-left:30px;
						justify-content: space-between;
						.answer-name{
							margin-bottom:15px;
						}
						.answer-time,.answer-name{
							font-size:15px;
							color:#6f6f6f;
						}
					}
				}
			}
		}
	.user-avatar{
				width:60px;
				height:60px;
				img{
					max-width:100%;
					max-height:100%;
					padding:5px;
				}
			}
}
</style>
