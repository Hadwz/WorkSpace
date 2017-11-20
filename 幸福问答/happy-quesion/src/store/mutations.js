/*
 * @Author: Hadwz 
 * @Date: 2017-11-15 22:59:01 
 * @Last Modified by: Hadwz
 * @Last Modified time: 2017-11-21 00:48:40
 */


const mutations = {
	setUser(state,data){
		state.user = data;
		localStorage.userInfo = JSON.stringify(state.user);
	},

	setUserTime(state,payload){
		
		state.user.startTime = payload.beginTime;
		state.user.endTime = payload.endTime;
		state.user.duration = payload.duration + '月';
		state.user.isVip = true;
		localStorage.userState = JSON.stringify(state.user);
	},

	setQuestion(state,payload) {
		state.question.id = payload.id;
		state.question.content = payload.question;
	},

	setExpert(state,expert) {
		state.expert = expert;
	},

	
}
export default mutations;