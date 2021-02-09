import React from "react";
import { useParams, BackButton } from "react-router-native";
import { View, StyleSheet, ActivityIndicator } from "react-native";

import useRepository from "../../hooks/useRepository";
import RepositoryItem from "../RepositoryList/RepositoryItem";

const SingleRepository = () => {
    const { id } = useParams();
    const [ getRepo, result ] = useRepository();

    React.useEffect(() => {
        getRepo(id);
    }, [])

    if (!result.data) {
        return <ActivityIndicator></ActivityIndicator>
    }

    return (
        <View>
            <RepositoryItem item={result.data?.repository} fullView />
            <BackButton></BackButton>
        </View>
    )
}

export default SingleRepository;