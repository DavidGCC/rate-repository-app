import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";

import SignInForm from "../components/SignIn/SignInForm";

describe('SignIn', () => {
    describe('SignInContainer', () => {
        it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
            // render the SignInContainer component, fill the text inputs and press the submit button
            const onSubmit = jest.fn();
            const { debug, getByPlaceholderText, getByText } = render(<SignInForm onSubmit={onSubmit} />);
            
            
            fireEvent(getByPlaceholderText("Username"), "ChangeText", "kalle")
            fireEvent(getByPlaceholderText("Password"), "ChangeText", "password")
            
            await waitFor(async () => {
                await fireEvent(getByText("Sign In"), "press");
            });

            expect(onSubmit).toHaveBeenCalledTimes(1);

            expect(onSubmit.mock.calls[0][0]).toEqual({
                username: "kalle",
                password: "password"
            });
        });
    });
});