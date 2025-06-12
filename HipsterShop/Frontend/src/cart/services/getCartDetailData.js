import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";
import { notifyError } from "@/commons/utils/toaster";
import { Cookies } from "react-cookie";

const getCartDetailData = (params = {}) => {
	const { getToken, isTokenExist } = tokenManager();

	if (!isTokenExist()) {
		const cookies = new Cookies();
		const cartId = cookies.get("cartId") || "";
		let paramsGet = Object.assign(params, {cartId});
		return axios.get(`${environment.rootApi}/call/cart/unauthorized/detail`, {
			params: paramsGet
		}).then((response) => {
			if (response.data && response.data.data && response.data.data.cartId) {
				const expires = new Date();
				expires.setDate(expires.getDate() + 30); // 30 days persistence
				cookies.set("cartId", response.data.data.cartId, { path: "/", expires });
			}
			return response;
		}).catch((error) => {
			console.error(error);
			notifyError(error);
		})
	}

	const token = getToken();
	let paramsGet = Object.assign(params, {token});
	return axios.get(`${environment.rootApi}/call/cart/detail`, {
		params: paramsGet,		
		headers: {
			'Authorization': token,
		}
	}).catch((error) => {
		console.error(error);
		notifyError(error);
	})
} 

export default getCartDetailData
