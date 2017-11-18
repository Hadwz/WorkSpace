<template>
  <div class="back">
		<div  @click="back">
			<img src="static/images/back-icon.png" alt="">
			<a href="#" >返回</a>
		</div>
  </div>
</template>

<script>
export default {

	data() {
		return {

		}

	},
	methods: {
		back: function () {
			this.$router.back();
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .back {
    position: fixed;
    top: 0;
    width: 100%;
    height: 10vw;
    background: black;
		padding: 1vw;
		z-index:2;
  }

  .back img {
    width: 7vw;
    height: 8vw;
    float: left;
  }

  .back a {
    display: inline-block;
    line-height: 8vw;
    font-size: 4vw;
    color: #fff;
  }

</style>
