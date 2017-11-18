/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-09-29 11:42:56
 * @version $Id$
 * fight场景用到的工具
 */


 	let log = console.log.bind(console);

 	let globalScope = {

 		role:{},

 		num:{},

 	}

 	function imageFromPath(path) {
	    
	    let img = new Image();
	    
	    img.src = path;
	    
	    return img;
	}



 	/**
 	 * [ImageFromPath description]
 	 * 新建一个画布的img
 	 * @param {[type]} path [description]
 	 * 返回传入路径的img对象
 	 */
	function preImage(url,callback){  
	     var img = new Image(); //创建一个Image对象，实现图片的预下载  
	     img.src = url;  
	     
	    if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数  
	         callback.call(img);  
	        return; // 直接返回，不用再处理onload事件  
	     }  
	  
	     img.onload = function () { //图片下载完毕时异步调用callback函数。  
	         callback.call(img);//将回调函数的this替换为Image对象  
	     };  
	}  


	/**
	 * [randomBetweenX description]
	 * 输出指定区间的随机数
	 * @return {[type]} [description]
	 * 参数是两个值
	 * 返回一个在指定值之间的数
	 */
	function randomBetweenX(x,y) {

		let n = Math.random()* (y-x+1);

		return Math.floor(n+x);

	}




	/**
 	 * 
 	 * [myStorage description]
 	 * 网上copy的一个API
 	 * 
 	 * @param  {[type]}   	  	  
 	 * @return {[type]}     [description]
 	 * 返回一个新的Storage
 	 * 
 	 * 本地存储，localStorage类没有存储空间的限制
 	 * 而cookieStorage有存储大小限制  
 	 * 在不支持localStorage的情况下会自动切换为cookieStorage
 	 *   
 	 */
 	window.myStorage = (new (function(){  
  
	    let storage;    //声明一个变量，用于确定使用哪个本地存储函数  
	  
	    if(window.localStorage) {  
	        storage = localStorage;     //当localStorage存在，使用H5方式  
	    } 

	    else {  
	        storage = cookieStorage;    //当localStorage不存在，使用兼容方式  
	    }  
	  
	    this.setItem = function(key, value) {  
	        storage.setItem(key, value);  
	    };  
	  
	    this.getItem = function(name) {  
	        return storage.getItem(name);  
	    };  
	  
	    this.removeItem = function(key) {  
	        storage.removeItem(key);  
	    };  
	  
	    this.clear = function() {  
	        storage.clear();  
	    };  

	})()); 



	/**
 	 * [saveStorage description]
 	 * 保存数据给另一页面使用
 	 * @return {[type]} [description]
 	 * 返回的是角色数据
 	 * 还有一个选中的num
 	 */
	function getStorage() {

		let s = globalScope;

		s.role= JSON.parse(myStorage.getItem("Role-data"));

		s.num= myStorage.getItem('selected-num');

		 // log(s.role,'数据已读取');

	} 


	/**
	 * [debugMode description]
	 * debug模式
	 * 暂停功能
	 * 控制速度的功能
	 * @param  {[type]} game   [description]
	 * @param  {[type]} enable [description]
	 * @return {[type]}        [description]
	 * 
	 */
	function debugMode(game,enable) {

		let s = globalScope;

		if(!enable) {

			return;
		}

		s.paused = false;

		document.addEventListener('keydown',function(event) {

			let key = event.key;

			if(key === 'p') {
				//暂停按钮
				s.paused = !s.paused;
			}
		})


	}


	/**
	 * [mouseDrage description]
	 * 拖拽画布中的物体
	 * @param  {[type]} obj [description]
	 * @return {[type]}     [description]
	 */
	function mouseDrage(obj,objName) {

		let enableDrag = false;

		let canvas = $('.wrap #canvas');

		canvas.mousedown(function(event) {
			
			let x = event.offsetX;

			let y = event.offsetY;

			log(x,y,'clicking');

			if(obj.hasPoint(x,y)) {

				enableDrag = true;

			} 

		});

		canvas.mousedown(function(event) {

			let x = event.offsetX;

			let y = event.offsetY;

			if(enableDrag) {

				objName.x = x;

				objName.y = y;

				log(obj.x,obj.y,'draging',x,y);

			}


		});

		canvas.mouseup(function(event) {

			let x = event.offsetX;

			let y = event.offsetY;

			log(x, y, 'up');

            enableDrag = false;

		})

	}

