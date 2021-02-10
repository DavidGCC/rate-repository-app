import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-native";

import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
    const [ createReviewMutation, result ] = useMutation(CREATE_REVIEW);
    const history = useHistory();
    const createReview = async (createReviewInput) => {
        const response = await createReviewMutation({ variables: { review: {...createReviewInput, rating: Number(createReviewInput.rating)} } });
        history.push(`/${response.data.createReview.repositoryId}`)
    }
    return { createReview, result };
}

export default useCreateReview;