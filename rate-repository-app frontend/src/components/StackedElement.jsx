import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "./Text";


const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: "space-between"
    },
    topText: {
        textAlign: "center",
        fontSize: 16
    },
    botText: {
        textAlign: "center",
        fontSize: 16
    }
});

const properFormat = (number) => {
    return number >= 1000 ? `${number.toString()[0]}.${number.toString()[1]}k` : number;
};

const StackedElement = ({ topText, botText }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topTextContainer}>
                <Text style={styles.topText}>{properFormat(topText)}</Text>
            </View>
            <View style={styles.botTextContainer}>
                <Text style={styles.botText}>{properFormat(botText)}</Text>
            </View>
        </View>
    );
};

export default StackedElement;