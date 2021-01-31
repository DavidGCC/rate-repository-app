import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Switch } from "react-router-native";

import RepositoryList from "./components/RepositoryList";
import SignIn from "./components/SignIn";
import AppBar from "./components/AppBar";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Switch>
                <Route exact path="/" component={RepositoryList} />
                <Route path="/signin" component={SignIn} />
            </Switch>
        </View>
    );
};

export default Main;
