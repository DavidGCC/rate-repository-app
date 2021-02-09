import { gql } from "apollo-boost";
import { repoInfoFragment } from "./fragments";


export const GET_REPOS = gql`
    query {
        repositories {
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