import React from "react";
import { Pressable } from "react-native";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { TItemData } from "@/api/products";

export default function ProductListItem({ product, isLoading }:{
	product:TItemData, isLoading:boolean
}) {
	console.log("Rerender")
	// console.log(product.assets[0].url)
	return (
		!isLoading && <Link href={`/product/${product.id}`}asChild>
			<Pressable className="flex-1">
			<Card className="p-5 rounded-lg mx-auto  max-w-[360px]  flex-1 ">

				<Image
					source={{
						uri: product.assets[0] && product.assets[0].url,
					}}
					className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
					alt={`${product.name} image`}
					resizeMode="contain"
				/>
				<Text className="text-sm font-normal mb-2 text-typography-700">
					{product.name}
				</Text>

				<Heading size="md" className="mb-4">
					${product.rate}
				</Heading>
				<Heading size="md" className="mb-4">
					Location:{product.address}
				</Heading>
			</Card>
			</Pressable>
		</Link>
	);
}
