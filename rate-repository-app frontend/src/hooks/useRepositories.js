import { useQuery } from "@apollo/react-hooks";

import { GET_REPOS } from "../graphql/queries";

const sortBy = {
    latest: { orderBy: "CREATED_AT", orderDirection: "DESC" },
    ratingDesc: { orderBy: "RATING_AVERAGE", orderDirection: "DESC" },
    ratingAsc: { orderBy: "RATING_AVERAGE", orderDirection: "ASC" }
}

const useRepositories = (sort, query) => {
    const { data, loading, error } = useQuery(GET_REPOS, {
        fetchPolicy: "cache-first",
        variables: {...sortBy[sort], searchKeyword: query}
    });
    return { data, loading, error };
};

export default useRepositories;