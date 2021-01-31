import React from "react";
import { Text, TouchableWithoutFeedback, StyleSheet, View } from "react-native";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
    text: {
        color: "#ffffff",
        fontSize: 16,
    },
    container: {
        marginHorizontal: 10,
    },
});

const AppBarTab = ({ tabText, target }) => {
    return (
        <TouchableWithoutFeedback>
            <Link to={target}>
                <View style={styles.container}>
                    <Text style={styles.text}>{tabText}</Text>
                </View>
            </Link>
        </TouchableWithoutFeedback>
    );
};

export default AppBarTab;
