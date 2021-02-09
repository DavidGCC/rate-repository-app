import { useQuery } from "@apollo/react-hooks";

import { GET_REPOS } from "../graphql/queries";

const useRepositories = () => {
    const { data, loading, error } = useQuery(GET_REPOS, {
        fetchPolicy: "cache-and-network"
    });
    return { data, loading, error };
};

export default useRepositories;