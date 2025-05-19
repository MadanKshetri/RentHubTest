import "dotenv/config";

export default {
  expo: {
    name: "RentHub",
    slug: "renthub",
    scheme: "renthub",
    extra: {
      apiUrl: process.env.EXPO_PUBLIC_API_URL,
    },
  },
};
