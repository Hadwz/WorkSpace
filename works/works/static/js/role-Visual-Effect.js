/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-09-29 09:03:38
 * @version $Id$
 * 网页效果操作相关函数
 */

	/**
	 * [ButtonChange 按钮控制效果]
	 * 
	 */
	function ButtonChange() {

		let s = myScope;

		let startBtn = $('.btn-primary');

		let btnhint = $('.btn-hint');

		if(s.startFlag) {

			startBtn.text('选择中').addClass('btn-success')
			.removeClass('btn-warning');

			btnhint.html('按 <kbd>Space</kbd> 结束');

		}

		else {

			startBtn.text('选择结束')
			.removeClass('btn-success')
			.addClass('btn-warning');

			btnhint.html('按 <kbd>Enter</kbd> 重新选择');

		}
		
	}

	/**
	 * [showRole 显示右边的角色大框]
	 * @return {[type]} [description]
	 */
	function showRole(role) {

		let roleFrame = $('.role-info');

		let roleSay = $('.role-say');

		let roleName = $('.role-info h4');

		let roleInfo = $('.role-info span');

		let roleImg = $('.role-info img');

		roleName.text(role.name);

		roleInfo.text(role.info);

		roleImg.attr('src',role.img);

		roleSay.attr('data-content',role.say);

		roleFrame.fadeIn('300', function() {

			roleFrame.addClass('show');

			roleSay.popover('show');
	
		});

		log(role.name,role.info,role.say)

	}


	/**
	 * [selectedBorder description]
	 * @return {[type]} [description]
	 * 选择角色边框效果
	 */
	function selectedBorder(){

		let s = myScope;

		let roleX= $('.role-frame .role-x');

		roleX.eq(s.num).addClass('role-selected')
		.siblings()
		.removeClass('role-selected');
	}


	/**
	 * [resetSculp 使角色框恢复默认状态]
	 * @return {[type]} [description]
	 * Enter开始后调用该函数
	 */
	function resetSculp() {

		let roleImg = $('.role-selected img');

		let roleName = $('.role-selected h4');

		let roleInfo = $('.role-selected span');

		let roleFrame = $('.role-info');

		let s = myScope;

		if(s.startFlag){

			roleImg.attr('src','img/问号.png');

			roleName.text('? ? ?');

			roleInfo.text('? ? ?');

			roleFrame.fadeOut('normal').removeClass('show');

			$('.role-say').popover('hide');

		}


	}

	/**
	 * [roleHeadSculp description]
	 * @return {[type]} [传入选中的角色]
	 * 角色的头像,名字,简介显示
	 */
	function roleHeadSculp(role) {

		let roleImg = $('.role-selected img');

		let roleName = $('.role-selected h4');

		let roleInfo = $('.role-selected span');

		if(role.select){

			roleImg.attr('src',role.img);

			roleName.text(role.name);

			roleInfo.text(role.info);

			role.select = false;

		}

	}
