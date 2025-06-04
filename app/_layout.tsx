import { Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider>
        <Stack>
          {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)/signupScreen" options={{ headerShown: false }} />
          <Stack.Screen name="product/[id]" options={{ title: "Product", headerShown: true }} />
        </Stack>  
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
