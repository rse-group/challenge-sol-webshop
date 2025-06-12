import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";
import { notifyError } from "@/commons/utils/toaster";
import { data } from "react-router";

const getAddressListData = (params = {}) => {
	const { getToken } = tokenManager();

	if (!getToken()) {
		return {data: [], message: "Unauthorized access. Please log in."};
	}

	const token = getToken();
	let paramsGet = Object.assign(params, {token});
	return axios.get(`${environment.rootApi}/call/address/list-profile`, {
		params: paramsGet,		
		headers: {
			'Authorization': token,
		}
	}).catch((error) => {
		console.error(error);
		notifyError(error);
	})
} 

export default getAddressListData
