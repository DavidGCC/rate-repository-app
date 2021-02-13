import { useLazyQuery } from "@apollo/react-hooks";

import { GET_REVIEWS } from "../graphql/queries";

const useReviews = () => {
    const [getRepoReviews, result] = useLazyQuery(GET_REVIEWS);
    
    const getReviews = async (id) => {
        return await getRepoReviews({ variables: { id, first: 3} });
    }

    const handleFetchMore = (id) => {
        const canFetchMore = result.loading && result.data && result.data.reviews.pageInfo.hasNextPage;
        if (!canFetchMore) {
            return;
        }

        result.fetchMore({
            query: GET_REVIEWS,
            variables: {
                id,
                first: 3,
                after: result.data.repository.reviews.pageInfo.endCursor
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                const nextResult = {
                    repository: {
                        ...fetchMoreResult.repository,
                        reviews: {
                            ...fetchMoreResult.repository.edges,
                            edges: [
                                ...fetchMoreResult.repository.reviews.edges,
                                ...previousResult.repository.reviews.edges
                            ]
                        }
                    },
                };


                return nextResult;
            },
        });
    };

    return { getReviews, result, fetchMore: handleFetchMore };
}

export default useReviews;