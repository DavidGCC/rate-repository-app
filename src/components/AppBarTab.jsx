import React from "react";
import { Text, TouchableWithoutFeedback, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text: {
        color: "#ffffff",
        flex: 1,
        fontSize: 16
    },
});

const AppBarTab = ({ tabText }) => {
    return (
        <TouchableWithoutFeedback>
            <Text style={styles.text}>{tabText}</Text>
        </TouchableWithoutFeedback>
    );
};

export default AppBarTab;
