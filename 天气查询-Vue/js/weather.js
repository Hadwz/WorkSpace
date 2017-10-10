/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-10-02 22:36:52
 * @version $Id$
 */



let weather = window.weather;

/**
	 * [ajaxRequest description]
	 * ajax请求
	 * 成功后展示天气信息
	 * 失败后就显示提示信息
	 * @param  {[type]} input [description]
	 * @return {[type]}       [description]
	 */
function ajaxRequest(input) {

	let city = input;

	let url = "http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&city=" + city + "&day=0&dfc=3";

	let request = $.ajax({

		url: url,

		dataType: 'script',

		scriptCharset:'gbk',

		success: function() {

			try {
				
				let cityData = window.SWther.w[`${city}`][0];   //城市天气数据

				let cityName = Object.keys(window.SWther.w).toString();  //获得城市名字

				onBack(cityData,cityName);

				weather.showInfo();

				weather.displayControl(true);

				
			} catch(e) {
				// statements
				
				console.log(e);

				weather.displayControl(false);
			

				weather.warningInfo(input);

			}

		},

		error: function(status) {

			alert('失败了',status);
		}


	}).always(function (){

		$('.weather-info-frame').slideDown('slow');

	});

}

/**
 	 * [inputJudge description]
 	 * @param  {[type]} str [description]
 	 * @return {[type]}     [description]
 	 * 判断用户输入的内容是否为空
 	 * 或者是否为中文
 	 */
function inputJudge(str) {
  
	let reg = /^[\u4e00-\u9fa5]{0,}$/;  

	if( !reg.test(str) ) { 

		alert('请输入中文!');

		return false; 

	} 
	else if( str === "") {

		alert("输入内容不能为空！");

		return;

	}
	
	return true;

} 

/**
 	 * [onBack description]
 	 * 处理得到的数据
 	 * @param  {[type]} data [description]
 	 * @param  {[type]} name [description]
 	 * @return {[type]}      [description]
 	 */
 	function onBack(data,name) {

 		let cityWether = {

 			 name: name,

	 		 dayTime : {

	 			wether: data.s1,

	 			temp: data.t1 +' ℃',

	 			wind: data.d1,

	 			winp: data.p1,

	 		},
	 		

	 		 night : {

	 			wether: data.s2,

	 			temp: data.t2 +' ℃',

	 			wind: data.d2,

	 			winp: data.p2,

	 		},

 		};

 		 window.cityWether = cityWether;

 	}




	 $(function() {

	 	//全局对象方便ajax调用
	 	 weather = new Vue({

	 		el: '#weather-container',

	 		data:{
	 			//用户输入的内容
		 		input:'',

		 		placeholder: '输入城市名',

		 		warningMsg: '',

		 		display:'',

		 		cityName:'',

		 		dayWeather:'',

		 		nightWeather:'',

		 		warning:'',

	 		},

	 		methods: {
	 			//鼠标点击事件
	 			handler: function() {

	 				if( inputJudge(this.input) ) {
	 					
	 					ajaxRequest(this.input);
	 				}	
	 			},
	 			//控制提示和天气信息显示
	 			displayControl: function(bool) {

	 				this.display = bool;

	 				this.warning = !bool;

	 			},
	 			//将数据导入到data对应的对象中
	 			showInfo: function() {

	 				this.dayWeather = window.cityWether.dayTime;

	 				this.nightWeather = window.cityWether.night;

				this.cityName = window.cityWether.name;	

	 			},
	 			//提示信息
	 			warningInfo(input) {

	 				this.warningMsg = `您输入的 '${input}' 不是个城市哦！`;

	 			}

	 		}


	 	});


	 });  //ready end

