import React from "react";
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import { useHistory, BackButton } from "react-router-native";

import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator}></View>;

const RepositoryListContainer = ({ repositories }) => {
    const history = useHistory();

    const repositoryNodes = repositories
        ? repositories?.edges.map((edges) => edges.node)
        : [];

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <RepositoryItem item={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 150 }}
            testID="RepoList"
            ListFooterComponent={BackButton}
        />
    );
};

export default RepositoryListContainer;