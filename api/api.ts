// import axios from "axios";

// export const api = axios.create({
// 	baseURL: process.env.EXPO_BASE_URL,
// 	headers: {
// 		"Content-Type": "application/json",
// 	},
// });

import axios from "axios";

 export const api = axios.create({
	baseURL: process.env.EXPO_BASE_URL,
	headers:{
			"content-type": "application/json"
		}
 }
	
 );