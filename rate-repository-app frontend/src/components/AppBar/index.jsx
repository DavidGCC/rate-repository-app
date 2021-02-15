import React from "react";
import { StyleSheet, ScrollView, Dimensions } from "react-native";
import Constants from "expo-constants";
import { useQuery } from "@apollo/react-hooks";

import theme from "../../theme";

import AppBarTab from "./AppBarTab";

import { GET_AUTHORIZED_USER } from "../../graphql/queries";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.appBarPrimary,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        minWidth: Dimensions.get("window").width,
        height: 120,
    },
});

const AppBar = () => {
    const { data, loading } = useQuery(GET_AUTHORIZED_USER);

    if (loading) {
        return (
        <ScrollView contentContainerStyle={styles.container} horizontal={true}>
            <AppBarTab tabText="Repositories" target={"/"} />
        </ScrollView>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container} horizontal={true}>
            <AppBarTab tabText="Repositories" target={"/"} />
            {!data.authorizedUser ? (
                <>
                    <AppBarTab tabText="Sign In" target={"/signin"} />
                    <AppBarTab tabText="Sign Up" target="signup" />
                </>
            ) : (
                <>
                    <AppBarTab tabText="My Reviews" target={"/myreviews"} />
                    <AppBarTab tabText="Create Review" target={"/createreview"} />
                    <AppBarTab tabText="Sign Out" target={"/signout"} />
                </>
            )}
        </ScrollView>
    );
};

export default AppBar;
