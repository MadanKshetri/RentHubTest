import {  FlatList, useWindowDimensions } from "react-native";
import products from "@/assets/products.json";
import ProductListItem from "@/components/ProductListItem";
 import "@/global.css";
 import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
 



export default function HomeScreen() {
// const{width} = useWindowDimensions();
// const numColumns = width > 700 ? 3:2	
const numColumns = useBreakpointValue ({
default: 2,
sm:3,
xl:4
}) as number;
   
	return (
		<FlatList
		    key = {numColumns}
			data={products}
            numColumns={numColumns}
            contentContainerClassName="gap-2   "
            columnWrapperClassName="gap-2"
			renderItem={({ item }) => <ProductListItem product={item} />}
            
		/>
	);
}
