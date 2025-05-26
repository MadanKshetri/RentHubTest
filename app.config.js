import "dotenv/config";

export default {
  expo: {
    name: "RentHub",
    slug: "renthub",
    scheme: "renthub",
    "userInterfaceStyle": "automatic",
    "plugins": [
    "expo-router"
  ],

    extra: {
      apiUrl: process.env.EXPO_PUBLIC_API_URL,
    },
    
  },
};
