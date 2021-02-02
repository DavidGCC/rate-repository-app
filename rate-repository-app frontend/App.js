import React from "react";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/react-hooks";

import Main from "./src/Main";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorageContext from "./src/contexts/AuthStorageContext";
import AuthStorage from "./src/utils/authStorage";

const authStorage = new AuthStorage();
const client = createApolloClient(authStorage);

export default function App() {
    return (
        <NativeRouter>
            <ApolloProvider client={client}>
                <AuthStorageContext.Provider value={authStorage}>
                    <Main />
                </AuthStorageContext.Provider>
            </ApolloProvider>
        </NativeRouter>
    );
}
