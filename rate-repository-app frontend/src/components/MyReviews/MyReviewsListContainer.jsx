import React from "react";
import { FlatList } from "react-native";

import ReviewItem from "../ReviewItem";

const MyReviewsListContainer = ({ data, renderLoading, onEndReached }) => {
    return (
        <FlatList
            data={data?.edges}
            keyExtractor={({ node }) => node.id}
            renderItem={({ item }) => <ReviewItem item={item} repository/>}
            ListFooterComponent={renderLoading}
            contentContainerStyle={{ paddingBottom: 160 }}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
        />
    );
};
export default MyReviewsListContainer;
