import React from "react";
import { ActivityIndicator } from "react-native";

import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";



const RepositoryList = () => {
    const { data, loading } = useRepositories();
    if (loading) {
        return <ActivityIndicator size="large"></ActivityIndicator>;
    }

    return (
        <RepositoryListContainer repositories={data?.repositories} />
    );
};

export default RepositoryList;
