import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import themes from "../themes";

import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: themes.colors.appBarPrimary,
        height: 100,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10
    },
    
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab tabText="Repositories" />
        </View>
    );
};

export default AppBar;
