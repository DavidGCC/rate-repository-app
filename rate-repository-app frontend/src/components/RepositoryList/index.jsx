import React from "react";
import { ActivityIndicator, Platform } from "react-native";
import { useDebounce } from "use-debounce";


import useRepositories from "../../hooks/useRepositories";
import RepositoryListContainer from "./RepositoryListContainer";



const RepositoryList = () => {
    const [sort, setSort] = React.useState("latest");
    const [query, setQuery] = React.useState("");
    const [queryWithDebounce] = useDebounce(query, 500);
    console.log(sort);
    const { data, loading } = useRepositories(sort, queryWithDebounce);
    if (loading) {
        const size = Platform.select({
            android: 100,
            ios: "large",
            default: "large"
        });
        return <ActivityIndicator size={size} color="#ff2222"></ActivityIndicator>;
    }

    return (
        <RepositoryListContainer 
            repositories={data?.repositories} 
            sort={sort} 
            setSort={setSort}
            query={query}
            setQuery={setQuery}/>
    );
};

export default RepositoryList;
