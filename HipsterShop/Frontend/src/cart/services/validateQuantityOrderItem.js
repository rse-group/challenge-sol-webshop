import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'
import { Cookies } from "react-cookie";

const validateQuantityOrderItem = (data = {}) => {
	let body = data;

	const { getToken, isTokenExist } = tokenManager();

	if (!isTokenExist()) {
 		const cookies = new Cookies();
 		const cartId = cookies.get("cartId") || "";
 		let paramsGet = Object.assign(body, {cartId});
 		return axios.get(`${environment.rootApi}/call/unauthorized/validatequantity`, {
 			params: paramsGet
 		}).catch((error) => {
 			console.error(error);
 			notifyError(error);
 		})
 	}

	const token = getToken();
	
	return axios.post(`${environment.rootApi}/call/orderitem/validatequantity`, body,
	{
		params: { token },
		
		headers: {
			'Authorization': token,
			
		}
	})} 

export default validateQuantityOrderItem
