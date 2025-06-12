import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";
import { notifyError } from "@/commons/utils/toaster";

const getCheckoutDetailData = (params = {}) => {
	const { getToken } = tokenManager();
	const token = getToken();
	let paramsGet = Object.assign(params, {token});
	return axios.get(`${environment.rootApi}/call/order/detail`, {
		params: paramsGet,		
		headers: {
			'Authorization': token,
		}
	}).catch((error) => {
		console.error(error);
		notifyError(error);
	})
} 

export default getCheckoutDetailData
