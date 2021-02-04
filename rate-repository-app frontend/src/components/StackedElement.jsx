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

export const properFormat = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
};

const StackedElement = ({ topText, botText, testID }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topTextContainer}>
                <Text style={styles.topText} testID={testID}>{properFormat(topText)}</Text>
            </View>
            <View style={styles.botTextContainer}>
                <Text style={styles.botText}>{botText}</Text>
            </View>
        </View>
    );
};

export default StackedElement;