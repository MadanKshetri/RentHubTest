// const API_URL = process.env.EXPO_PUBLIC_API_URL;
// export async function listProducts (){
//     console.log(`${API_URL}/item`);
//     const res = await fetch (`${API_URL}/item`  );
//     const data = await  res.json();
//     console.log(data)
//     return data
// }

const API_URL = process.env.EXPO_PUBLIC_API_URL;
export type TItemData = {
	id:string
	name:string,
	address:string,
	assets: {
		id:string,
		url:string,
		name:string
	}[],
	rate:number,
	description?:string,
}
type FetchItemResponse = {
	message: string,
	data: TItemData[],
	pagination:{

	}

}
export async function listProducts() {
	const res = await fetch(`${API_URL}/item`);
	const data:FetchItemResponse = await res.json();
	if (!res.ok) {
		throw new Error("Error");
	}
	return data;
}

export async function fetchProductById(id: number) {
	const res = await fetch(`${API_URL}/item/${id}`);
	const data = await res.json();
	if (!res.ok) {
		throw new Error("Error");
	}
	return data;
}
