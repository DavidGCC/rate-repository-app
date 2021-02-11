import React from "react";
import { ActivityIndicator, Platform } from "react-native";


import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";



const RepositoryList = () => {
    const [sort, setSort] = React.useState("latest");
    console.log(sort);
    const { data, loading } = useRepositories(sort);
    if (loading) {
        const size = Platform.select({
            android: 100,
            ios: "large",
            default: "large"
        });
        return <ActivityIndicator size={size} color="#ff2222"></ActivityIndicator>;
    }

    return (
        <RepositoryListContainer repositories={data?.repositories} sort={sort} setSort={setSort}/>
    );
};

export default RepositoryList;
