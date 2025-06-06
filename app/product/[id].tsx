import { Text } from "@/components/ui/text";
import { useLocalSearchParams } from "expo-router";
import products from "@/assets/products.json";
import { ActivityIndicator, View } from "react-native";
import React from "react";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { VStack } from "@/components/ui/vstack";
import { Link } from "expo-router";
import { Stack, Slot } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "@/api/products";
import { useCart } from "@/store/cartStore";
export default function ProductDetailsScreen() {
	const { id } = useLocalSearchParams<{ id: string }>(); 
	// const product = products.find((p) => p.id === Number(id));

	const addProduct = useCart((state)=> state.addProduct);
	const cartItems = useCart((state)=> state.items);
	console.log(JSON.stringify(cartItems, null, 2))
	const { data: product, isFetching, error } = useQuery({
		queryKey: ['products', id], 	
		queryFn: () => fetchProductById(Number(id)),
	});
      
	const addToCart = () => {
		addProduct(product);
	}

		if (isFetching){
			return <ActivityIndicator/>
		}

	if (error){
       <Text>Product not found</Text>
	}


	return (
		<Box className=" flex-1 items-center p-3">
			<Stack.Screen options={{ title: product.name, headerShown: true }} />
			<Card className="p-5 rounded-lg max-w-[960px]  flex-1">
				<Image
					source={{
						uri: product.image,
					}}
					className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
					alt={"${product.name} image"}
					resizeMode="contain"
				/>
				<Text className="text-sm font-normal mb-2 text-typography-700">
					{product.name}
				</Text>
				<VStack className="mb-6">
					<Heading size="md" className="mb-4">
						{product.price}
					</Heading>
					<Text size="sm">{product.description}</Text>
				</VStack>
				<Box className="flex-col sm:flex-row">
					<Button onPress={addToCart} className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
						<ButtonText size="sm">Rent Now</ButtonText>
					</Button>
					<Button
						variant="outline"
						className="px-4 py-2 border-outline-300 sm:flex-1"
					>
						<ButtonText size="sm" className="text-typography-600">
							Wishlist
						</ButtonText>
					</Button>
				</Box>
			</Card>
		</Box>
	);
}
