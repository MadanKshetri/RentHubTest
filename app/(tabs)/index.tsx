import { FlatList, useWindowDimensions, RefreshControl, ActivityIndicator } from "react-native";
// import products from "@/assets/products.json";
import ProductListItem from "@/components/ProductListItem";
import "@/global.css";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
import { useEffect, useState } from "react";
import { listProducts } from "@/api/products";
import { useQuery } from "@tanstack/react-query";
import { View } from "lucide-react-native";

export default function HomeScreen() {
	const [refreshing, setRefreshing] = useState(false);
	const { data, isFetching, error } = useQuery({
		queryKey: ["products"],
		queryFn: listProducts,
	});

	//this is the basic way of fetching the product from the API so   we use tanstack query for Global state management
	// const [products, setProduct] = useState();
	// useEffect(() => {
	// 	const fetchProducts = async () => {
	// 		const data = await listProducts();
	// 		setProduct(data);
	// 	};
	// 	fetchProducts();
	// }, []);

	// const{width} = useWindowDimensions();
	// const numColumns = width > 700 ? 3:2
	const numColumns = useBreakpointValue({
		default: 2,
		sm: 3,
		xl: 4,
	}) as number;

	const onfresh = () => {
		setRefreshing(false);
		setTimeout(() => setRefreshing(false), 2000);
	};


if (isFetching){
	return <ActivityIndicator/>
}

if (error){
	return <View> 
	
		</View> 
}

	return (
		<FlatList
			key={numColumns}
			data={data}
			numColumns={numColumns}
			contentContainerClassName="gap-2   "
			columnWrapperClassName="gap-2"
			renderItem={({ item }) => <ProductListItem product={item} />}
			refreshing={refreshing}
		/>
	);
}
