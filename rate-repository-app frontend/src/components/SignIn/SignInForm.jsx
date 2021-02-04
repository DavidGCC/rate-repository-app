import React from "react";
import FormikTextInput from "../FormikTextInput";
import * as yup from "yup";

import { Formik } from "formik";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    input: {
        height: 50,
        borderWidth: 1,
        marginBottom: 10,
        borderColor: "gray",
        borderRadius: 5,
        padding: 10
    },
    button: {
        backgroundColor: "#5482f7",
        height: 50,
        borderRadius: 10,
        textAlign: "center",
        fontSize: 30,
        color: "#fff"
    },
    buttonContainer: {
        borderRadius: 10
    }
});

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required("Username is required")
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
                    <TouchableHighlight
                        style={styles.buttonContainer}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.button}>Sign In</Text>
                    </TouchableHighlight>
                </View>
            )}
        </Formik>
    );
};

export default SignInForm;