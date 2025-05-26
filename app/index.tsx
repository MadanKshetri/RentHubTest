// import { FlatList, useWindowDimensions, RefreshControl, ActivityIndicator } from "react-native";
// // import products from "@/assets/products.json";
// import ProductListItem from "@/components/ProductListItem";
// import "@/global.css";
// import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
// import { useEffect, useState } from "react";
// import { listProducts } from "@/api/products";
// import { useQuery } from "@tanstack/react-query";
// import { View } from "lucide-react-native";
// import { Text } from "@/components/ui/text";
// import { ScrollView } from "react-native";
// import profile from "./(tabs)/Profile";
// export default function HomeScreen() {
// 	const [refreshing, setRefreshing] = useState(false);
// 	const {  data,isLoading, error } = useQuery({
// 		queryKey: ["products"],
// 		queryFn: listProducts,
// 	});

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


// if (isLoading){
// 	return <ActivityIndicator/>
// }

// if (error){
// 	return <View> 
// 			<Text>Error</Text>
// 		</View> 
// }

// 	return (
// 		data && <ScrollView>
// 		<FlatList
// 			key={numColumns}
// 			data={data.data}
// 			numColumns={numColumns}
// 			contentContainerClassName="gap-2"
// 			columnWrapperClassName="gap-2"
// 			renderItem={({item}) => <ProductListItem product={item} isLoading={isLoading} />}
// 			refreshing={refreshing}
// 			scrollEnabled = {false}
// 		/>
// 		</ScrollView>
// 		);
// }



import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { AntDesign } from "@expo/vector-icons";
import GoogleIcon from "@/components/GoogleIcon";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
 import "@/global.css";


type Props = {};

export default function index() {
	return (
		<>
			<ImageBackground
				source={require("@/assets/rentHub.png")}
				style={{ flex: 1 }}
				resizeMode="cover"
			>
				<View style={styles.conatiner}>
					<LinearGradient
						colors={["transparent", "rgba(255, 255, 255, 0.9)"]}
						locations={[0, 0.5, 1]}
						start={{ x: 0.5, y: 0 }}
						end={{ x: 0.5, y: 1 }}
						style={styles.background}
					>
						<View style={styles.wrapper}>
							<Link href={"/"} asChild>
								<TouchableOpacity>
									<View>
										<Animated.Text
											style={styles.title}
											entering={FadeInRight.delay(500).duration(300).springify()}
										>
											RentHub
										</Animated.Text>
										<Animated.Text
											style={styles.description}
											entering={FadeInRight.delay(500).duration(300).springify()}
										>
											{" "}
											Rent anything Earn easily!
										</Animated.Text>
									</View>
								</TouchableOpacity>
							</Link>

							<View style={styles.socialWrapper}>
								<Animated.View entering={FadeInDown.delay(500).duration(500)}>
									<Link href={"/"} asChild>
										<TouchableOpacity style={styles.button}>
											<Ionicons name="logo-facebook" size={20} color="black" />
											<Text style={styles.btnTxt}>continue with Facebook</Text>
										</TouchableOpacity>
									</Link>
								</Animated.View>
							</View>

							<View style={styles.socialWrapper}>
								<Animated.View entering={FadeInDown.delay(700).duration(500)}>
									<Link href={"/"} asChild>
										<TouchableOpacity style={styles.button}>
											<GoogleIcon width={20} height={20} />

											<Text style={styles.btnTxt}>continue with Google</Text>
										</TouchableOpacity>
									</Link>
								</Animated.View>
							</View>

							{/* <View style={styles.socialWrapper}>
								<Animated.View entering={FadeInDown.delay(1100).duration(500)}>
									<Link href={"/"} asChild>
										<TouchableOpacity style={styles.button}>
											<Ionicons name="logo-apple" size={20} color="black" />
											<Text style={styles.btnTxt}>continue with Apple</Text>
										</TouchableOpacity>
									</Link>
								</Animated.View>
							</View> */}

							<Text style={styles.loginTxt}>
								Already have an account?{" "}
								<Link href={"/(auth)/login"} asChild>
									<TouchableOpacity>
										<Text style={styles.loginTxtspan}>SignIn</Text>
									</TouchableOpacity>
								</Link>
							</Text>
						</View>
					</LinearGradient>
				</View>
			</ImageBackground>
		</>
	);
}

const styles = StyleSheet.create({
	conatiner: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	background: {
		flex: 1,
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		justifyContent: "flex-end",
	},
	wrapper: {
		paddingBottom: 50,
		alignItems: "center",
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 25,
		marginBottom: 5,
		fontWeight: "900",
		color: "#7d32a8",
		letterSpacing: 2.4,
		paddingLeft: 50,
	},

	description: {
		fontSize: 14,
		lineHeight: 20,
		color: "#7d32a8",
		letterSpacing: 1.4,
		marginBottom: 20,
	},

	socialWrapper: {
		marginBottom: 7,
	},

	button: {
		flexDirection: "row",
		padding:10,
		borderColor: "grey",
		borderWidth: StyleSheet.hairlineWidth,
		alignItems: "center",
		justifyContent: "center",
		gap: 5,
		borderRadius: 25,
		minWidth:200,

	},

	btnTxt: {
		fontSize: 14,
		fontWeight: "600",
		color: "black",
	},
	loginTxt: {
		marginTop: 30,
		lineHeight: 24,
		color: "black",
		fontSize: 14,
	},
	loginTxtspan: {
		color: "blue",
		fontWeight: "600",
	},
});
