import React from "react";
import { ActivityIndicator } from "react-native";
import { useParams } from "react-router-native";

import useRepository from "../../hooks/useRepository";

import SingleRepositoryContainer from "./SingleRepositoryContainer";


const ReposiotryReviews = () => {
    const { id } = useParams();
    const { data, loading, fetchMore } = useRepository(id);

    const handleEndReached = () => fetchMore();
    const renderLoading = () => loading && <ActivityIndicator size="large" color="#ff2222"></ActivityIndicator>;

    return (
        <SingleRepositoryContainer data={data} onEndReached={handleEndReached} renderLoading={renderLoading}/>
    )

}

export default ReposiotryReviews;