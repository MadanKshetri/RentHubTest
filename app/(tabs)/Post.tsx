import React, { useState } from "react";
import {
	View,
	TextInput,
	Button,
	StyleSheet,
	Alert,
	ScrollView,
	Text,
	Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { useAuth } from "@/store/authStore";
export default function Post() {
	const router = useRouter();
	const token = useAuth(a=>a.token)

	const [categories, setCategories] = useState([]);
	const [loadingCategories, setLoadingCategories] = useState(true);
	const [categoryId, setCategoryId] = useState("");
	const [errors, setErrors]= useState<{message:string,code:number}>()

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await fetch("http://40.81.243.193/category",
					{
						headers: {
							Authorization: `Bearer ${token}`
						}
					}
				);
				const data = await response.json();
				console.log(data)
				if(data && data.statusCode && data.statusCode==401){
					console.log("fodsjlkf")
					setErrors({
						message: data.message,
						code: data.statusCode
					})
				}
				setCategories(data.data); // assuming data is an array of categories
				console.log(errors,"dfkhasdjfkl;ashjd;fklhas;lkdfjhkj;a")
			} catch (error) {
				console.error("Failed to fetch categories:", error);
				Alert.alert("Error", "Unable to load categories.");
			} finally {
				setLoadingCategories(false);
			}
		};

		fetchCategories();
	}, []);

	const [name, setName] = useState("");
	const [rate, setRate] = useState("");
	const [rateType, setRateType] = useState("");
	const [photos, setPhotos] = useState<string[]>([]);
	const [location, setLocation] = useState("");
	const [deposit, setDeposit] = useState("");
	const [description, setDescription] = useState("");

	const pickImage = async () => {
		const permissionResult =
			await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (permissionResult.granted === false) {
			Alert.alert("Permission to access camera roll is required!");
			return;
		}

		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsMultipleSelection: true,
			quality: 1,
		});

		if (!result.canceled) {
			const newUri = result.assets.map((asset) => asset.uri);
			setPhotos([...photos, ...newUri]);
		}
	};

	const handleSubmit = async () => {
		console.log("Submit pressed");
		if (
			!name ||
			!rate ||
			!rateType ||
			photos.length === 0 ||
			!categoryId ||
			!location ||
			!deposit
		) {
			Alert.alert("Missing fields", "Please fill all required fields.");
			return;
		}

		const formData = new FormData();
		formData.append("name", name);
		formData.append("rate", rate);
		formData.append("rateType", rateType);
		formData.append("categoryId", categoryId);
		formData.append("deposit", deposit);
		formData.append("description", description);
		formData.append("location", JSON.stringify({ address: location }));

		photos.forEach((uri, index) => {
			const fileName = uri.split("/").pop() || `photo_${index}.jpg`;
			const fileExt = fileName.split(".").pop()?.toLowerCase() || "jpg";
			const mimeType = fileExt === "png" ? "image/png" : "image/jpeg";

			formData.append("photos", {
				uri,
				name: fileName,
				type: mimeType,
			} as any);
		});

		try {
			// console.log(API_URL);

			console.log("madan");
			const response = await fetch(`http://40.81.243.193/item`, {
				method: "POST",
				body: formData,
			});
			console.log(response);

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const data = await response.json();
			console.log("Submission successful:", data);
			Alert.alert("Success", "Item submitted successfully!");
			// Optionally clear form or navigate
			// router.push('/some-page');
		} catch (error) {
			console.error("Error submitting form:", error);
			Alert.alert(
				"Submission Error",
				"There was an error submitting your data."
			);
		}
	};

	return (
		!errors && <ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.label}>Item Name *</Text>
			<TextInput style={styles.input} value={name} onChangeText={setName} />

			<Text style={styles.label}>Rate *</Text>
			<TextInput
				style={styles.input}
				value={rate}
				onChangeText={setRate}
				keyboardType="numeric"
			/>

			<Text style={styles.label}>Rate Type *</Text>
			<TextInput
				style={styles.input}
				placeholder="e.g. per hour, per day"
				value={rateType}
				onChangeText={setRateType}
			/>

			<Text style={styles.label}>Category *</Text>
			{loadingCategories ? (
				<ActivityIndicator size="small" color="#000" />
			) : (
				<View style={styles.pickerContainer}>
					<Picker
						onValueChange={(value) => setCategoryId(value)}
					>
						<Picker.Item label="Select a category" value="" />
						{categories.map((cat) => (
							<Picker.Item key={cat.id} label={cat.name} value={cat.id} />
						))}
					</Picker>
				</View>
			)}

			<Text style={styles.label}>Deposit Amount *</Text>
			<TextInput
				style={styles.input}
				value={deposit}
				onChangeText={setDeposit}
				keyboardType="numeric"
			/>

			<Text style={styles.label}>Location *</Text>
			<TextInput
				style={styles.input}
				placeholder="Address or place"
				value={location}
				onChangeText={setLocation}
			/>

			<Text style={styles.label}>Description</Text>
			<TextInput
				style={[styles.input, { height: 80 }]}
				value={description}
				onChangeText={setDescription}
				multiline
			/>

			<Text style={styles.label}>Photos *</Text>
			<Button title="Pick Images" onPress={pickImage} />
			<View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}>
				{photos.map((uri, index) => (
					<Image
						key={index}
						source={{ uri }}
						style={{ width: 80, height: 80, margin: 5, borderRadius: 6 }}
					/>
				))}
			</View>

			<View style={{ marginTop: 20 }}>
				<Button title="Submit Item" onPress={handleSubmit} />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: "#fff",
	},
	label: {
		fontWeight: "bold",
		marginTop: 10,
	},
	input: {
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 10,
		borderRadius: 8,
		marginBottom: 10,
		backgroundColor: "#f9f9f9",
	},
	pickerContainer: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 8,
		marginBottom: 10,
		backgroundColor: "#f9f9f9",
		overflow: "hidden",
	},
});
