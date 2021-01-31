import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import FormikTextInput from "./FormikTextInput";

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

const SignIn = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name="username" placeholder="Username" style={styles.input}/>
            <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} style={styles.input}/>
            <TouchableHighlight style={styles.buttonContainer} onPress={onSubmit}>
                <Text style={styles.button}>Sign In</Text>
            </TouchableHighlight>
        </View>
    );
};

export default SignIn;