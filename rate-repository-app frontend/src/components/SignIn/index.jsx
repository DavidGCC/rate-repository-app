import React from "react";

import SignInForm from "./SignInForm";
import useSignIn from "../../hooks/useSignIn";



const SignIn = () => {
    const [signIn, result] = useSignIn();
    const onSubmit = async ({ username, password }) => {
        try {
            const { data } = await signIn({ username, password });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <SignInForm onSubmit={onSubmit} />
    );
};

export default SignIn;