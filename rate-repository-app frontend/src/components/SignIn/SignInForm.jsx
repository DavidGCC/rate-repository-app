import React from "react";
import FormikTextInput from "../FormikTextInput";
import * as yup from "yup";
import { BackButton } from "react-router-native";

import { Formik } from "formik";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

import PrimaryButton from "../PrimaryButton";

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
});

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required("Username is required"),
    password: yup
        .string()
        .required("Password is required")
});

const SignInForm = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => (
                <View style={styles.container}>
                    <FormikTextInput
                        name="username"
                        placeholder="Username"
                        style={styles.input}
                    />
                    <FormikTextInput
                        name="password"
                        placeholder="Password"
                        secureTextEntry={true}
                        style={styles.input}
                    />
                    <PrimaryButton text="Sign In" onPress={handleSubmit} />
                    <BackButton></BackButton>
                </View>
            )}
        </Formik>
    );
};

export default SignInForm;