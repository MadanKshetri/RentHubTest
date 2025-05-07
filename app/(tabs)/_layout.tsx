import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#ffd33d",
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? "home-sharp" : "home-outline"}
							color={color}
							size={24}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="Search"
				options={{
					title: "Search",
					headerShown: true,
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? "search" : "search-outline"}
							color={color}
							size={24}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="Post"
				options={{
					title: "Post",
					headerShown: true,
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? "add-circle" : "add-circle-outline"}
							color={color}
							size={24}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="My Rentals"
				options={{
					title: "My Rentals",
					headerShown: true,
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? "list" : "list-outline"}
							color={color}
							size={24}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="Profile"
				options={{
					title: "Profile",
					headerShown: true,
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? "person" : "person-outline"}
							color={color}
							size={24}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
