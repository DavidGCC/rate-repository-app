import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    errorBorder: {
        borderWidth: 2,
        borderColor: "#d73a4a"
    }
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [
        style,
        error && styles.errorBorder
    ];

    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;