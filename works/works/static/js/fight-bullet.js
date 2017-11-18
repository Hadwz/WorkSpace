/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-09-30 18:31:27
 * @version $Id$
 */


 class Bullet extends Dragon {

 	constructor(host) {

 		super();

 		this.img = 'images/bullet1.png';

 		this.name = 'bullet';

 		this.speed = 2;

 		this.host = host;

 		this.width = 5;

 		this.height = 5;

 		this.x = 200;

 		this.y = 550;

 	}

 	move() {

 		this.y -= this.speed;

 	}

 	Position(x,y) {

 		this.x = x+20;

 		this.y = y;

 	}




 }
 