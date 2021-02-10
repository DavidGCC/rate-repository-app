import React from "react";
import { ActivityIndicator, Platform } from "react-native";


import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";



const RepositoryList = () => {
    const { data, loading } = useRepositories();
    if (loading) {
        const size = Platform.select({
            android: 100,
            ios: "large",
            default: "large"
        });
        return <ActivityIndicator size={size} color="#ff2222"></ActivityIndicator>;
    }

    return (
        <RepositoryListContainer repositories={data?.repositories} />
    );
};

export default RepositoryList;
