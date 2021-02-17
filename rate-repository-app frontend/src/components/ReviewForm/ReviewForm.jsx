import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { BackButton } from "react-router-native";
import { Button } from "react-native-paper";

import FormikTextInput from "../FormikTextInput";

import theme from "../../theme";


const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    input: {
        height: 60,
        borderWidth: 1,
        marginBottom: 10,
        borderColor: "gray",
        borderRadius: 5,
        padding: 10,
        fontSize: 20,
    },
    button: {
        backgroundColor: theme.colors.buttonPrimary
    }
})

const validationSchema = yup.object().shape({
    ownerName: yup
        .string()
        .required("Username of the repostory owner is required"),
    repositoryName: yup.string().required("Name of the repository is required"),
    rating: yup
        .number("rating must be a number")
        .min(0, "Rating must be between 0 and 100")
        .max(100, "Rating must be between 0 and 100")
        .required("Rating is required"),
    text: yup.string(),
});

const initialValues = {
    ownerName: "",
    repositoryName: "",
    rating: "",
    text: "",
};

const ReviewForm = ({ handleSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ handleSubmit }) => (
                <View style={styles.container}>
                    <FormikTextInput
                        name="ownerName"
                        placeholder="Repository owner username"
                        style={styles.input}
                    />
                    <FormikTextInput
                        placeholder="Repository name"
                        name="repositoryName"
                        style={styles.input}
                    />
                    <FormikTextInput placeholder="rating" name="rating" style={styles.input} />
                    <FormikTextInput
                        placeholder="review"
                        name="text"
                        style={styles.input}
                        multiline
                    />
                    <Button mode="contained" onPress={handleSubmit} style={styles.button}>Create Review</Button>
                    <BackButton></BackButton>
                </View>
            )}
        </Formik>
    );
};

export default ReviewForm;
