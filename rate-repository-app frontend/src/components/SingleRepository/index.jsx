import React from "react";
import { useParams, BackButton } from "react-router-native";
import { View, StyleSheet, ActivityIndicator } from "react-native";

import useRepository from "../../hooks/useRepository";
import RepositoryItem from "../RepositoryList/RepositoryItem";

const SingleRepository = ({ data }) => {
    if (!data) {
        return <ActivityIndicator></ActivityIndicator>
    }

    return (
        <View>
            <RepositoryItem item={data?.repository} fullView />
            <BackButton></BackButton>
        </View>
    )
}

export default SingleRepository;