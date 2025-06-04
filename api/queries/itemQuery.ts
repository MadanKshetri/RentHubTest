import { useQuery } from "@tanstack/react-query"
import { getItem, getItems } from "../fetch/itemFetcher"
import { QueryKeys } from "@/constants/queryKeys"

export const useGetItemsQuery = () => {
    return useQuery({
        queryFn: getItems,
        queryKey:[QueryKeys.getItems]
    })
} 

export const useGetItemQuery = (id:string) =>{
    return useQuery({
        queryFn: () => getItem(id),
        queryKey: [QueryKeys.getItems,id]
    })
}

const returnedData =useGetItemQuery("124")