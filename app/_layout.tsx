import { Stack, Slot } from "expo-router";
import { View } from "react-native";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function RootLayout() {
	return (
		<GluestackUIProvider>
			<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen
					name="cart"
					options={{ title: "Home", headerShown: false }}
				/>
				<Stack.Screen
					name="product/[id]"
					options={{ title: "product", headerShown: true }}
				/>
			</Stack>
		</GluestackUIProvider>
	);
}
