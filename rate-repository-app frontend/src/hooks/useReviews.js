import { useLazyQuery } from "@apollo/react-hooks";

import { GET_REVIEWS } from "../graphql/queries";

const useReviews = () => {
    const [getRepoReviews, result] = useLazyQuery(GET_REVIEWS);
    
    const getReviews = async (id) => {
        return await getRepoReviews({ variables: { id } });
    }

    return { getReviews, result };
}

export default useReviews;