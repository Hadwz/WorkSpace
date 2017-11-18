
import axios from 'axios';
import moment from 'moment';

export function getSubscribeData () {
	const url = 'http://183.131.126.105:9000/basic/data?key=s_comapi_st_packageList';
	
	return axios.get(url)
		.then(res =>  Promise.resolve(res.data))
}

export function postSubscribe ({userId,packageId,beginTime,duration}) {
	const url = 'http://183.131.126.105:9000/basic/data/manage?key=i_buy_package';
	const endTime = computedTime(beginTime,duration);
	const para = {
		'userid':userId,
		'package_id': packageId,
		'begin_time': beginTime,
		'end_time': endTime
	};

	return axios.post(url,{params:para})
					 .then(res=>Promise.resolve(res.data))
					 .catch(e => console.log(e));
}


