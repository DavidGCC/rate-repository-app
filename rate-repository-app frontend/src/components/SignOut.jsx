import React from "react";
import { useHistory, BackButton } from "react-router-native";
import { View, StyleSheet } from "react-native";
import { useApolloClient } from "@apollo/react-hooks";
import { Button } from "react-native-paper";
import AuthStorageContext from "../contexts/AuthStorageContext";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.buttonDanger,
    },
    container: {
        marginTop: 300,
        marginHorizontal: 80,
        borderRadius: 10,
    },
});

const SignOut = () => {
    const client = useApolloClient();
    const history = useHistory();
    const authStorage = React.useContext(AuthStorageContext);

    const onPress = () => {
        authStorage.removeAccessToken();
        client.resetStore();
        history.push("/");
    };

    return (
        <View style={styles.container}>
            <Button onPress={onPress} mode="contained" style={styles.button}>Sign Out</Button>
            <BackButton></BackButton>
        </View>
    );
};

export default SignOut;
