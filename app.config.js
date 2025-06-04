import "dotenv/config";

export default {
	expo: {
		name: "RentHub",
		slug: "renthub",
		scheme: "renthub",
		userInterfaceStyle: "automatic",
		plugins: ["expo-router"],
		owner: "madankshetri",
		android: {
			package: "com.madankshetri.renthub", // ← must be unique and reverse-DNS style
		},
		extra: {
			apiUrl: process.env.EXPO_PUBLIC_API_URL,
			eas: {
				projectId: "92b68797-efd8-4d16-a1fa-e8aa50b6c24f",
			},
		},
	},
};
