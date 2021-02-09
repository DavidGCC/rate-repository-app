import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Link, useParams } from "react-router-native"
import * as Linking from "expo-linking";

import CardHeader from "./CardHeader";
import CardPopularity from "./CardPopularity";
import Text from "../../Text";


const styles = StyleSheet.create({
    cardContainer: {
        flex: 0,
        margin: 10,
        marginBottom: 0,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2.63,
        elevation: 5,
        padding: 5,
    },
    gitLinkContainer: {
        backgroundColor: "#0390fc",
        textAlign: "center",
        borderRadius: 10,
        padding: 10,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        margin: 15
    },
    gitLink: {
        fontSize: 30,
        color: "#fff",
    }
});

const RepositoryItem = ({ item, fullView }) => {
    return (
        <Link to={`/${item.id}`} component={TouchableOpacity}>
            <View style={styles.cardContainer} testID="RepoCard">
                <CardHeader item={item} />
                <CardPopularity item={item} />
                {fullView && (
                    <TouchableOpacity style={styles.gitLinkContainer} onPress={() => Linking.openURL(item.url)}>
                        <Text style={styles.gitLink}>Open in GitHub</Text>
                    </TouchableOpacity>
                )}
            </View>
        </Link>
    );
};

export default RepositoryItem;
