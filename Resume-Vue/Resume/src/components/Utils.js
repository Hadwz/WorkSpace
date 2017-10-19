/*
 * @Author: Hadwz 
 * @Date: 2017-10-18 19:45:10 
 * @Last Modified by: Hadwz
 * @Last Modified time: 2017-10-19 23:23:00
 */


import Vue from 'vue';




/**
 * 验证用户输入的账户和密码是否符合基本规则
 * 
 * @param {str} input 用户输入的字符串
 * @param {boolean} model 是否选择密码模式
 * @returns 
 */
const inputJudge = function(input, model) {
	
	const user = /^[a-z]{2,10}$/;
	const password = /^[a-z0-9]{2,}$/;

	console.log(input,model);

	if ( input === "") {
		return false;
	}
	else if(!model){
		if(!user.test(input)){
			return false;
		}
	}
	else if (model) {
		if (!password.test(input)) {
			return false;
		}
	}

	return true;
};


export {
	inputJudge,
	


}