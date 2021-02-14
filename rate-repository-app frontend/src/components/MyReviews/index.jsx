import React from "react";
import { BackButton } from "react-router-native";
import { ActivityIndicator, Alert } from "react-native";
import { useHistory } from "react-router-native";

import useDeleteReview from "../../hooks/useDeleteReview";
import useReviews from "../../hooks/useReviews";
import MyReviewsListContainer from "./MyReviewsListContainer";

const variables = {
    first: 8,
    includeReviews: true
}

const MyReviews = () => {
    const { getReviews, data, loading, fetchMore, refetch } = useReviews(variables);
    const { deleteReview } = useDeleteReview(variables);
    const history = useHistory();
    const renderLoading = () =>
        loading && (
            <ActivityIndicator color="#ff2222" size="large"></ActivityIndicator>
        );
    const handleOnEndReached = () => fetchMore();

    const handleViewRepository = (id) => {
        history.push(`/${id}`);
    }
    const handleDeleteReview = (id) => {
        Alert.alert(
            "Delete review?",
            "Are you sure you want to delete this review?",
            [
                {
                    text: "No",
                    style: "cancel"
                },
                {
                    text: "Yes",
                    style: "default",
                    onPress: () => {
                        deleteReview(id);
                        refetch();
                    }
                }
            ]
        )
    }

    return (
        <>
            <MyReviewsListContainer 
                onEndReached={handleOnEndReached} 
                data={data?.authorizedUser.reviews} 
                renderLoading={renderLoading}
                handleDeleteReview={handleDeleteReview}
                handleViewRepository={handleViewRepository}/>
            <BackButton></BackButton>
        </>
    );
};

export default MyReviews;
