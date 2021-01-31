import React from "react";
import { StyleSheet, ScrollView, Dimensions } from "react-native";
import Constants from "expo-constants";

import themes from "../themes";

import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: themes.colors.appBarPrimary,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        minWidth: Dimensions.get("window").width,
        height: 120
    },
});

const AppBar = () => {
    return (
        <ScrollView contentContainerStyle={styles.container} horizontal={true}>
            <AppBarTab tabText="Repositories" target={"/"}/>
            <AppBarTab tabText="Sign In" target={"/signin"}/>
        </ScrollView>
    );
};

export default AppBar;
