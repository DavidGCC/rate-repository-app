import { gql } from "apollo-boost";

export const repoInfoFragment = gql`
    fragment repoInfo on Repository {
        id
        fullName
        url
        ratingAverage
        language
        description
        forksCount
        reviewCount
        ownerAvatarUrl
        stargazersCount
    }
`;