/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-09-30 12:23:04
 * @version $Id$
 */




	 /**
	  * [description]
	  * @param  {[type]} )
	  * @return {[type]}   [description]
	  * window.ready
	  */
	 $(function() {

	 	let s = globalScope;

	 	let game = new Game('fight-game');

	 	getStorage(); 

	 	game.addHandler();

	 	game.loadStartScene();

	 	game.runLoop();

	 });	