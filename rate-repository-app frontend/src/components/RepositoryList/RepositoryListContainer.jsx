import React from "react";
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import { BackButton } from "react-router-native";

import RepositoryItem from "./RepositoryItem";
import SortDropdown from "../Sort";
import Search from "../Search";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator}></View>;

// const RepositoryListContainer = ({
//     repositories,
//     sort,
//     setSort,
//     query,
//     setQuery,}) => {
//     const repositoryNodes = repositories
//         ? repositories?.edges.map((edges) => edges.node)
//         : [];

//     return (
//         <FlatList
//             data={repositoryNodes}
//             ItemSeparatorComponent={ItemSeparator}
//             renderItem={({ item }) => <RepositoryItem item={item} />}
//             keyExtractor={(item) => item.id}
//             contentContainerStyle={{ paddingBottom: 150 }}
//             testID="RepoList"
//             ListFooterComponent={BackButton}
//             ListHeaderComponent={() => (
//                 <>
//                     <Search query={query} setQuery={setQuery} />
//                     <SortDropdown sort={sort} setSort={setSort} />
//                 </>
//             )}
//         />
//     );
// };

class RepositoryListContainer extends React.Component {
    constructor(props) {
        super(props);
        
    }

    renderHeader = () => {
        return (
            <>
                <Search query={this.props.query} setQuery={this.props.setQuery} />
                <SortDropdown sort={this.props.sort} setSort={this.props.setSort} />
            </>
        )
    }

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
            ListFooterComponent={BackButton}
            ListHeaderComponent={this.renderHeader}
        />
        )
    }
}
export default RepositoryListContainer;
