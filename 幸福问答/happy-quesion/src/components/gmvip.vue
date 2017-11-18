<template>
  <div>
    <img class="fwgq" :src="userState" alt="服务状态">
		
			<div class="userinfo">
				<a href="#">
					<img class="user" :src="userPhoto" alt="用户头像">
				</a>
				<p>{{userName}}</p>
			</div>
		<div v-if="isVip">
			<div class="vipinfo">
				<p>
					<span>你购买了</span>
					<span class="vipdata">{{user.duration}}的vip问答服务</span>
					<img src="static/images/crown_g.png" alt="">
				</p>
				<p>有效期截止：{{userEndTime}}</p>
			</div>
		</div>
    <div v-else class="ktfw">
			<Col span="20" offset="2">
				<img src="static/images/no-pay.png" alt="">
				<Button type="warning" @click="toSubscribe">开通服务</Button>
			</Col>
    </div>

  </div>
</template>

<script>

	import {mapGetters} from 'vuex';

  export default {
	components: {

	},
	computed:{
		...mapGetters(['user']),
		userPhoto(){
			return this.user.photo;
		},
		userName(){
			return this.user.uname;
		},
		userEndTime(){
			return this.user.endTime;
		},
		isVip(){
			return this.user.isVip;
		},
		userState(){
			if(this.isVip){
				return 'static/images/tag_y.png';
			} else {
				return 'static/images/tag_g.png';
			}
		}
	},
	data() {
		return {
		};
	},
	methods:{

		//跳转前往购买界面，点击事件
		toSubscribe(){
			this.$router.push('/subscribe');
		}
	}
  };

</script>

<style lang="less" scoped>
  .userinfo {
    text-align: center;
    font-size: 4vw;
    margin-bottom: 10vw;
  }

  .user {
    width: 16vw;
  }

  .fwgq {
    width: 12vw;
    margin-left: 70vw;
  }

  .vipinfo {
    text-align: center;
    width: 95vw;
    margin: 0 auto;
    height: 20vw;
    font-size: 4vw;
    background: url('../assets/login_bg.png') no-repeat center center;
    background-size: 100% 20vw;
  }

  .vipdata {
    background: #bcbcbc;
    border-radius: 3vw;
    padding: 1vw 3vw;
    color: #fff;
  }

  .vipinfo p:nth-of-type(1) {
    line-height: 8vw;
  }

  .vipinfo p:nth-of-type(1) img {
    width: 6vw;
    position: relative;
    top: -2vw;
    left: -5vw;
  }

  .vipinfo p:nth-of-type(2) {
    line-height: 12vw;
  }

  .ktfw {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		text-align: center;
		img{
			max-width:100%;
		}
  }

</style>
