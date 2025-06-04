import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	Animated,
	ScrollView
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import { Link } from "expo-router";
import loginScreen from "@/app/(auth)/login";
import { useEffect, useRef } from "react";

 const Header = () => {
	const insets = useSafeAreaInsets();
	const heightAnim = useRef(new Animated.Value(0)).current;

useEffect(() => {
  Animated.timing(heightAnim, {
    toValue: 100,
    duration: 1000,
    useNativeDriver: false, // layout animations don't support native driver
  }).start();
})	

	return (
		<ScrollView stickyHeaderHiddenOnScroll={false}>
		<View style={[styles.container, { paddingTop: insets.top }]}>
			<View style={styles.topHeader}>
				<Text style={styles.logoTxt}>RentHub</Text>
				<View style={styles.buttonContainer}>
					
					<View>
						<Link href={"/(auth)/login"} asChild>
							<TouchableOpacity style={styles.loginButton}>
								<Text style={styles.loginText}>Log in</Text>
							</TouchableOpacity>
						</Link>	
					</View>
                     <View>
						<Link href={"/(auth)/signupScreen"} asChild>
					<TouchableOpacity style={styles.signupButton}>
						<Text style={styles.signupText}>Sign up</Text>
					</TouchableOpacity>
					</Link>
					</View>
				</View>
			</View>
			<View style={styles.slogan}>
				<Text style={styles.sloganTxt}> Rent Anything</Text>
				<Text style={styles.sloganTxtB}> Earn Easily !</Text>
			</View>
			<View style={styles.searchBar}>
				<Feather
					name="search"
					size={20}
					color="#888"
					style={styles.searchIcon}
				/>
				<TextInput
					placeholder="search for trekking gears, tripod..."
					placeholderTextColor="#888"
					style={styles.txtInput}
				/>
			</View>
		</View>
		</ScrollView>
		
	);
};

const styles = StyleSheet.create({
	container: {
		height: 250,
		backgroundColor: "#FBAE3C",
		justifyContent: "space-between",
		paddingHorizontal: 15,
		borderBottomRightRadius: 60,
	},
	topHeader: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	logoTxt: {
		fontSize: 24,
		fontWeight: "900",
		color: "black",
		letterSpacing: 2.5,
	},

	buttonContainer: {
		flexDirection: "row",
		marginTop: 10,
	},
	loginButton: {
		backgroundColor: "#1E3A8A", // Dark blue
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderRadius: 20,
		marginRight: 10,
	},
	loginText: {
		color: "#fff",
		fontWeight: "bold",
		lineHeight: 15,
	},
	signupButton: {
		backgroundColor: "#3B82F6", // Blue
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderRadius: 20,
	},
	signupText: {
		color: "#fff",
		fontWeight: "bold",
		lineHeight: 15,
	},
	slogan: {
		justifyContent: "center",
		alignItems: "center",
	},
	sloganTxt: {
		fontSize: 28,
		fontWeight: "900",
		color: "#1f2c5c",
		letterSpacing: 1.5,
	},
	sloganTxtB: {
		fontSize: 22,
		color: "#ffffff",
		marginTop: 4,
	},

	searchBar: {
		flexDirection:"row",
		gap:5,
		marginBottom:25,
		paddingHorizontal:12,
		backgroundColor:"#fff",
		borderRadius:10,
	},
	searchIcon: {
		marginTop:7,

	},
	txtInput: {
		backgroundColor:"white"
		
	},
});
 export default Header;

