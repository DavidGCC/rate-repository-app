import React from "react";
import { View, StyleSheet } from "react-native";

import StackedElement from "../../StackedElement";

const styles = StyleSheet.create({
    popularityContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 5,
    },
});

const CardPopularity = ({ item }) => {
    return (
        <View style={styles.popularityContainer}>
            <StackedElement topText={item.stargazersCount} botText="Stars" testID="stars"/>
            <StackedElement topText={item.forksCount} botText="Forks" testID="forks"/>
            <StackedElement topText={item.reviewCount} botText="Reviews" testID="reviews"/>
            <StackedElement topText={item.ratingAverage} botText="Rating" testID="rating"/>
        </View>
    );
};

export default CardPopularity;
