import React from "react";
import { FlatList } from "react-native";

import MyReviewItem from "./MyReviewItem";

const MyReviewsListContainer = ({ data, renderLoading, onEndReached, handleViewRepository, handleDeleteReview }) => {
    return (
        <FlatList
            data={data?.edges}
            keyExtractor={({ node }) => node.id}
            renderItem={({ item }) => <MyReviewItem 
                handleViewRepository={() => handleViewRepository(item.node.repository.id)}
                handleDeleteReview={() => handleDeleteReview(item.node.id)}
                item={item}
                />}
            ListFooterComponent={renderLoading}
            contentContainerStyle={{ paddingBottom: 160 }}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
        />
    );
};
export default MyReviewsListContainer;
