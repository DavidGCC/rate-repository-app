import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Switch } from "react-router-native";

import RepositoryList from "./components/RepositoryList";
import SignIn from "./components/SignIn";
import AppBar from "./components/AppBar";
import SignOut from "./components/SignOut";
import ReposiotryReviews from "./components/RepositoryReviews";
import CreateReview from "./components/ReviewForm";
import SignUp from "./components/SignUp";
import MyReviews from "./components/MyReviews";

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
                <Route exact path="/myreviews">
                    <MyReviews />
                </Route>
                <Route exact path="/createreview">
                    <CreateReview />
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
                <Route exact path="/signin">
                    <SignIn />
                </Route>
                <Route exact path="/signout">
                    <SignOut />
                </Route>
                <Route exact path="/:id">
                    <ReposiotryReviews />
                </Route>
            </Switch>
        </View>
    );
};

export default Main;
