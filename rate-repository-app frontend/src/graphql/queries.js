import { gql } from "apollo-boost";
import { repoInfoFragment } from "./fragments";


export const GET_REPOS = gql`
    query getRepos($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $first: Int, $after: String){
        repositories (orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after){
            edges {
                node {
                    ...repoInfo
                }
            }
            pageInfo {
                hasNextPage
                endCursor
            }
        }
    }
    ${repoInfoFragment}
`;

export const GET_AUTHORIZED_USER = gql`
    query getAuthorizedUser($first: Int, $after: String, $includeReviews: Boolean = false){
        authorizedUser {
            id
            username
            reviews (first: $first, after: $after)@include(if: $includeReviews) {
                pageInfo {
                    endCursor
                    hasNextPage
                }
                edges {
                    node {
                        id
                        text
                        createdAt
                        rating
                        repository {
                            fullName
                        }
                    }
                }
            }
        }
    }
`;


export const GET_REPOSITORY = gql`
    query getRepo($id: ID!, $first: Int, $after: String) {
        repository (id: $id) {
            ...repoInfo
            url
            reviews (first: $first, after: $after){
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
                pageInfo {
                    endCursor
                    hasNextPage
                }
            }
        }
    }
    ${repoInfoFragment}
`;