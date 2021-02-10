import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Switch } from "react-router-native";

import RepositoryList from "./components/RepositoryList";
import SignIn from "./components/SignIn";
import AppBar from "./components/AppBar";
import SignOut from "./components/SignOut";
import ReposiotryReviews from "./components/RepositoryReviews";

const styles = StyleSheet.create({
    container: {

    }
});



const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Switch>
                <Route exact path="/">
                    <RepositoryList />
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/signout">
                    <SignOut />
                </Route>
                <Route path="/:id">
                    <ReposiotryReviews />
                </Route>
            </Switch>
        </View>
    );
};

export default Main;
