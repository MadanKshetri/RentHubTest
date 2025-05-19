// import Post from "@/app/(tabs)/Post";

// const API_URL = process.env.EXPO_PUBLIC_API_URL;

// export async function login(email: string, password: string) {
// 	const res = await fetch(`${API_URL}/auth/login`, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({ email, password }),
// 	});
// 	const data = await res.json();
// 	if (!res.ok) {
// 		console.log(data);
// 		throw Error("Failed to login");
// 	}
// 	return data;
// }
// type TSignupData = {
// 	email: string;
// 	password: string;
// 	phone: string;
// 	fullName: string;
// 	address: string;
// };
// export async function signup(data: TSignupData) {
// 	const res = await fetch(`${API_URL}/auth/register`, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(data),
// 	});
// 	const response = await res.json();
// 	if (!res.ok) {
// 		throw Error("Failed to login");
// 	}
// 	return response;
// }


const API_URL = process.env.EXPO_PUBLIC_API_URL;

export async function login(email: string, password: string) {
	const res = await fetch(`${API_URL}/auth/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password }),
	});
	const data = await res.json();
	if (!res.ok) {
		console.log(data);
		throw new Error(data?.message || "Failed to login");
	}
	return data;
}

type TSignupData = {
	email: string;
	password: string;
	phone: string;
	fullName: string;
	address: string;
};

export async function signup(data: TSignupData) {
	const res = await fetch(`${API_URL}/auth/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	const response = await res.json();
	if (!res.ok) {
		throw new Error(response?.message || "Failed to register");
	}
	return response;
}

