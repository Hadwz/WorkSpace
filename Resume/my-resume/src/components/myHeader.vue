<template>
	<div class="-header">
	<div class="-header-head">
		<div class="-header-c">
			<div class="-logo">
				<a class="-logo-c" href="https://github.com/zhaoky" target="_blank"></a>
			</div>
			<div
					class="-header-title">
			</div>
			<div class="-language">
				<div class="-language-c">
            <span></span>
				</div>
			</div>
		</div>
	</div>
	<div class="-header-nav">
		<ul class="-list">
			<li
					class="-item"
				<em></em>
			</li>
		</ul>
	</div>
	<div class="-header-nav-dot">
		<ul>
			<li
					class="-item"
				<em class="-dot">
					<img alt="">
				</em>
				<span class="-dot-title"></span>
			</li>
		</ul>
	</div>
</div>
</template>

<script>
export default {
	
}
</script>

<style lang="less" scoped>
.-header{
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	height: 60px;
	z-index: 200;
	.-header-head{
		width: 100%;
		height: 60px;
		position: absolute;
		//background-color: rgba(255, 255, 255, 0.8);
		z-index: -1;
		.-header-c{
			padding: 0 3%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.-logo{
				float: left;
				height: 60px;
				display: flex;
				align-items: center;
				.-logo-c{
					display: block;
					width: 40px;
					height: 40px;
					background: url("../img/logo.jpg") no-repeat center center;
					background-size: contain;
					border-radius: 50%;
				}
			}
			.-header-title{
				display: none;
				position: relative;
				color: #FFF;
				&:after {
					content: "";
					position: absolute;
					top: 50%;
					right: -15px;
					width: 0;
					height: 0;
					border-left: 5px solid transparent;
					border-right: 5px solid transparent;
					border-top: 5px solid #FFF;
					transition: 0.5s;
				}
			}
			.-rotate{
				&:after{
					transform: rotate(180deg);
				}
			}
			.-language{
				float: right;
				height: 60px;
				display: flex;
				align-items: center;
				.-language-c{
					border-radius: 25px;
					background-color: rgba(0,0,0,.1);
					position: relative;
					span{
						color: rgba(0,0,0,.3);
						width: 30px;
						display: inline-block;
						line-height: 30px;
						text-align: center;
						transition: color .3s ease;
					}
					.-selected{
						color: #FFF;
					}
					&:after{
						content: "";
						width: 30px;
						height: 30px;
						background-color: rgba(0, 0, 0,0.75);
						position: absolute;
						top: 0;
						left: 0;
						transform: translateX(0);
						border-radius: 50%;
						z-index: -1;
						transition: transform .3s ease;
					}
				}
				.-selectEn{
					&:after{
						transform: translateX(100%);
					}
				}
			}
		}

	}
	.-header-nav{
		height: 50px;
		position: absolute;
		top: 60px;
		width: 100%;
		font-size: 13px;
		background-color: rgba(255, 255, 255, 0.4);
		visibility: hidden;
		opacity: 0;
		transition: all 0.5s;
		.-list{
			justify-content: space-around;
			align-items: center;
			display: flex;
			height: 50px;
			em{
				font-style: normal;
			}
			.-cur-index{
				color:#38BCFF;
			}
		}
	}
	.-show-nav{
		visibility: visible;
		opacity:1;
	}
	.-header-nav-dot{
		position: fixed;
		right: 40px;
		top: 50%;
		transform: translateY(-50%);
		font-size: 14px;
		text-align: center;
		.-item{
			line-height: 24px;
			position: relative;
			width: 24px;
			height: 24px;
			margin: 12px auto;
			.-dot{
				position: absolute;
				top: 50%;
				left: 20px;
				transform: translateY(-50%);
				width: 12px;
				height: 12px;
				background: rgba(0, 0, 0, 0.7);
				transition: all .3s ease;
				border-radius: 50%;
				opacity: .1;
				cursor: pointer;
				img{
					width: 60%;
					opacity: 0;
					position: absolute;
					top: 50%;
					right: 50%;
					transform: translateY(-50%) translateX(50%);
					z-index: -1;
					pointer-events: none;
				}
				&:hover{
					transform: translateY(-50%) scale(3);
					opacity: 1;
					img{
						opacity: 1;
					}
				}
				&:hover+span{
					opacity: 1;
				}
			}
			.-dot-title{
				position: absolute;
				display: inline-block;
				opacity: 0;
				z-index: 1;
				transition: all .3s ease;
				width: 60px;
				left: -70px;
				text-align: center;
				background: rgba(0,0,0,.7);
				color: #FFF;
				border-radius: 3px 0 0 3px;
				font-weight: bold;
				&:after{
					content: "";
					position: absolute;
					right: -12px;
					width: 0;
					height: 0;
					border-top: 12px solid transparent;
					border-left: 12px solid rgba(0, 0, 0, 0.7);
					border-bottom: 12px solid transparent;
				}
			}
		}
		.-cur-index{
			.-dot{
					transform: translateY(-50%) scale(3);
					opacity: 1;
					img{
						opacity: 1;
					}
				}
			}
		}
}

@media screen and (max-width: 600px){
	.-header{
		.-header-head{
			.-header-c{
				top: 50px;
				.-header-title{
					display: block;
				}
			}
		}
		.-header-nav{
			height: 30px;
			top: 50px;
			.-list{
				height: 30px;
			}
		}
		.-header-nav-dot{
			display: none;
		}
	}
}
</style>

