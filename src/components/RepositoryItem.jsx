import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        marginBottom: 10
    }
})

const RepositoryItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text>Full Name: {item.fullName}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Language: {item.language}</Text>
            <Text>Stars: {item.stargazersCount}</Text>
            <Text>Forks: {item.forksCount}</Text>
            <Text>Reviews: {item.reviewCount}</Text>
            <Text>Rating: {item.ratingAverage}</Text>
        </View>
    )
}

export default RepositoryItem;
