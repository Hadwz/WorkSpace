/*
 * @Author: Hadwz 
 * @Date: 2017-11-15 23:23:01 
 * @Last Modified by: Hadwz
 * @Last Modified time: 2017-11-17 23:17:44
 */

import axios from 'axios';

export function getUserData (uname,password) {
	const url = 'http://183.131.126.105:9000/basic/data?key=s_comapi_st_userdata';
	const data = {
		'user_name': uname,
		'user_pwd': password
	};

	return axios.get(url,{
		params:data
	}).then(res=> Promise.resolve(res.data));
	
}