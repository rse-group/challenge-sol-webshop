import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'
import { Cookies } from "react-cookie"


const saveCartItem = (data = {}) => {
	let body = data;

	const { getToken, isTokenExist } = tokenManager();
 
 	if (!isTokenExist()) {
 		const cookies = new Cookies();
 		const cartId = cookies.get("cartId") || "";
 		return axios.post(`${environment.rootApi}/call/cartitem/unauthorized/save`, body, {
 			params: { cartId }
 		}).then((response) => {
			if (response.data && response.data.data && response.data.data.cartId) {
				const expires = new Date();
				expires.setDate(expires.getDate() + 30); // 30 days persistence
				cookies.set("cartId", response.data.data.cartId, { path: "/", expires });
			}
 			return response;
 		})
 	}

	const token = getToken();
	
	return axios.post(`${environment.rootApi}/call/cartitem/save`, body,
	{
		params: { token },
		
		headers: {
			'Authorization': token,
			
		}
	})} 

export default saveCartItem
