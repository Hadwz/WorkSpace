
import axios from 'axios';
/**
 * 
 * 获取问题数据
 * 
 * @param {string} userId 
 * @returns Promise 
 */
export function getQuestionData(userId) {
	const url = 'http://183.131.126.105:9000/basic/data?key=i_comapi_st_qustion';

	return axios.get(url,{
		params: {
			'user_id': userId
		}
	}).then(res => Promise.resolve(res.data))
		.catch(e => console.log(e));
}


/**
 * 
 * 提交问题数据
 * 
 * @param {Object} {userId,question,time} 
 * @returns Promise
 */
export function postQuestion({userId,question,time}) {
	const url = 'http://183.131.126.105:9000/basic/data/manage?key=i_comapi_st_qustion';


	return axios.post(url,{
		'user_id': userId,
	   question,
	   time
	}).then(res => Promise.resolve(res.data))
		.catch(e => console.log(e));

}

/**
 * 获取问题回复数据
 * 
 * 
 * @param {number} questionId 
 * @returns promise
 */
export function getAnswer(questionId) {
	const url = 'http://183.131.126.105:9000/basic/data?key=s_comapi_st_answerList';

	return axios.get(url,{
		params: {
			'question_id': questionId
		}
	}).then(res => Promise.resolve(res.data))
		.catch(e => console.log(e));
}