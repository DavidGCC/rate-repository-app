import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Button } from "react-native-paper";


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    buttonView: {
        backgroundColor: "#5450ff"
    },
    buttonDelete: {
        backgroundColor: "#C82333"
    },
});

const ReviewButtons = ({ handleViewRepository, handleDeleteReview }) => {
    return (
        <View style={styles.container}>
            <Button onPress={handleViewRepository} mode="contained" style={styles.buttonView}>
                View Repository
            </Button>
            <Button onPress={handleDeleteReview} mode="contained" style={styles.buttonDelete}>
                Delete Review
            </Button>
        </View>
    );
};

export default ReviewButtons;
