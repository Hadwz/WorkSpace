/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-09-29 09:11:23
 * @version $Id$
 * 本地存储数据
 */

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
	function saveStorage() {

		let keys = Object.keys(Role);

		let roleVal = Role[`${keys[myScope.num]}`];

		let role = JSON.stringify(roleVal);

		 myStorage.setItem("Role-data",role);

		 myStorage.setItem('selected-num',myScope.num);

		 log('数据已保存',role);

	} 


