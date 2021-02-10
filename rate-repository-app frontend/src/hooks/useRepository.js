import { useLazyQuery } from "@apollo/react-hooks";

import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = () => {
    const [getRepository, result] = useLazyQuery(GET_REPOSITORY, {
        fetchPolicy: "cache-and-network"
    });

    const getRepo = async (id) => {
        const response = await getRepository({ variables: { id } });
        return response;
    }

    return { getRepo, result };
}

export default useRepository;