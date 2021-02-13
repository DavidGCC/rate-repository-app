import React from "react";
import { BackButton } from "react-router-native";
import { ActivityIndicator } from "react-native";

import useReviews from "../../hooks/useReviews";
import MyReviewsListContainer from "./MyReviewsListContainer";

const MyReviews = () => {
    const { data, loading, fetchMore } = useReviews({
        first: 7,
        includeReviews: true
    });
    const renderLoading = () =>
        loading && (
            <ActivityIndicator color="#ff2222" size="large"></ActivityIndicator>
        );
    const handleOnEndReached = () => fetchMore();
    return (
        <>
            <MyReviewsListContainer onEndReached={handleOnEndReached} data={data?.authorizedUser.reviews} renderLoading={renderLoading}/>
            <BackButton></BackButton>
        </>
    );
};

export default MyReviews;
