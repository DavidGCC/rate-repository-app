import React from "react";
import { useParams } from "react-router-native";

import useReviews from "../../hooks/useReviews";
import useRepository from "../../hooks/useRepository";

import SingleRepositoryContainer from "./SingleRepositoryContainer";


const ReposiotryReviews = () => {
    const { getReviews, result: reviewsResult } = useReviews();
    const { getRepo, result: repoResult } = useRepository();
    const { id } = useParams();

    React.useEffect(() => {
        getReviews(id);
        getRepo(id);
    }, []);

    return (
        <SingleRepositoryContainer repoResult={repoResult} reviewsResult={reviewsResult} />
    )

}

export default ReposiotryReviews;