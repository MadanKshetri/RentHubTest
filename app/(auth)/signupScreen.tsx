// // app/registerScreen.js

// import React, { useState } from "react";
// import { VStack } from "@/components/ui/vstack";
// import { Text } from "@/components/ui/text";
// import { Heading } from "@/components/ui/heading";
// import { Input, InputField } from "@/components/ui/input";
// import { Button, ButtonText } from "@/components/ui/button";
// import { FormControl } from "@/components/ui/form-control";
// import { useMutation } from "@tanstack/react-query";
// import { signup } from "@/api/auth";

// export default function RegisterScreen() {
//   const [fullName, setFullName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [address, setAddress] = useState("");

//     const signUpMutation = useMutation({
// 			mutationFn: () => signup(email, password, address, phone, fullName),
// 			onSuccess: (data) => {
// 				console.log("Success signup:", data);
// 			},
// 			onError: () => {
// 				console.log("Error:", Error);
// 			},
// 		});

//   return (
//     <FormControl className="p-4 border rounded-lg max-w-[500px] border-outline-300 bg-white m-2">
//       <VStack space="xl">
//         <Heading className="text-typography-900 leading-3 pt-3">Register</Heading>

//         <VStack space="xs">
//           <Text className="text-typography-500">Full Name</Text>
//           <Input><InputField value={fullName} onChangeText={setFullName} /></Input>
//         </VStack>

//         <VStack space="xs">
//           <Text className="text-typography-500">Phone</Text>
//           <Input><InputField value={phone} onChangeText={setPhone} keyboardType="phone-pad" /></Input>
//         </VStack>

//         <VStack space="xs">
//           <Text className="text-typography-500">Email</Text>
//           <Input><InputField value={email} onChangeText={setEmail} keyboardType="email-address" /></Input>
//         </VStack>

//         <VStack space="xs">
//           <Text className="text-typography-500">Password</Text>
//           <Input><InputField value={password} onChangeText={setPassword} secureTextEntry /></Input>
//         </VStack>

//         <VStack space="xs">
//           <Text className="text-typography-500">Address</Text>
//           <Input><InputField value={address} onChangeText={setAddress} /></Input>
//         </VStack>

//         <Button onPress={() => signUpMutation.mutate()}>
//           <ButtonText>Register</ButtonText>
//         </Button>
//       </VStack>
//     </FormControl>
//   );
// }

import React, { useState } from "react";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { useMutation } from "@tanstack/react-query";
import { signup } from "@/api/auth";
import { ScrollView } from "react-native";
import { Alert } from "react-native";
import { useRouter } from "expo-router";

export default function RegisterScreen() {
	const [fullName, setFullName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [address, setAddress] = useState("");

	const router = useRouter  ();

	const handleRegister = () => {
		if (!fullName || !phone || !email || !password || !address) {
			Alert.alert("Validation Error", "Please fill in all fields.");
			return;
		}

		signUpMutation.mutate();
	};

	const signUpMutation = useMutation({
		mutationFn: () => signup({ address, phone, email, fullName, password }),
		onSuccess: (data) => {
			console.log("✅ Success signup:", data);
			Alert.alert("Success", "Registration successful!");
			router.push("(auth)/login");
		},
		// onError: (error,data) => {
		//   console.error("❌ Signup error:", error?.message || error);
		// },

		onError: (error) => {
			console.error("❌ Signup error:", error?.message || error);
			Alert.alert(
				"Error",
				error?.message || "Something went wrong. Please try again."
			);
		},
	});

	return (
		<ScrollView>
			<FormControl className="p-4 border rounded-lg max-w-[500px] border-outline-300 bg-white m-2">
				<VStack space="xl">
					<Heading className="text-typography-900 leading-3 pt-3">
						Register
					</Heading>

					<VStack space="xs">
						<Text className="text-typography-500">Full Name</Text>
						<Input>
							<InputField value={fullName} onChangeText={setFullName} />
						</Input>
					</VStack>

					<VStack space="xs">
						<Text className="text-typography-500">Phone</Text>
						<Input>
							<InputField
								value={phone}
								onChangeText={setPhone}
								keyboardType="phone-pad"
							/>
						</Input>
					</VStack>

					<VStack space="xs">
						<Text className="text-typography-500">Email</Text>
						<Input>
							<InputField
								value={email}
								onChangeText={setEmail}
								keyboardType="email-address"
							/>
						</Input>
					</VStack>

					<VStack space="xs">
						<Text className="text-typography-500">Password</Text>
						<Input>
							<InputField
								value={password}
								onChangeText={setPassword}
								secureTextEntry
							/>
						</Input>
					</VStack>

					<VStack space="xs">
						<Text className="text-typography-500">Address</Text>
						<Input>
							<InputField value={address} onChangeText={setAddress} />
						</Input>
					</VStack>
					{/* <Button onPress={() => signUpMutation.mutate()}>
           <ButtonText>Register</ButtonText>
       </Button> */}

					<Button onPress={handleRegister}>
						<ButtonText>Register</ButtonText>
					</Button>
				</VStack>
			</FormControl>
		</ScrollView>
	);
}
