import { useQuery } from "@apollo/react-hooks";

import { GET_AUTHORIZED_USER } from "../graphql/queries";

const useReviews = (variables) => {
    const { data, loading, fetchMore } = useQuery(GET_AUTHORIZED_USER, {
        fetchPolicy: "cache-and-network",
        variables
    });

    const handleFetchMore = () => {
        const canFetchMore = !loading && data && data.authorizedUser.reviews.pageInfo.hasNextPage;
        if (!canFetchMore) {
            return;
        }

        fetchMore({
            query: GET_AUTHORIZED_USER,
            variables: { ...variables, after: data.authorizedUser.reviews.pageInfo.endCursor },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                const nextResult = {
                    authorizedUser: {
                        ...fetchMoreResult.authorizedUser,
                        reviews: {
                            ...fetchMoreResult.authorizedUser.reviews,
                            edges: [
                                ...previousResult.authorizedUser.reviews.edges,
                                ...fetchMoreResult.authorizedUser.reviews.edges
                            ],
                        },
                    },
                };

                return nextResult;
            },
        });
    };

    return { loading, data, fetchMore: handleFetchMore };
};

export default useReviews;