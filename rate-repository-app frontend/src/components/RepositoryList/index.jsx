import React from "react";
import { ActivityIndicator } from "react-native";
import { useDebounce } from "use-debounce";

import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
    const [sort, setSort] = React.useState("latest");
    const [query, setQuery] = React.useState("");
    const [queryWithDebounce] = useDebounce(query, 500);
    const { data, loading, fetchMore } = useRepositories(
        sort,
        queryWithDebounce
    );
    const renderLoading = () =>
        loading && (
            <ActivityIndicator size="large" color="ff2222"></ActivityIndicator>
        );
    const handleEndReached = () => fetchMore();

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
            />
        </>
    );
};

export default RepositoryList;
