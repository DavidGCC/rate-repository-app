import { gql } from "apollo-boost";

export const SIGN_IN = gql`
    mutation signIn($credentials: AuthorizeInput!) {
        authorize(credentials: $credentials) {
            accessToken
        }
    }
`;

export const CREATE_REVIEW = gql`
    mutation createReview($review: CreateReviewInput!) {
        createReview (review: $review) {
            repositoryId
        }
    }
`;