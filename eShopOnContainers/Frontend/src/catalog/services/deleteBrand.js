import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'
import cleanFormData from '@/commons/utils/cleanFormData'

const deleteBrand = (data = {}) => {
	let body = data;

	const { getToken } = tokenManager();
	const token = getToken();
	
	return axios.delete(`${environment.rootApi}/call/brand/delete`, 
	{
		params: { token },
		data: cleanFormData(body),
		headers: {
			'Authorization': token,
			
		}
	})} 

export default deleteBrand
