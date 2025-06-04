// import { Button, ButtonText } from "@/components/ui/button";
// import { FormControl } from "@/components/ui/form-control";
// import { Heading } from "@/components/ui/heading";
// import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
// import { Text } from "@/components/ui/text";
// import { VStack } from "@/components/ui/vstack";
// import { EyeIcon, EyeOffIcon } from "lucide-react-native";
// import React from "react";
// import { useState } from "react";
// import { HStack } from "@/components/ui/hstack";
// import { useMutation } from "@tanstack/react-query";
// import { login, signup } from "@/api/auth";
// import { Link, useRouter } from "expo-router";
// import { router } from "expo-router";
// import { Redirect } from 'expo-router';
// import { useAuth } from "@/store/authStore";

// export default function loginScreen() {

//     const router = useRouter();

// 	// useState is the react hook that allows functional components to manage state	(i.e store and update data dynamically)

// 	const [showPassword, setShowPassword] = useState(false);
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");

// 	const setUser = useAuth(s => s.setUser);
// 	const setToken = useAuth(s =>s. setToken);
// 	const isLoggedIn = useAuth((s => !!s.token));

// 	//useMutation hook is using from React Query (also know as transtack query). its a hook that helps you perform data modifying operations like PUT, POST, DELETE(i.e not fetching) it is mostly used in handling the things  like submitting the form, logging and posting a data. It gives tools to manage loading , success, error easily.

// 	const loginMutation = useMutation({
// 		mutationFn: () => login(email, password),
// 		onSuccess: (data) => {
// 			console.log("Success");
// 			console.log(data.token)
// 			if (data.data){
// 				setToken(data.data.token);
// 			}
// 			router.replace("/(tabs)");
// 		},	
// 		onError: () => {
// 			console.log("Error");
// 		},
// 	});

// 	// This tiny function is  simply toggling a boolean react state usually to show/hide a password field.
// 	const handleState = () => {
// 		setShowPassword((showState) => {
// 			return !showState;
// 		});
// 	};

// 	if (isLoggedIn) {
// 		return <Redirect href={"/"}/>
// 	}

// 	return (
// 		<FormControl className="p-4 border rounded-lg max-w-[500px] border-outline-300 bg-white m-2">
// 			<VStack space="xl">
// 				<Heading className="text-typography-900 leading-3 pt-3 text-base/6 ">Login</Heading>

// 				{/* Email */}
// 				<VStack space="xs">
// 					<Text className="text-typography-500">Email</Text>
// 					<Input className="min-w-[250px]">
// 						<InputField value={email} onChangeText={setEmail} type="text" />
// 					</Input>
// 				</VStack>

// 				{/* Password */}
// 				<VStack space="xs">
// 					<Text className="text-typography-500">Password</Text>
// 					<Input className="text-center">
// 						<InputField
// 							value={password}
// 							onChangeText={setPassword}
// 							type={showPassword ? "text" : "password"}
// 						/>
// 						<InputSlot className="pr-3" onPress={handleState}>
// 							<InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
// 						</InputSlot>
// 					</Input>
// 				</VStack>

// 				{/*Here when the user click on the signup button the user navigate to the signup screen by router.push   */}

// 				<HStack space="sm">
// 					<Button
// 						className="ml-auto flex-1"
// 						variant="outline"
// 						onPress={() => router.push("(auth)/signupScreen")}
// 					>
// 						<ButtonText>Sign up</ButtonText>
// 					</Button>

// 					{/* When the user click on the sign in  button then the loginMutation function is called and the mutatefn gather the latest information calls for the API  */}

// 					<Button
// 						className="ml-auto flex-1"
// 						onPress={() => loginMutation.mutate()}
// 					>
// 						<ButtonText>Sign in</ButtonText>
// 					</Button>
// 				</HStack>
// 			</VStack>
// 		</FormControl>
// 	);
// }
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from 'yup';

const passwordSchema = Yup.object()
export default function login() {
  return (
	<View>
	  <Text>login</Text>
	</View>
  )
}

const styles = StyleSheet.create({})

























