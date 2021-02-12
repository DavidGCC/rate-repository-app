import React from "react";
import { Searchbar } from "react-native-paper";

const Search = ({ query, setQuery }) => {

    return (
        <Searchbar 
            placeholder="Filter by keyword"
            onChangeText={(query) => setQuery(query)}
            value={query}
            clearButtonMode="never"
        />
    );
};

export default Search;
