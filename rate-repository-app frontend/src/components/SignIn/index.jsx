import React from "react";

import SignInForm from "./SignInForm";
import useSignIn from "../../hooks/useSignIn";

const SignIn = () => {
    const [signIn, result] = useSignIn();
    const [isInvalid, setIsInvalid] = React.useState(false);
    const onSubmit = async ({ username, password }) => {
        try {
            await signIn({ username, password });
        } catch (error) {
            setIsInvalid(true);
        }
    };

    return <SignInForm onSubmit={onSubmit} isInvalid={isInvalid}/>;
};

export default SignIn;
