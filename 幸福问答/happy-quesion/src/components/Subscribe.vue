<template>
	<div class="container">
		<p class="info">选择VIP套餐</p>
		<ul class="s-list">
			<li v-for="(item,index) in dataX" :class="{active:activeIndex === index}" @click="selected(item,index)">
				<h3>{{item.cost}}元/{{item.duration}}个月 
					<span v-if="item.origin_coast > item.cost" class="origin-price">(￥{{item.origin_coast}})</span>	
					<span v-show="item.is_sale==='是'" class="hot-sale">活动</span>	
				</h3>
				<p>(不限提问次数)</p>
			</li>
		</ul>
		<info-bar :show="infoActive" :msg="infoMsg"></info-bar>
		<div class="pay-btn" @click="payClick">
			<button><img src="static/images/wechat_btn.png"></button>
		</div>
	</div>
</template>

<script>
import moment from 'moment';
import infoBar from 'base/infoBar';
import {getSubscribeData,postSubscribe} from 'api/subscribe';
import {mapMutations,mapGetters} from 'vuex';
import Back from 'base/back';

export default {
	data(){
		return {
			activeIndex:-1,
			dataX: [],
			selectItem:{},
			infoMsg:'',
			infoActive:false
		}
	},
	computed:{
		...mapGetters([
			'user',
		])
	},
	created(){
		this.getData();
	},
	methods:{
		//微信支付点击按钮
		payClick(){
			if(!this.selectItem.duration){
				this.infoMsg = '您还没有选择哦';
				this.infoActive = true;
				return false;
			}
			const duration = this.selectItem.duration;
			let beginTime = moment().format('YYYY年MM月DD日');
			let endTime = moment().add(duration,'month').format('YYYY年MM月DD日');
			
			this.setUserTime({beginTime,endTime,duration});
			this.infoMsg = '购买成功！';
			this.infoActive = true;
		},

		//套餐列表，点击事件
		selected(item,index){
			this.activeIndex = index;
			this.selectItem = item;
		},

		//获取套餐数据
		getData(){
			getSubscribeData()
				.then(res => {
					this.dataX = res.data;
				})
				.catch(e => console.log(e));
		},
		...mapMutations([
			'setUserTime'
		])
	},
	components:{
		infoBar,
	}
}
</script>



<style lang="less" scoped>
	.container{
		margin:60px auto;
		width:700px;
		.info{
			color:#8a8a8a;
		}
		.s-list{
			margin-top:20px;
			background-color: white;
			box-shadow: 1px 1px 10px #ededed;
			li{
				height: 170px;
				padding-left:24px;
				padding-top:50px;
				border-bottom:1px solid #c9c9c9;
				position: relative;
				.hot-sale{
					background-color: #bd1f16;
					color:white;
					padding:10px;
					height: 35px;
					margin-left:10px;
					font-size:14px;
					width:70px;
				}
				.origin-price{
					color:#868686;
					margin:0px 5px;
					text-decoration: line-through;
					font-weight:normal;
					font-size:14px;
				}
			}
			li.active:after{
				content:'';
				display: inline-block;
				height: 45px;
				border-radius:50%;
				width:45px;
				position: absolute;
				right: 60px;
				top:65px;
				background-image: url('../assets/right_icon.png');
				background-size: 100%;

			}
		}
			.pay-btn{
			height:70px;
			width:100%;
			margin-top:90px;
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
