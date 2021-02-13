import { useQuery } from "@apollo/react-hooks";

import { GET_REPOS } from "../graphql/queries";

const sortBy = {
    latest: { orderBy: "CREATED_AT", orderDirection: "DESC" },
    ratingDesc: { orderBy: "RATING_AVERAGE", orderDirection: "DESC" },
    ratingAsc: { orderBy: "RATING_AVERAGE", orderDirection: "ASC" }
}

const useRepositories = (sort, query) => {
    const variables = { ...sortBy[sort], searchKeyword: query, first: 6 };
    const { data, loading, fetchMore } = useQuery(GET_REPOS, {
        fetchPolicy: "cache-and-network",
        variables
    });

    const handleFetchMore = () => {
        const canFetchMore = !loading && data && data.repositories.pageInfo.hasNextPage;
        if (!canFetchMore) {
            return;
        }

        fetchMore({
            query: GET_REPOS,
            variables: {
                after: data.repositories.pageInfo.endCursor,
                ...variables
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                const nextResult = {
                    repositories: {
                        ...fetchMoreResult.repositories,
                        edges: [
                            ...previousResult.repositories.edges,
                            ...fetchMoreResult.repositories.edges
                        ],
                    },
                };

                return nextResult;
            },
        });
    };

    return { data, loading, fetchMore: handleFetchMore };
};

export default useRepositories;