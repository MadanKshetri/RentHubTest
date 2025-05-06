import { Slot, Stack } from "expo-router";
import { View } from "react-native";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function RootLayout() {
	return (
		<GluestackUIProvider>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ title: "RentHub", headerShown: true }}
				/>
				<Stack.Screen
					name="cart"
					options={{ title: "Home", headerShown: false }}
				/>
			</Stack>
		</  GluestackUIProvider>
	);
}
