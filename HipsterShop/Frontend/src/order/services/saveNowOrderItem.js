import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'

const saveNowOrderItem = (data = {}) => {
	let body = data;

	const { getToken, isTokenExist } = tokenManager();

	if (!isTokenExist()) {
		return axios.post(`${environment.rootApi}/call/unauthorized/savenow`, body, {
			params: { catalogId: data.catalogId || "" }
		}).then((response) => {
			if (response.data && response.data.data && response.data.data.orderId) {
				const expires = new Date();
				expires.setDate(expires.getDate() + 30); // 30 days persistence
				cookies.set("orderId", response.data.data.orderId, { path: "/", expires });
			}
			return response;
		})
	}

	const token = getToken();
	
	return axios.post(`${environment.rootApi}/call/orderitem/savenow`, body,
	{
		params: {
			token,
			catalogId: data.catalogId
		},
		
		headers: {
			'Authorization': token,
			
		}
	})} 

export default saveNowOrderItem
