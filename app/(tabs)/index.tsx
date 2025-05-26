import {
	FlatList,
	useWindowDimensions,
	RefreshControl,
	ActivityIndicator,
} from "react-native";
// import products from "@/assets/products.json";
import ProductListItem from "@/components/ProductListItem";
import "@/global.css";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
import { useEffect, useState } from "react";
import { listProducts } from "@/api/products";
import { useQuery } from "@tanstack/react-query";
import { View } from "lucide-react-native";
import { Text } from "@/components/ui/text";
import { ScrollView } from "react-native";
import { Stack } from "expo-router";
import SearchBar from "@/components/SearcBar";
import Categories from "@/components/categories";
import FeaturedItems from "@/components/FeaturedItem";

export default function HomeScreen() {
	const [refreshing, setRefreshing] = useState(false);
	const { data, isLoading, error } = useQuery({
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

	if (isLoading) {
		return <ActivityIndicator />;
	}

	if (error) {
		return (
			<View>
				<Text>Error</Text>
			</View>
		);
	}

	return (
		data && (
			<>
				<FlatList
					key={numColumns}
					data={data.data}
					numColumns={numColumns}
					contentContainerClassName="gap-2"
					columnWrapperClassName="gap-2"
					ListHeaderComponent={
						<>
						<Categories/>
						<FeaturedItems/>
						</>
					}
					renderItem={({ item }) => (
						<ProductListItem product={item} isLoading={isLoading} />
					)}
					refreshing={refreshing}
					scrollEnabled={true}
				/>
				
			</>
		)
	);
}
