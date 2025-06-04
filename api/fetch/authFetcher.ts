import { api } from "../api";

 export async function signUpFetch (data:any){

   const res = await api.post('auth/register',data)
   return res.data
}