import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import SingleRepository from "../SingleRepository";
import ReviewItem from "../ReviewItem";


const styles = StyleSheet.create({
    itemSeparator: {
        height: 10
    }
})


const ItemSeparator = () => <View style={styles.itemSeparator}></View>


const SingleRepositoryContainer = ({ data, onEndReached, renderLoading }) => {
    return (
        <FlatList
            ListHeaderComponent={() => <SingleRepository data={data} />}
            data={data?.repository.reviews.edges}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={(review) => review.node.id}
            renderItem={({ item }) => <ReviewItem item={item} />}
            contentContainerStyle={{ paddingBottom: 160 }}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderLoading}
        />

    )
}


export default SingleRepositoryContainer;