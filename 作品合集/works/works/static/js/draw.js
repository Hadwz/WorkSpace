/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-09-28 19:34:07
 * @version $Id$
 * 选择相关操作
 * onload加载的函数
 */



	/**
	 * [drawStart description]
	 * @return {[type]} []
	 * 角色随机选择开始
	 */
	function drawStart(){

		let s = myScope;

		let drawBox = Object.keys(Role);   //角色的数组

	    s.num = Math.floor(Math.random()*drawBox.length);

		s.startFlag = true;

		window.clearTimeout(s.timer);

		resetSculp();

		selectedBorder();

		ButtonChange(); 

		s.timer = window.setTimeout("drawStart()", 100);


	}

	/**
	 * [drawStop description]
	 * @return {[type]} [description]
	 * 角色选择结束
	 */
	function drawStop() {

		let s = myScope;

		let drawBox = Object.keys(Role);   //角色的数组

		let roleKey = drawBox[s.num]  //获得选中的角色名字

		let role  = new createRole(Role[`${roleKey}`]);  //新建角色

		role.select = true;  //标志角色被选中

		s.startFlag = false;

		ButtonChange();   //按钮样式

		window.clearTimeout(s.timer);

		roleHeadSculp(role);  //角色右边头像

		showRole(role);  //显示角色大框

		contextMenu(role)  //注册右键事件

	}


	/**
	 * [Role description]
	 * @param {[type]} name [description]
	 * 选择接受后
	 * 新建一个角色
	 */
	function createRole(role) {

		let r = role

		this.name = r.name || '无名大侠';

		this.img = r.img;

		this.say = r.say;

		this.info = r.info;

		this.slogan = r.slogan;

	}


	/**
	 * [init description]
	 * @return {[type]} [description]
	 * 	window.onload 加载的函数
	 */
	function init() {

		BootStrap();   //bootstrap 效果加载

		addHandler(document)  //为document添加按键事件

	}


	window.onload = init;