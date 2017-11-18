
import axios from 'axios';

/**
 * 
 * 获取专家数据列表
 * 
 * @returns {Promise} 
 */
export function getExpertList () {
	const url = 'http://183.131.126.105:9000/basic/data?key=s_comapi_st_expertsList';

	return axios.get(url)
		.then(res => Promise.resolve(res.data))
		.catch(e => console.log(e));

}