import React from "react";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/react-hooks";

import Main from "./src/Main";
import createApolloClient from "./src/utils/apolloClient";

const client = createApolloClient();

export default function App() {
    return (
        <NativeRouter>
            <ApolloProvider client={client}>
                <Main />
            </ApolloProvider>
        </NativeRouter>
    );
}
