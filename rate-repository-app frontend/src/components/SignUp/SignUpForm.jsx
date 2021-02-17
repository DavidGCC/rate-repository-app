import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { StyleSheet, View } from "react-native";
import { BackButton } from "react-router-native";
import { Button } from "react-native-paper";

import theme from "../../theme";
import FormikTextInput from "../FormikTextInput";

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    input: {
        height: 60,
        borderWidth: 1,
        marginBottom: 10,
        borderColor: "gray",
        borderRadius: 5,
        padding: 10,
        fontSize: 20,
    },
    button: {
        backgroundColor: theme.colors.buttonPrimary
    }
});

const initialValues = {
    username: "",
    password: "",
    confirmPassword: "",
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required("Username is required")
        .matches(/^[a-zA-Z0-9.\S]+$/gi, "Username cannot contain spaces"),
    password: yup
        .string()
        .matches(/^[.\S]+$/g, "Password can't contain spaces")
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
});

const SignUpForm = ({ handleSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ handleSubmit }) => (
                <View style={styles.container}>
                    <FormikTextInput
                        placeholder="Username"
                        name="username"
                        style={styles.input}
                    />
                    <FormikTextInput
                        placeholder="Password"
                        name="password"
                        style={styles.input}
                        secureTextEntry
                    />
                    <FormikTextInput
                        placeholder="confirmPassword"
                        name="confirmPassword"
                        style={styles.input}
                        secureTextEntry
                    />
                    <Button onPress={handleSubmit} mode="contained" style={styles.button}>Sign Up</Button>
                    <BackButton></BackButton>
                </View>
            )}
        </Formik>
    );
};

export default SignUpForm;