// const API_URL = process.env.EXPO_PUBLIC_API_URL;
// export async function listProducts (){
//     console.log(`${API_URL}/item`);
    //     const res = await fetch (`${API_URL}/item`  );
//     const data = await  res.json();
//     console.log(data)
//     return data
// } 





const API_URL = process.env.EXPO_PUBLIC_API_URL

export async function listProducts (){
    console.log(`{API_URL}/item`);
    const res = await fetch (`${API_URL}/item`);
    const data = await res.json();
    if (!res.ok){
        throw new Error ('Error');
    }
    return data;
}

export async function fetchProductById(id: number){
    const res = await fetch(`{API_URL}/item/$(id)`);
    const data = await res.json();
    if (!res.ok){
        throw new Error ('Error');
    }
    return data;
}