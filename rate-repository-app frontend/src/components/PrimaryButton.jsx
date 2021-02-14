import React from "react";
import { TouchableHighlight, StyleSheet } from "react-native";

import Text from "./Text";

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#5482f7",
        height: 50,
        borderRadius: 10,
        textAlign: "center",
        color: "#fff",
        fontSize: 30
    },
    buttonContainer: {
        borderRadius: 10,
    },
    dangerButton: {
        backgroundColor: "#C82333"
    }
})

const PrimaryButton = ({ onPress, text, style, ...props }) => {
    const buttonStyle = style ? style : styles.button;
    return (
        <TouchableHighlight
            style={styles.buttonContainer}
            onPress={onPress}
            {...props}
        >
            <Text style={buttonStyle}>{text}</Text>
        </TouchableHighlight>
    );
};

export default PrimaryButton;