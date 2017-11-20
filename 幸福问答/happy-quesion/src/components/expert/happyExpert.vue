<template>
			 <div>
					<ul>
						<li v-for="item in expertList" @click="toggleModal(item)">
							<img id="img1" src="static/images/userimg.png" alt="专家头像">
							<div>
							<h4>{{item.name}}</h4>
							<img id="img2" src="static/images/location.png" alt="">
							<span>{{item.location}}</span>
							<p>{{item.degree}}</p>
							</div>
						</li>
					</ul> 
					<alert :expert="expert" ref="alert"></alert>
				</div>
</template>

<script>
import {getExpertList} from 'api/expert';
import {mapMutations,mapGetters} from 'vuex';
import alert from './alert'

export default {

	components:{
		alert
	},

	mounted(){
		this.getExpertData();
	},
  
	props:{
		show:{
			type:Boolean,
			default:false
		}
	},

	computed:{
		...mapGetters([
			'expert'
		])
	},

	data() {
		return {
			expertList:[],
			slideUp: false,
			modal: false
		}
	},

	methods:{
		//获取专家数据
		getExpertData() {
			getExpertList().then(res => this.expertList = res.data);
		},

		//切换显示弹窗，并且设置expert
		toggleModal(item) {
			this.modal = true;
			this.setExpert(item);
			this.$refs.alert.toggleModal();
		},

		...mapMutations([
			'setExpert',
			'setModal'
		])
	}
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

@import '~common/less/mixin.less';

ul{
  display:block;
  margin-top: 100px;
	border:1px solid transparent;
	border-image: svg(1pxBorder param(--color #e6e6e6)) 2 2 stretch;
  width: 90%;
  margin-left: 5%;
  background: #fff;
}
 ul>li{
  height: 140px;
  width: 100%;
  list-style: none;
	border-bottom: 1px solid transparent;
	border-image: svg(1pxBorder param(--color #e6e6e6)) 2 2 stretch;
  padding: 20px 0 20px 20px;
 }
 ul>li:nth-of-type(1){
  border-top:none;
 }
li #img1{
  float: left;
  display: inline-block;
	height: 100px;
	width: 100px;
	border-radius: 100%;
 }
 li #img2{
	height: 20px;
	width: 16px;
	border-radius: 100%;
  display: inline-block;
  float: left;
  margin: 10px 20px 0 0;
 }
 li div{
	display: inline-block;
	float: left;
  margin-left: 30px;
  height: 100px;
  padding: 10px;
 }
 li h4{
  display: inline-block;
  font-size: 30px;
	float: left;
	color:#434343;
  margin-right: 30px;
 }
 li span{
  margin-top: 5px;
  display: inline-block;
  font-size: 20px;
  float: left;
  color: #999999;
 }
 li p{
  clear: both;
  margin-top: 5px;
  float: left;
  display: block;
  font-size: 20px;
  color: #999999;
 }

.alert{
	#quarter{
		display: flex;
		height: 100%;
		width:80%;
	}
	#img1{
		display: inline-block;
		height: 20%;width: 20%;border-radius: 100%;
		margin-left: 40%;
		margin-top: 15%;

	}
	img,small,#div1{
		display: block;
		flex-direction:row;
	}
	#div1{

	}
	#div1 h4,span,#img2{
		display: inline-block;
		flex-direction:column;
	}
	h4{
		font-size: 40px;
		margin-left: 40%;
	}
	#img2{
		width: 20px;
		height: 25px;
		margin-left: 40px;
	}
	span{
		font-size: 20px;
		margin-left: 10px;
		color: #cdcdcd;
	}
	p{
		margin-left: 34%;
		margin-top: 10px;
		font-size: 20px;
		color: #cdcdcd;
	}
	small{
		font-size: 20px;
		margin-top: 40px;
	}
}

</style>
