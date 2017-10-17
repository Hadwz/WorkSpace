/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-09-30 12:21:38
 * @version $Id$
 */

 	class Role {

 		constructor() {

	 		this.x = 200;

	 		this.y = 550;

	 		this.height = 50;

	 		this.width = 50;

	 		this.life = 0;

	 		this.speed = 1;

	 		this.name = globalScope.role.name;

	 		this.img = globalScope.role.img;

	 	}

	 	moveLeft() {

	 		this.x -= this.speed;
	 	
	 	}

	 	moveRight() {

	 		this.x += this.speed;

	 	}

	 	rebound() {

			if(this.x > 400){

				this.speed *=-1;

			}

			else if(this.x < 8){

				this.speed *=-1;

			}		

		}

		//判断被鼠标点中
		hasPoint(x,y) {

			let xIn = x >= this.x && x <= this.x + this.width;

	        let yIn = y >= this.y && y <= this.y + this.height;

	        return xIn && yIn;

		}

		



	


	 }