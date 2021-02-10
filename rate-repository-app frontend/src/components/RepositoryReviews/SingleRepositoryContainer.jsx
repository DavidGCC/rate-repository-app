import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import SingleRepository from "../SingleRepository";
import Review from "./Review";


const styles = StyleSheet.create({
    itemSeparator: {
        height: 10
    }
})


const ItemSeparator = () => <View style={styles.itemSeparator}></View>


const SingleRepositoryContainer = ({ repoResult, reviewsResult }) => {
    return (
        <FlatList
            ListHeaderComponent={() => <SingleRepository result={repoResult} />}
            data={reviewsResult.data?.repository.reviews.edges}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={(review) => review.node.id}
            renderItem={({ item }) => <Review item={item} />}
            contentContainerStyle={{ paddingBottom: 160 }}
        />

    )
}


export default SingleRepositoryContainer;