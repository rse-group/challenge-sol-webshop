import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";
import { notifyError } from "@/commons/utils/toaster";
import { Cookies } from "react-cookie";

const getCartItemListData = (params = {}) => {
	const { getToken, isTokenExist } = tokenManager();
 
 	if (!isTokenExist()) {
 		const cookies = new Cookies();
 		const cartId = cookies.get("cartId") || "";
 		let paramsGet = Object.assign(params, {cartId});
 		return axios.get(`${environment.rootApi}/call/cartitem/unauthorized/cart`, {
 			params: paramsGet
 		}).catch((error) => {
 			console.error(error);
 			notifyError(error);
 		})
 	}

	const token = getToken();
	let paramsGet = Object.assign(params, {token});
	return axios.get(`${environment.rootApi}/call/cartitem/cart`, {
		params: paramsGet,		
		headers: {
			'Authorization': token,
		}
	}).catch((error) => {
		console.error(error);
		notifyError(error);
	})
} 

export default getCartItemListData
