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

export const CREATE_USER = gql`
    mutation signUp($user: CreateUserInput!) {
        createUser(user: $user) {
            id
            username
        }
    }
`;

export const DELETE_REVIEW = gql`
    mutation deleteReview($id: ID!) {
        deleteReview(id: $id)
    }
`;