import React from "react";
import { View, StyleSheet, Image } from "react-native";

import StackedElement from "./StackedElement";
import Text from "./Text";

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        margin: 10,
        marginBottom: 0,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2.63,
        elevation: 5,
        padding: 5,
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 30,
        marginLeft: 10,
        borderRadius: 5,
    },
    header: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    headerText: {
        fontWeight: "700",
        marginBottom: 5,
        fontSize: 18
    },
    headerDescription: {
        color: "gray",
        marginBottom: 5,
        fontSize: 12
    },
    language: {
        backgroundColor: "#0390fc",
        flex: 0,
        textAlign: "center",
        borderRadius: 10,
        padding: 10,
        alignSelf: "flex-start",
        marginBottom: 5,
        fontSize: 13
    },
    headerTextContainer: {
        width: 300,
    },
    popularityContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 5
    },
});

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.header}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: item.ownerAvatarUrl,
                    }}
                />
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>
                        {item.fullName}
                    </Text>
                    <Text style={styles.headerDescription}>
                        {item.description}
                    </Text>
                    <Text style={styles.language}>
                        {item.language}
                    </Text>
                </View>
            </View>
            <View style={styles.popularityContainer}>
                <StackedElement
                    topText={item.stargazersCount}
                    botText="Stars"
                />
                <StackedElement 
                    topText={item.forksCount} 
                    botText="Forks" 
                />
                <StackedElement 
                    topText={item.reviewCount} 
                    botText="Reviews"
                />
                <StackedElement 
                    topText={item.ratingAverage} 
                    botText="Rating" 
                />
            </View>
        </View>
    );
};

export default RepositoryItem;
