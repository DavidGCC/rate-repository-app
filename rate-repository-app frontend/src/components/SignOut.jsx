import React from "react";
import { useHistory } from "react-router-native";
import { TouchableHighlight, StyleSheet } from "react-native";
import { useApolloClient } from "@apollo/react-hooks";
import AuthStorageContext from "../contexts/AuthStorageContext";

import Text from "./Text";


const styles = StyleSheet.create({
    button: {
        backgroundColor: "#A93226",
        height: 50,
        borderRadius: 10,
        textAlign: "center",
        fontSize: 30,
        color: "#fff"
    },
    container: {
        marginTop: 300,
        marginHorizontal: 80,
        borderRadius: 10
    }
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
        <TouchableHighlight style={styles.container} onPress={onPress}>
            <Text style={styles.button}>Sign Out</Text>
        </TouchableHighlight>
    );
};

export default SignOut;