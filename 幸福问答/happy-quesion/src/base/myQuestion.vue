<template>
	<div class="my-question">
		<Col span="22" offset="1">
			<div class="title">
				<Icon type="ios-help-outline"></Icon>
				<span>我的提问</span>
			</div>
			<div class="question-content" >
				<ul class="question-list" v-if="user.isVip">
					<li v-for="item in questionList" @click="detailQuestion(item)"> 
						<div class="question-des">
							<p>
								{{item.question}}
							</p>
						</div>
						<div class="question-state">
							<div>
								<Icon type="chatbubble-working"></Icon>
								<span>2</span>
							</div>
							<div v-if="item.time">
								<span>最近回复</span>
								<span>{{item.time}}</span>
							</div>
						</div>
					</li>
				</ul>
				
				<div class="no-vip" v-else-if="!user.isVip">
					<img src="static/images/no-vip.png" alt="暂未开通">
				</div>
				<div class="no-question" v-else-if="noQustion">
					<img src="static/images/question.png" alt="暂无问题">
				</div>
			</div>
			
		</Col>
	</div>
</template>

<script>

import {getQuestionData} from 'api/questions';
import moment from 'moment';
import {mapGetters,mapMutations} from 'vuex';

export default {
	data () {
		return {
			questionList:[],
			noQustion: false
		}
	},

	computed:{
		...mapGetters([
			'user',
			'userState'
		])
	},

	mounted(){
		this.getQuestion();
	},

	methods:{
		//获取问题列表数据
		getQuestion () {
			if(!this.user.userId) {
				return false;
			}
			getQuestionData(this.user.userId)
				.then(res => {
					if (!res.data,length) {
						this.noQustion = true;
						console.log(this.noQustion);
						return false;
					}
					this.questionList = res.data;
				})
		},

		//获取回复问题数据接口
		detailQuestion (item) {
			let id = item.id;
			let question = item.question;
			this.$router.push({
				path:`questionPage/${id}`
			})
			this.setQuestion({id,question});
		},

		...mapMutations([
			'setQuestion'
		])
	}
}
</script>

<style lang="less" scoped>

	@import '~common/less/mixin.less';

	.my-question{
		margin-top:55px;
		.question-content{
			background-color: white;
			margin-top:20px;
			.no-question{
				text-align: center;
			}
			.no-vip{
				width:100%;
				height: 100%;
				img{
					width:100%;
					height:100%;
				}
			}
			.question-list{
				padding:25px 20px;
				li{
					border-bottom:1px solid transparent;
					border-image: svg(1pxBorder param(--color #c9c9c9)) 2 2 stretch;
					display: flex;
					flex-direction: column;
					padding-left:10px;
					padding-top:25px;
					justify-content: space-between;
					.question-state{
						display: flex;
						justify-content:space-between;
						font-size:14px;
						color:#828282;
						margin-top:45px;
					}
					.question-des p{
						overflow : hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 5;
						-webkit-box-orient: vertical;
					}
				}
			}
		}
	}
</style>
