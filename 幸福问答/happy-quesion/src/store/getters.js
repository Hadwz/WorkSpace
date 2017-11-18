export const user = state => state.user;

export const userInfo = state => {
	
	if(localStorage.userInfo){
		return JSON.parse(localStorage.userState)
	} else {
		return state.user;
	}
}
export const userState = state => {
	if(localStorage.userState){
		return JSON.parse(localStorage.userState)
	} else {
		return state.user;
	}
};

export const question = state => state.question;