/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-09-30 16:31:20
 * @version $Id$
 */

 class Dragon extends Role {

 	constructor(name) {

 		super();

 		this.name = name;

 		this.x = 100;

 		this.y = 100;

 		this.img = 'img/死亡之翼.jpg';

 		this.life = 1000;

 		this.speed = 2;

 		this.attck = 20;

 		this.fired = false;

 	}


 }