/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-09-29 08:53:57
 * @version $Id$
 * 工具类的函数
 */



	/**
	 * [BootStrap description]
	 * BS相关功能激活，相关效果展示
	 */
	function BootStrap() {

		let roleInfo = $('.role-info');

		let btnInfo = $('.btn-info');

		$(function () { $("[data-toggle='popover']").popover(); });  //激活所有弹出框


	}


	/**
	 * [addHandler 为元素添加按键事件]
	 * @param {[type]} element [注册事件的元素]
	 */
	function addHandler(element) {

		element.onkeydown = handler;
	 		
 	}

 	function handler (event) {

		let e = event || e;

 		let key = e.keyCode;

 		let s = myScope;

 		switch(key){

 			case 13: 

 				drawStart();

 				break;

 			case 32:
 				if(s.startFlag)
 					drawStop();

 				break;
	 	}
	 	
	}


	/**
	 * [contextMenu description]
	 * 右键菜单
	 * 在角色选择完成后出现
	 * 调整到另一个页面
	 * @return {[type]} [description]
	 */
	function contextMenu(role) {

		let s = myScope;

		let roleContext = $('.role-img')

		log(!s.startFlag);

		if(!s.startFlag) {

			log('右键菜单',roleContext);

		
			roleContext.contextmenu(function() {

				contextShow(role);

				saveStorage(); //保存数据

			});

			$(document).click(function (){

				contextHide();

			});

			$('.myMenu').click(function (){

				

			})


		}
		
	}

	function contextShow(role) {

		let roleContext = $('.role-img');

		let e = event ||e;

		let menu = $('.myMenu');

		let roleSlogan = $('.role-slogan');

		roleSlogan.attr('data-content',role.slogan);

		roleSlogan.popover('show');

		$('.role-say').popover('hide');

		log('右键菜单显示');

		e.preventDefault()  //取消默认右键菜单事件

		menu.css({

			left: e.offsetX+60 + 'px',

			top: e.offsetY-30 + 'px',

			visibility: 'Visible',

		});


	}

	function contextHide() {

		let roleContext = $('.role-img');

		let e = event ||e;

		let menu = $('.myMenu');

		let roleSlogan = $('.role-slogan');

		roleSlogan.popover('hide');

		$('.role-say').popover('show');

		log('右键菜单隐藏');

		menu.css({

			visibility: 'hidden',

		});


	}