import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'


const saveNowOrderItem = (data = {}) => {
	let body = data;

	const { getToken } = tokenManager();
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
