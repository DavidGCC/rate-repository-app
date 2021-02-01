import React from "react";
import { FlatList, View, StyleSheet, ActivityIndicator } from "react-native";

import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";

const styles = StyleSheet.create({
    separator: {
        height: 5,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const { data, loading } = useRepository();
    if (loading) {
        return <ActivityIndicator size="large"></ActivityIndicator>;
    }

    const repositoryNodes = data
        ? data.repositories.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <RepositoryItem item={item} />}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingBottom: 150 }}    
        />
    );
};

export default RepositoryList;
