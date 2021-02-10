import { useMutation } from "@apollo/react-hooks";

import { CREATE_USER } from "../graphql/mutations";
import useSignIn from "./useSignIn";

const useSignUp = () => {
    const [createUser, result] = useMutation(CREATE_USER);
    const [signIn] = useSignIn();
    const signUp = async ({ username, password }) => {
        await createUser({ variables: { user : { username, password } } });
        try {
            await signIn({ username, password });
        } catch (error) {
            console.error(error);
        }
    }
    return { signUp, result };
}


export default useSignUp;