import { gql } from "apollo-boost";
import { repoInfoFragment } from "./fragments";


export const GET_REPOS = gql`
    query getRepos($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection){
        repositories (orderBy: $orderBy, orderDirection: $orderDirection){
            edges {
                node {
                    ...repoInfo
                }
            }
        }
    }
    ${repoInfoFragment}
`;

export const GET_AUTHORIZED_USER = gql`
    query {
        authorizedUser {
            id
            username
        }
    }
`;

export const GET_REPOSITORY = gql`
    query getRepository($id: ID!) {
        repository (id: $id) {
            ...repoInfo
            url
        }
    }
    ${repoInfoFragment}
`;

export const GET_REVIEWS = gql`
    query getRepoReviews($id: ID!) {
        repository (id: $id) {
            ...repoInfo
            reviews {
                edges {
                    node {
                        id 
                        user {
                            id
                            username
                        }
                        createdAt
                        text
                        rating
                    }
                }
            }
        }
    }
    ${repoInfoFragment}
`;