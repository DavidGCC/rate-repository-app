import { gql } from "apollo-boost";

export const GET_REPOS = gql`
    query {
        repositories {
            edges {
                node {
                    id
                    fullName
                    ratingAverage
                    language
                    description
                    forksCount
                    reviewCount
                    ownerAvatarUrl
                    stargazersCount
                }
            }
        }
    }
`;

export const GET_AUTHORIZED_USER = gql`
    query {
        authorizedUser {
            id
            username
        }
    }
`;