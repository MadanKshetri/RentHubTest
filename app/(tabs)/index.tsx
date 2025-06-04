// import {
// 	FlatList,
// 	ActivityIndicator,
// 	View,
// } from "react-native";
// // import products from "@/assets/products.json";
// import ProductListItem from "@/components/ProductListItem";
// import "@/global.css";
// import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
// import {  useState } from "react";
// import { Text } from "@/components/ui/text";
// import Categories from "@/components/categories";
// import FeaturedItems from "@/components/FeaturedItem";
// import Header from "@/components/Header";
// import { useGetItemsQuery } from "@/api/queries/itemQuery";	

// export default function HomeScreen() {
// 	const [refreshing, setRefreshing] = useState(false);
// 	// let error , data, isLoading = ""
// 	const { data, isLoading, error } = useGetItemsQuery();

// 	//this is the basic way of fetching the product from the API so   we use tanstack query for Global state management
// 	// const [products, setProduct] = useState();
// 	// useEffect(() => {
// 	// 	const fetchProducts = async () => {
// 	// 		const data = await listProducts();
// 	// 		setProduct(data);
// 	// 	};
// 	// 	fetchProducts();
// 	// }, []);

// 	// const{width} = useWindowDimensions();
// 	// const numColumns = width > 700 ? 3:2
// 	const numColumns = useBreakpointValue({
// 		default: 2,
// 		sm: 3,
// 		xl: 4,
// 	}) as number;

// 	const onfresh = () => {
// 		setRefreshing(false);
// 		setTimeout(() => setRefreshing(false), 2000);
// 	};

// 	if (isLoading) {
// 		return <ActivityIndicator />;
// 	}

// 	if (error) {
// 		return (
// 			<View>
// 				<Text>Error</Text>
// 			</View>
// 		);
// 	}
// 	// console.log(data)

// 	return (
// 			<>
// 				<FlatList
// 					key={numColumns}
// 					data={[]}
// 					stickyHeaderHiddenOnScroll={true}
// 					numColumns={numColumns}
// 					contentContainerClassName="gap-2"
// 					columnWrapperClassName="gap-2"
// 					ListHeaderComponent={
// 						<>
// 							<Header />
// 							<Categories />
// 							<FeaturedItems />
// 						</>
// 					}
// 					stickyHeaderIndices={[1]}
// 					renderItem={({ item }) => (
// 						<ProductListItem product={item} isLoading={false} />
// 					)}
// 					refreshing={refreshing}
// 					scrollEnabled={true}
// 				/>
// 			</>
// 	)
// }



import { StyleSheet, Text, View, ScrollView} from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import Categories from '@/components/categories'
import FeaturedItems from '@/components/FeaturedItem'

const index = () => {
  return (
	<ScrollView>
	<View>
		<Header/>
		<Categories/>
		<FeaturedItems/>
	</View>
	</ScrollView>
  )
}

export default index

const styles = StyleSheet.create({})