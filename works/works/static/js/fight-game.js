/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-09-30 12:27:39
 * @version $Id$
 */

 	class Game extends Scene {

 		constructor(name,images) {

 			super(name,images);

 			this.startFlag = false;

 			this.scene = new Scene('gameScene');

 			this.role = new Role(globalScope.role);

 			this.role.img = '../images/hero1.png';

 			this.role.life = 100;

 			this.dragon = new Dragon('死亡之翼');

 			this.bullet = new Bullet();

	 		this.block = [];

	 		this.timer = 0;

	 		this.count = 0;

 		}

 		//加载开始场景
 		loadStartScene() {

 			this.scene.clearScene();

 			this.scene.welcomeScene(this.role);

 			if(this.startFlag){

 				this.scene.clearScene();
 				
 				this.scene.gaming(this.role,this.dragon,this.bullet,this.block);

 				log('游戏开始界面');

 			}

 		}

 		loadStopScene() {

 			if(!this.startFlag) {

 				this.scene.clearScene();

 				this.scene.stopScene();

 				log('游戏暂停界面');

 			}

 		}

 		//注册键盘事件
 		addHandler() {

 			let that = this;

 			document.addEventListener('keydown', function(event) {

 				let key = event.key;

 				log(key)

 				switch (key) {

 					case 'a':

 					that.timer = window.setTimeout(function() {

 						that.count += 1;

 						if(that.count>1) {

 							window.clearTimeout(that.timer);

 							that.count = 0;

 							return;
 						}

 						that.creatBullet();

 					},1000);

 						break;

 					case 'd':
 						
 						break;

 					case 'f':

 						that.startFlag = true;

 						that.loadStartScene();

 						break;

 					case 'p':

 						that.startFlag = false;

 						that.loadStopScene();

 						log('游戏暂停');
 				}



 			});

 		}

 		//更新数据
	 	update() {

	 		let role = this.role;

	 		let dragon = this.dragon;

	 		let ctx= this.ctx;

	 		let canvas= this.canvas;

	 		this.scene.clearScene();

	 		role.moveLeft();

	 		role.rebound();

	 		dragon.moveRight();

	 		dragon.rebound();

	 		this.bullet.move();

	 		this.bullet.rebound();

	 	}

	 	//定时刷新游戏
	 	runLoop() {

	 		let that = this;

	 		let role = that.role;

	 		let canvas = that.canvas;

 	   		let ctx =that.ctx;

 	   		if(that.startFlag) {

	 	   		that.scene.clearScene();

		 		that.update();

		 		that.scene.gaming(role,this.dragon,this.bullet,this.block);

	 		}

	 		//设置定时器
	 		window.setTimeout(function (){

	 			that.runLoop();

	 		},1000/25);

	 	}

	 	//创造子弹
	 	creatBullet() {

			let bullet;

			bullet = new Bullet('role');

			bullet.Position(this.role.x,this.role.y);

			this.block.push(bullet);

			log(this.block);
			
		}



 	}	

