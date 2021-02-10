import React from "react";

import ReviewForm from "./ReviewForm";
import useCreateReview from "../../hooks/useCreateReview"

const CreateReview = () => {
    const { createReview } = useCreateReview();
    const handleSubmit = async (values) => {
        await createReview(values);
    }
    return (
        <ReviewForm handleSubmit={handleSubmit} />
    )
}

export default CreateReview;