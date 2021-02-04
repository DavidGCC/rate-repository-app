import React from "react";
import { ActivityIndicator } from "react-native";

import useRepository from "../../hooks/useRepository";
import RepositoryListContainer from "./RepositoryListContainer";



const RepositoryList = () => {
    const { data, loading } = useRepository();
    if (loading) {
        return <ActivityIndicator size="large"></ActivityIndicator>;
    }

    return (
        <RepositoryListContainer repositories={data?.repositories} />
    );
};

export default RepositoryList;
