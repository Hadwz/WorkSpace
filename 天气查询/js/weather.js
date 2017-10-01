/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-09-30 23:23:45
 * @version $Id$
 */

 	let log = console.log.bind(console);

 	function ajaxRequest() {

		let city = $('#search').val();

		let url = "http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&city=" + city + "&day=0&dfc=3";

 		let request = $.ajax({

 			url: url,

 			dataType: 'script',

 			scriptCharset:'gbk',

 			success: function(data) {

 				try {
 				
 					cityData = window.SWther.w[`${city}`][0];   //城市天气数据

 					cityName = Object.keys(window.SWther.w).toString();  //获得城市名字

 					onBack(cityData,cityName);
 				
 				} catch(e) {
 					// statements
  					
  					console.log(e);

  					wrongCity();
 				
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
 	 * [addHandler description]
 	 * 搜索按钮点击事件
 	 */
 	function addHandler() {

 		let searchBtn = $('.search-btn');

 		searchBtn.click(function() {

 			let input = inputJudge($('#search').val());

			if( input ) {

				ajaxRequest();

			}

 		});

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

 		}

 		 showInfo(cityWether);

 	}



 	/**
 	 * [showInfo description]
 	 * 展示天气信息
 	 * @param  {[type]} cityWether [description]
 	 * 天气数据
 	 * @return {[type]}            [description]
 	 */
 	function showInfo(cityWether) {

 		let wether = cityWether;

 		let Daywether = Object.values(cityWether.dayTime);

 		let Nightwether = Object.values(cityWether.night);

 		$('.city-name').text(wether.name);

 		for(let i = 0; i < Daywether.length; i++){

 			$(`#city-day-ul li:eq(${i})`).text(Daywether[i]);

 		}

 		for(let i = 0; i < Daywether.length; i++){

 			$(`#city-night-ul li:eq(${i})`).text(Nightwether[i]);

 		}


 	}

 	/**
 	 * [wrongCity description]
 	 * 处理用户输入错误的字符
 	 * @return {[type]} [description]
 	 */
 	function wrongCity() {

 		$('.city-name').text('查无此城市！');

 		for(let i = 0; i < 4; i++){

 			$(`#city-day-ul li:eq(${i})`).text("");

 		}

 		for(let i = 0; i < 4; i++){

 			$(`#city-night-ul li:eq(${i})`).text("");

 		}



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
    	
    	return true

	} 



 	$(function() {


 		addHandler();


 	});