import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "../Text";

import CardAvatar from "./CardAvatar";

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    headerText: {
        fontWeight: "700",
        marginBottom: 5,
        fontSize: 18,
    },
    headerDescription: {
        color: "gray",
        marginBottom: 5,
        fontSize: 12,
    },
    language: {
        backgroundColor: "#0390fc",
        flex: 0,
        textAlign: "center",
        borderRadius: 10,
        padding: 10,
        alignSelf: "flex-start",
        marginBottom: 5,
        fontSize: 17,
    },
    headerTextContainer: {
        width: 300,
        flex: 1
    },
});

const CardHeader = ({ item }) => {
    return (
        <View style={styles.header}>
            <CardAvatar url={item.ownerAvatarUrl} />
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText} testID="fullName">
                    {item.fullName}
                </Text>
                <Text style={styles.headerDescription} testID="description">{item.description}</Text>
                <Text style={styles.language} testID="language">{item.language}</Text>
            </View>
        </View>
    );
};

export default CardHeader;