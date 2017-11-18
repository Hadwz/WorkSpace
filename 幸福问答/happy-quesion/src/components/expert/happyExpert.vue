<template>
     <div>
        <button class="open-btn">幸福专家</button>
        <ul>
          <li v-for="item in expertList">
						<img id="img1" src="static/images/userimg.png" alt="专家头像">
						<div>
						<h4>{{item.name}}</h4>
						<img id="img2" src="static/images/location.png" alt="">
						<span>{{item.location}}</span>
						<p>{{item.degree}}</p>
						</div>
					</li>
        </ul>
     </div>
</template>

<script>
import {getExpertList} from 'api/expert';

export default {
	mounted(){
		this.getExpertData();
	},

	data () {
		return {
			expertList:[]
		}
	},

	methods:{
		//获取专家数据
		getExpertData () {
			getExpertList().then(res => this.expertList = res.data);
		}
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
 .open-btn{
  width: 30%;
  height: 70px;
  border:1px solid transparent;
	border-image: svg(1pxBorder param(--color #e6e6e6)) 2 2 stretch;
	border-width:1px 1px 0px 1px;
  font-size: 30px;
  line-height: 70px;
  color: #696969;
  background: #fff;
  margin-top: -69px;
  position: absolute;
  left:35%;
  // top:38%;
 }

</style>
