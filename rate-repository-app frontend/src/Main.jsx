import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Switch } from "react-router-native";
import { Formik } from "formik";
import * as yup from "yup";


import RepositoryList from "./components/RepositoryList";
import SignIn from "./components/SignIn";
import AppBar from "./components/AppBar";

const styles = StyleSheet.create({
    container: {

    }
});

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required("Username is required")
});

const Main = () => {
    const onSubmit = () => {
        console.log("submited form");
    };

    return (
        <View style={styles.container}>
            <AppBar />
            <Switch>
                <Route exact path="/">
                    <RepositoryList />
                </Route>
                <Route path="/signin">
                    <Formik initialValues={{ username: "", password: "" }} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {({ handleSubmit }) => <SignIn onSubmit={handleSubmit} />}
                    </Formik>
                </Route>
            </Switch>
        </View>
    );
};

export default Main;
