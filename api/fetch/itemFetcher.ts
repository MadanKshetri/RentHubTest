import { api } from "../api";

export async function getItems (){
   const response = await api.get("/items")
   console.log(response.data)
   return response.data
}

export async function getItem(id:string){
   const res = await api.get(`/items/${id}`)
   return res.data
}