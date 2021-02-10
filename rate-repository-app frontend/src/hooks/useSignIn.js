import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { useContext } from "react";
import { useHistory } from "react-router-native";

import { SIGN_IN } from "../graphql/mutations";
import AuthStorageContext from "../contexts/AuthStorageContext";


const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN);
    const authStorage = useContext(AuthStorageContext);
    const client = useApolloClient();
    const history = useHistory();

    const signIn = async ({ username, password }) => {
        let response;
        try {
            response = await mutate({ variables: { credentials: { username, password } } });
            authStorage.setAccessToken(response.data.authorize.accessToken);
            client.resetStore();
            history.push("/");
        } catch (error) {
            console.error(error);
        }
        return response;
    };

    return [signIn, result];
};

export default useSignIn;