import { useMutation } from "@apollo/react-hooks";

import { DELETE_REVIEW } from "../graphql/mutations";
import { GET_AUTHORIZED_USER } from "../graphql/queries";

const useDeleteReviews = (variables) => {
    const [mutate] = useMutation(DELETE_REVIEW);

    const deleteReview = (id) => {
        mutate({ variables: { id } });
    }

    return { deleteReview };
}

export default useDeleteReviews;