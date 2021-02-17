import React from "react";
import { FlatList, StyleSheet, View, ActivityIndicator } from "react-native";
import { BackButton } from "react-router-native";

import RepositoryItem from "../RepositoryItem";
import SortDropdown from "../Sort";
import Search from "../Search";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator}></View>;

class RepositoryListContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    renderHeader = () => {
        return (
            <>
                <Search
                    query={this.props.query}
                    setQuery={this.props.setQuery}
                />
                <SortDropdown
                    sort={this.props.sort}
                    setSort={this.props.setSort}
                />
                <BackButton></BackButton>
            </>
        );
    };

    render() {
        const repositoryNodes = this.props.repositories
            ? this.props.repositories?.edges.map((edges) => edges.node)
            : [];
        return (
            <FlatList
                data={repositoryNodes}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item }) => <RepositoryItem item={item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 150 }}
                testID="RepoList"
                ListFooterComponent={this.props.footerComponent}
                ListHeaderComponent={this.renderHeader}
                onEndReached={this.props.onEndReached}
                onEndReachedThreshold={0.5}
                refreshing={this.props.isRefreshing}
                onRefresh={this.props.handleRefresh}
            />
        );
    }
}
export default RepositoryListContainer;
