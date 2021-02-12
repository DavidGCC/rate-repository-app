import React from "react";
import { Searchbar } from "react-native-paper";
import { useDebounce } from "use-debounce";

const Search = ({ query, setQuery }) => {
    const [queryWithDebounce] = useDebounce(query, 500);

    return (
        <Searchbar 
            placeholder="Filter by keyword"
            onChangeText={(query) => setQuery(query)}
            value={queryWithDebounce}
        />
    );
};

export default Search;
