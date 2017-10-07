/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-07 19:36:13
 * @version $Id$
 */

 	let log = console.log.bind(console)

 	let btnImg = [

 		'img/播放.svg',

 		'img/暂停.svg',

 		'img/音量.svg',

 		'img/静音.svg'

 	]

 	let play = function () {

 		let audio = document.getElementById("audio");

 		let startImg = document.getElementById("start-img");

 		if (audio.paused) {

 			audio.play();

 			startImg.src = btnImg[1];

 			 playProgress();

 		}
 		else{

 			audio.pause();

 			startImg.src= btnImg[0];

 		}

 	}

 	let playProgress = function () {

 		let audio = document.getElementById("audio");

 		let percent = percentFormat(audio.currentTime / audio.duration);

 		let progress = document.getElementById("play-progress");

 		progress.style.width = percent;

 		if (!audio.ended) {

 			window.setTimeout(playProgress,1000);

 			}
 	

 	}

 	let percentFormat = function (percent) {

 		let p = percent*100 + '%';

 		return p;

 	}	

 	let ControlPlay = function (event) {

 		let progress = document.getElementById("play-progress");

 		let audio = document.getElementById("audio");

 		let startImg = document.getElementById("start-img");

 		if (audio.paused) {

 			audio.play();

 			startImg.src = btnImg[1];

 		}

	 	audio.currentTime = (event.offsetX / 250 ) * audio.duration;

	 	progress.style.width = percentFormat (event.offsetX / 250);

	 	log(audio.currentTime,progress.style.width);

 	}

 	let ControlVolume = function (event) {

 		let volume = document.getElementById("volume-progress");

 		let volumeProgress = document.getElementById("volume-progress-2");

 		let audio = document.getElementById("audio");

 		let width = volume.style.width;

 		audio.volume = event.offsetX / 120;

	 	volumeProgress.style.width = percentFormat (event.offsetX / 120);

	 	log(event.offsetX,audio.volume)

 	}


 	let init = function() {

 		let start = document.getElementById("start-btn");

 		let progress = document.getElementsByClassName("progress-1")[0];

 		let volume = document.getElementById("volume-progress");

 		let audio = document.getElementById("audio");

 		let volumeIcon = $('.volume-icon');
 		
 		start.onclick = play;

 		progress.onclick = ControlPlay;

 		volume.onclick = ControlVolume;

 		volumeIcon.click(function(event) {

 			volumeIcon.toggle(function () {

	 			let volumeIcon = $('.volume-icon>img');

		 		volumeIcon.attr('src',btnImg[3]); 

		 		audio.volume = 0;

		 		log('x') 

	 		},function () {

		 			let volumeIcon = $('.volume-icon>img');

			 		volumeIcon.attr('src',btnImg[2]); 

			 		audio.volume = 1;

	 		})

 			/* Act on the event */
 		});

 		

 	}
 	
 	window.onload = init;

