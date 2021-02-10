import React from "react";
import { View, StyleSheet } from "react-native";
import { format, parseISO } from "date-fns";

import Text from "../Text";

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginBottom: 0,
        padding: 10,
        borderWidth: 1,
    },
    header: {
        flexDirection: "row",
        marginBottom: 10
    },
    nameContainer: {
        marginLeft: 10,
    },
    nameText: {
        fontSize: 20,
        fontWeight: "700",
    },
    ratingContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderColor: "#235795",
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    ratingText: {
        fontSize: 23,
        fontWeight: "700",
        color: "#235795",
    },
    reviewText: {
        fontSize: 16
    },
});

const Review = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>{item.node.rating}</Text>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameText}>{item.node.user.username}</Text>
                    <Text style={styles.createdDate}>{format(parseISO(item.node.createdAt), "dd.MM.yyyy")}</Text>
                </View>
            </View>
            <View style={styles.reviewContainer}>
                <Text style={styles.reviewText}>{item.node.text}</Text>
            </View>
        </View>
    );
};

export default Review;
