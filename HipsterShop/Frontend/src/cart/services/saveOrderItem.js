import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'
import { Cookies } from "react-cookie"

const saveOrderItem = (data = {}) => {
	let body = data;

	const { getToken, isTokenExist } = tokenManager();

	if (!isTokenExist()) {
		const cookies = new Cookies();
		const cartId = cookies.get("cartId") || "";
		return axios.post(`${environment.rootApi}/call/unauthorized/save`, body, {
			params: { cartId }
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
	
	return axios.post(`${environment.rootApi}/call/orderitem/save`, body,
	{
		params: { token },
		
		headers: {
			'Authorization': token,
			
		}
	})} 

export default saveOrderItem
