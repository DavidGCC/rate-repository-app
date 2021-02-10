import React from "react";
import { TouchableHighlight, StyleSheet } from "react-native";

import Text from "./Text";

const styles = StyleSheet.create({
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
})

const PrimaryButton = ({ onPress, text, ...props }) => {
    return (
        <TouchableHighlight
            style={styles.buttonContainer}
            onPress={onPress}
            {...props}
        >
            <Text style={styles.button}>{text}</Text>
        </TouchableHighlight>
    );
};

export default PrimaryButton;