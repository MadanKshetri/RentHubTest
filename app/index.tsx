import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import products from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";
import {Button, ButtonText} from '@/components/ui/button'
import "@/global.css";


export default function HomeScreen() {

    return(
        <Button Variant="outline">
            <ButtonText>Press me</ButtonText>
        </Button>
    )
	// return (
	// 	<FlatList
	// 		data={products}
	// 		renderItem={({ item }) => <ProductListItem product={item} />}
	// 	/>
	// );
}
