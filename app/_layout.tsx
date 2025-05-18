import { Stack, Slot } from "expo-router";
import { View } from "react-native";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";




const queryClient = new QueryClient()


export default function RootLayout() {
	return (
		<QueryClientProvider client={queryClient}>
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
		</QueryClientProvider> 	
	);
}
