<template>
    <div id="quarter">
      <Modal
        v-model="modalActive"
        title="">
        <img id="img1" src="static/images/userimg.png" alt="">
        <div id="div1">
					<h4>{{expert.name}}</h4>
					<img id="img2" src="static/images/location.png" alt="">
					<span>{{expert.location}}</span>
					<p>{{expert.degree}}</p>
          </div>
        <small>{{expert.introduction}}</small>
      </Modal>
    </div>
</template>
<script>
	
	export default {
		data () {
			return {
				modalActive:false
			}
		},

		props:{

			expert:{
				type:Object,
				default:{}
			}
  	},
    
		computed: {
		},



		methods: {
			//切换显示弹窗
			toggleModal() {
				this.modalActive = !this.modalActive;
			}
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
body{
  height: 100%;
  width: 100%;
}

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

</style>