import React from "react";
import { ActivityIndicator } from "react-native";
import { useDebounce } from "use-debounce";

import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
    const [sort, setSort] = React.useState("latest");
    const [query, setQuery] = React.useState("");
    const [queryWithDebounce] = useDebounce(query, 500);
    const [isRefreshing, setIsRefreshing] = React.useState(false);
    const { data, loading, fetchMore, refetch } = useRepositories(
        sort,
        queryWithDebounce
    );
    const renderLoading = () =>
        loading && (
            <ActivityIndicator size="large" color="ff2222"></ActivityIndicator>
        );
    const handleEndReached = () => fetchMore();
    const handleRefresh = () => {
        refetch();
        if (loading) {
            setIsRefreshing(true);
        } else {
            setIsRefreshing(false);
        }
    }
    return (
        <>
            <RepositoryListContainer
                repositories={data?.repositories}
                sort={sort}
                setSort={setSort}
                query={query}
                setQuery={setQuery}
                onEndReached={handleEndReached}
                footerComponent={renderLoading}
                isRefreshing={isRefreshing}
                handleRefresh={handleRefresh}
            />
        </>
    );
};

export default RepositoryList;
