// import {
// 	ScrollView,
// 	StyleSheet,
// 	Text,
// 	View,
// 	TextInput,
// 	SafeAreaView,
// 	TouchableOpacity,
// } from "react-native";
// import React, { useState } from "react";
// import * as Yup from "yup";
// import { Formik } from "formik";
// import { blue } from "react-native-reanimated/lib/typescript/Colors";

// const signUpSchema = Yup.object().shape({
// 	fullName: Yup.string()
// 		.min(2, "Name must be minimum of 2 characters")
// 		.required("Name is required"),

// 	Email: Yup.string()
// 		.email("Enter a valid Email")
// 		.required("Email is required"),

// 	phone: Yup.string().matches(
// 		/^[0-9]{10}$/,
// 		"Phone number must be exactly 10 digits"
// 	),

// 	address: Yup.string().required("address is required"),

// 	password: Yup.string()
// 		.min(6, "Password must be minimum 6 character")
// 		.required("password is required"),

// 	confirmPassword: Yup.string()
// 		.required("confirm password is required")
// 		.oneOf([Yup.ref("password")], "Password must match"),
// });

// const signupScreen = () => {
// 	const [fullName, setfullName] = useState("");
// 	const [email, setemail] = useState("");
// 	const [phone, setPhone] = useState("");
// 	const [address, setAddress] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [confirmPassword, setConfirmPassword] = useState("");
// 	return (
// 		<ScrollView keyboardShouldPersistTaps={"handled"}>
// 			<SafeAreaView>
// 				<View style={styles.appConatainer}>
// 					<Text style={styles.title}>Create a RentHub Account</Text>
// 					<Formik
// 						initialValues={{
// 							email: "",
// 							password: "",
// 							fullName: "",
// 							address: "",
// 							confirmPassword: "",
// 							phone: "",
// 						}}
// 						validationSchema={signUpSchema}
// 						onSubmit={(values) => {
// 							console.log("Form values", values);
// 						}}
// 					>
// 						{({
// 							values,
// 							errors,
// 							touched,
// 							handleChange,
// 							handleBlur,
// 							handleSubmit,
// 							/* and other goodies */
// 						}) => (
// 							<View>
// 								{/* Full name Here */}
// 								<TextInput
// 									style={styles.input}
// 									placeholder="FullName"
// 									onChangeText={handleChange("fullName")}
// 									onBlur={handleBlur("fullName")}
// 									value={values.fullName}
// 								/>
// 								{touched.fullName && errors.fullName && (
// 									<Text style={styles.error}>{errors.fullName}</Text>
// 								)}

// 								<TextInput
// 									style={styles.input}
// 									placeholder="Email"
// 									onChangeText={handleChange("email")}
// 									onBlur={handleBlur("email")}
// 									value={values.email}
// 								/>
// 								{touched.email && errors.email && (
// 									<Text style={styles.error}>{errors.email}</Text>
// 								)}

// 								{/* Address Here */}
// 								<TextInput
// 									style={styles.input}
// 									onChangeText={handleChange("address")}
// 									placeholder="Address"
// 									onBlur={handleBlur("address")}
// 									value={values.address}
// 								/>
// 								{touched.address && errors.address && (
// 									<Text style={styles.error}>{errors.address}</Text>
// 								)}
// 								{/* Phone Here */}
// 								<TextInput
// 									style={styles.input}
// 									onChangeText={handleChange("phone")}
// 									placeholder="Phone"
// 									onBlur={handleBlur("phone")}
// 									value={values.phone}
// 								/>
// 								{touched.phone && errors.phone && (
// 									<Text style={styles.error}>{errors.phone}</Text>
// 								)}
// 								{/* password here */}
// 								<TextInput
// 									style={styles.input}
// 									onChangeText={handleChange("password")}
// 									placeholder="Password"
// 									onBlur={handleBlur("password")}
// 									value={values.password}
// 								/>
// 								{touched.password && errors.password && (
// 									<Text style={styles.error}>{errors.password}</Text>
// 								)}

// 								{/* confirm  password here */}
// 								<TextInput
// 									style={styles.input}
// 									onChangeText={handleChange("confirmPassword")}
// 									placeholder=" confirm Password"
// 									onBlur={handleBlur("confirmpassword")}
// 									value={values.confirmPassword}
// 								/>
// 								{touched.confirmPassword && errors.confirmPassword && (
// 									<Text style={styles.error}>{errors.confirmPassword}</Text>
// 								)}

// 								{/* submit password */}
// 								<TouchableOpacity style={styles.button}>
// 									<Text style={styles.buttonTxt} onPress={() => handleSubmit()}>
// 										{" "}
// 										Sign Up
// 									</Text>
// 								</TouchableOpacity>
// 							</View>
// 						)}
// 					</Formik>
// 				</View>
// 			</SafeAreaView>
// 		</ScrollView>
// 	);
// };

// export default signupScreen;

// const styles = StyleSheet.create({
// 	appConatainer: {
// 		flex: 1,
// 		padding: 50,
// 		backgroundColor: "#fff",
// 		justifyContent: "center",
// 	},
// 	title: {
// 		fontSize: 24,
// 		fontWeight: "bold",
// 		color: "orange",
// 		marginBottom: 15,
// 		textAlign: "center",
// 	},
// 	input: {
// 		borderWidth: 1,
// 		color: "#aaa",
// 		padding: 12,
// 		marginVertical: 8,
// 		borderRadius: 8,
// 	},
// 	error: {
// 		color: "red",
// 		marginLeft: 5,
// 		fontSize: 12,
// 	},
// 	button: {
// 		backgroundColor: "orange",
// 		padding: 14,
// 		borderRadius: 8,
// 		alignItems: "center",
// 		marginTop: 16,
// 	},
// 	buttonTxt: {
// 		color: "#fff",
// 		fontWeight: "bold",
// 	},
// });


  import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    
  } from "react-native";
  import React from "react";
  import { Formik } from "formik";
  import * as Yup from "yup";
  import { Link } from "expo-router";
  import { useSignupMutation } from "@/api/muatation/userMutation";

  // Validation schema
  const signUpSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    // confirmPassword: Yup.string()
    //   .oneOf([Yup.ref("password")], "Passwords must match")
    //   .required("Confirm Password is required"),
  });

  const SignUpScreen = () => {

  const signUpMutation = useSignupMutation()
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <Text style={styles.title}>Create your First RentHub Account</Text>
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              phone: "",
              address: "", 
              password: "",
              // confirmPassword: "",
            }}  
            validationSchema={signUpSchema}
            onSubmit={ (values) => {
                signUpMutation.mutate(values, {
                  onSuccess:(data)=>{
                    console.log(data)
                  }
                })
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                {/* Full Name */}
                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  value={values.fullName}
                />
                {touched.fullName && errors.fullName && (
                  <Text style={styles.error}>{errors.fullName}</Text>
                )}

                {/* Email */}
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                {touched.email && errors.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                )}

                {/* Phone */}
                <TextInput
                  style={styles.input}
                  placeholder="Phone"
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  value={values.phone}
                  keyboardType="numeric"
                />
                {touched.phone && errors.phone && (
                  <Text style={styles.error}>{errors.phone}</Text>
                )}

                {/* Address */}
                <TextInput
                  style={styles.input}
                  placeholder="Address"
                  onChangeText={handleChange("address")}
                  onBlur={handleBlur("address")}
                  value={values.address}
                />
                {touched.address && errors.address && (
                  <Text style={styles.error}>{errors.address}</Text>
                )}

                {/* Password */}
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                {touched.password && errors.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}

                {/* Confirm Password */}
                {/* <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  secureTextEntry
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.error}>{errors.confirmPassword}</Text>
                )} */}

                {/* Submit Button */}
                <TouchableOpacity style={styles.button} onPress={()=>{handleSubmit()}}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
          <View style={styles.footer}>
        <Text style={styles.firstText}> Already have an Account ?</Text>
        <Link href={"/login"}>
        <Text style={styles.signin}>&nbsp; Sign IN </Text>
        </Link>
      </View>

        </View>
      </ScrollView>
    );
  };

  export default SignUpScreen;

  // Styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#fff",
    },
    title: {
      fontSize: 26,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
      color: "orange",
    marginTop:20,
    },
    input: {
      borderWidth: 1,
      borderColor: "#aaa",
      borderRadius: 8,
      padding: 12,
      marginVertical: 8,
    },
    error: {
      color: "red",
      marginLeft: 5,
      fontSize: 12,
    },
    button: {
      backgroundColor: "orange",
      padding: 14,
      borderRadius: 8,
      alignItems: "center",
      marginTop: 16,
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
    },
    footer:{
    flexDirection:"row",
    textAlign:"center",
    justifyContent:"center",
    marginTop:5,

    },
    firstText:{},
    signin:{
    color:"blue",
    fontWeight:"bold",
    },
    
    
  });

