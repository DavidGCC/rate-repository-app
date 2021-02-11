import React from "react";
import { Picker } from "@react-native-community/picker";

const options = [
    { label: "Latest Repositories", value: "latest" },
    { label: "Highest Rated Repositories", value: "ratedDesc" },
    { label: "Lowest Rated Repositories", value: "ratedAsc" },
];

const SortDropdown = ({ sort, setSort }) => {
    return (
        <Picker onValueChange={(value) => setSort(value)} selectedValue={sort}>
            <Picker.Item label="Latest Repositories" value="latest" />
            <Picker.Item label="Highest Rated Repositories" value="ratingDesc" />
            <Picker.Item label="Lowest Rated Repositories" value="ratingAsc" />
        </Picker>
    );
};

export default SortDropdown;
