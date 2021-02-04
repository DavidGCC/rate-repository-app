import React from "react";
import { View, StyleSheet } from "react-native";

import CardHeader from "./CardHeader";
import CardPopularity from "./CardPopularity";

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
    }
});

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.cardContainer} testID="RepoCard">
            <CardHeader item={item} />
            <CardPopularity item={item} />
        </View>
    );
};

export default RepositoryItem;
