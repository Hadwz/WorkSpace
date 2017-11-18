/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-09-29 11:10:27
 * @version $Id$
 */

 	/**
 	 * 通用场景类
 	 */
	 class Scene {

	 	constructor(name,images={}) {

	 		this.name=name;

	 		this.images = images;

	 		this.canvas = $('.wrap #canvas');

	 		this.ctx = this.canvas.get(0).getContext('2d');

	 	}


	 	//游戏中的场景;
	 	gaming(role,dragon,bullet,block) {

	 		let canvas = this.canvas;

 	   		let ctx = this.ctx;

	 		this.drawImage(role);

	 		this.drawImage(dragon);

	 		for(let i of block) {

	 			this.drawImage(i);

	 			i.move();
	 		}

 			ctx.fillStyle='white';

 			ctx.font = '20px Arial';

 			ctx.fillText(`生命 : ${role.life}`,20,35);

 			ctx.fillText(`按 P 暂停游戏！`,20,65);

	 	}

	 	welcomeScene(role) {

	 		let canvas = this.canvas;

 	   		let ctx =this.ctx;

 	   		let img = imageFromPath(globalScope.role.img)

 	   		ctx.fillStyle='white';

	 		ctx.font = '30px Arial';

	 		ctx.fillText(`欢迎 ${globalScope.role.name} 来到这里`,80,255);

	 		ctx.fillText(`按 F 开始你的战斗!`,110,305);

	 		preImage(globalScope.role.img,function() {

	 			ctx.drawImage(img,role.x,role.y,role.width,role.height);

	 		});

	 	
	 	}


	 	//画图像
	 	drawImage(obj) {

	 		let img = imageFromPath(obj.img);

	 		let canvas = this.canvas;

 	   		let ctx = this.ctx;

 	   		ctx.drawImage(img,obj.x,obj.y,obj.width,obj.height);

	 	}

	 	//游戏暂停界面
	 	stopScene() {

	 		let canvas = this.canvas;

	 		let ctx= this.ctx;

	 		ctx.fillStyle='white';

	 		ctx.font = '20px Arial';

	 		ctx.fillText(`游戏暂停ING`,180,365);

	 		ctx.fillText(`按 F 继续游戏！`,170,395)

	 	}


	 	//清除界面
	 	clearScene() {

	 		let canvas = this.canvas;

	 		let ctx= this.ctx;

	 		ctx.clearRect(0,0,450,650);

	 	}




	 }


	



	


 	