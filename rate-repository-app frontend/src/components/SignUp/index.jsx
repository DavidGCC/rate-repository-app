import React from "react";

import SignUpForm from "./SignUpForm";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
    const { signUp } = useSignUp();

    const handleSubmit = async ({ username, password }) => {
        await signUp({ username, password });
    }

    return (
        <SignUpForm handleSubmit={handleSubmit} />
    )
}

export default SignUp;