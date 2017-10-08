/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-07 19:36:13
 * @version $Id$
 */

 	let log = console.log.bind(console);




 	let init = function () {

 		let player = new Vue({

 			el: '#player-wrap',

 			data: {

 				song:[{

					'name':'アイロニ',

					'singer':'まじ娘',

					'src':"source/まじ娘 - アイロニ.mp3",

					'img':'img/初音未来.jpg',

					},

					{

					'name':'光るなら',

					'singer':'Goose House',

					'src':"source/Goose house - 光るなら.mp3",

					'img': 'img/四月是你的谎言.jpg',

					},


 				],

 				btnImg:{

 					start:['img/播放.svg','img/暂停.svg'],

 					volume:['img/音量.svg','img/静音.svg'],

 				},

 				volumeClass:{

 					normal:'glyphicon-volume-up' ,

 					isActive:'glyphicon-volume-off',

 				},

 				songIndex:0,

 				btnIndex:0,

 				audio:document.getElementById('audio'),

 				playWidth:0,

 				volumeWidth:100,

 				timer:'',

 				songTimer:`00:00`,

 				flag:true,

 				songAlltimer:``,


 			},

 			computed: {

 				play_progress: function () {

 					return  `width:${this.playWidth}%`;

 				},

 				volume_progress: function () {

 					return `width:${this.volumeWidth}%`;

 				},

 				songSrc:function () {

 					let that = this;

 					return this.song[that.songIndex]['src'];

 				},

 				song_Time:function () {

 					return this.songTimer;

 				},

 				volume_btn:function () {

 					if(this.flag & this.volumeWidth>0){

 						log('声音');

 						return this.volumeClass.normal;

 					}
 					else{

 						log('静音')

 						return this.volumeClass.isActive;

 					}

 				},

 				song_Alltime:function () {

 					let that = this;

					let m= 0;

 					let s = 0;

 					let duration =that.audio.duration;

 					m = Math.floor(duration / 60);
 					
 					s = Math.floor(duration - m*60);

 					if(s<10){

 						s = `0${s}`;

 					}

 					that.songAlltimer=`${m}:${s}`;

 					return that.songAlltimer;

 				},


 			},//computed end

 			watch: {

 				


 			}, //watch end

 			methods: {

 				//切换下一首歌
 				nextSong: function (event) {

 					let that = this;

 					that.playWidth = 0;			

					that.songIndex +=1;

					that.btnIndex=0;

					that.audio.src=that.song[that.songIndex]['src'];

					that.playSong();

 				},

 				//播放歌曲
 				playSong: function () {

 					let that = this;

 					that.btnIndex = 1;

 					that.audio.play();

 					that.playProgress();

 				},

 				//播放按钮点击事件
 				playEvent:function () {

 					let that = this;

 					if (that.audio.paused) {

			 			that.playSong();

			 			that.playProgress();

			 		}
			 		else{

			 			this.btnIndex =0;

			 			this.audio.pause();

			 			window.clearTimeout(this.timer);

			 		}

 				},

 				//鼠标点击进度条时，控制播放
 				controlPlay:function (event) {

 					let that = this;

 					let audio = this.audio;

 					audio.currentTime = (event.offsetX / 250 ) * audio.duration;

 					that.playWidth = event.offsetX / 250;

 					that.playSong();

 					that.playProgress();

 				},

 				//自动运行的进度条
 				playProgress:function () {

 					window.clearTimeout(this.timer); 				

					this.playWidth = (this.audio.currentTime/this.audio.duration)*100;

					this.controlSongtime();

					this.controlAlltime();

					if(this.audio.ended) {

						window.clearTimeout(this.timer);

						this.btnIndex = 0;

						if(this.songIndex+1 === this.song.length){

							alert('已经是最后一首了');

							return;

						}else{

							this.nextSong();

							return;

						}

					}

 					this.timer = window.setTimeout(this.playProgress,1000);

 				},

 				//控制音量条
 				controlVolume:function (event) {

 					let that = this;

 					let audio = this.audio;

 					audio.volume =event.offsetX / 120;

 					that.volumeWidth = (event.offsetX / 120)*100;

 					this.flag = true;

 				},

 				//静音与否
 				controlMute: function () {

 					if(this.flag){

 						this.flag = false;

 						this.audio.volume = 0;

 						this.volumeWidth = 0;

 						// log(this.flag,"0")

 						return;

	 				}
	 				else{

	 					this.flag = true;

	 					this.audio.volume = 1;

	 					this.volumeWidth = 100;

	 					// log(this.flag,"1")
	 				}
 					

 				},

 				//音乐时间
 				controlSongtime:function () {

 					let that = this;

 					let m = 0;

 					let s = 0;

 					that.songTimer = that.audio.currentTime;

 					m= Math.floor(that.songTimer / 60);
 					
 					s=Math.floor(that.songTimer - m*60);

 					if(s<10){

 						s = `0${s}`;

 					}

 					that.songTimer = `0${m}:${s}`;

 				},

 				//音乐总时间
 				controlAlltime:function () {

 					let that = this;

 					 that.audio.addEventListener("canplay",function () {

 						that.songAlltimer = that.audio.duration;

 					 });
 				

 				},


 			},  //methods end



 		});



 	


 	}

 	let createAudio = function () {

		

 	};

 	window.onload = init;
