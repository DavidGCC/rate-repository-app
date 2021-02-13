import { useQuery } from "@apollo/react-hooks";

import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
    const { data, loading, fetchMore } = useQuery(GET_REPOSITORY, {
        fetchPolicy: "cache-and-network",
        variables: { id, first: 4 }
    });

    const handleFetchMore = () => {
        const canFetchMore = !loading && data && data.repository.reviews.pageInfo.hasNextPage;

        if (!canFetchMore) {
            return;
        }

        fetchMore({
            query: GET_REPOSITORY,
            variables: {
                id,
                first: 4,
                after: data.repository.reviews.pageInfo.endCursor
            },
            updateQuery: (prevResult, { fetchMoreResult }) => {
                const nextResult = {
                    repository: {
                        ...fetchMoreResult.repository,
                        reviews: {
                            ...fetchMoreResult.repository.reviews,
                            edges: [
                                ...prevResult.repository.reviews.edges,
                                ...fetchMoreResult.repository.reviews.edges,
                            ],
                        },
                    },
                };

                return nextResult;
            },
        });
    };


    return { fetchMore: handleFetchMore, loading, data };
}

export default useRepository;