import React from "react";
import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    avatar: {
        width: 60,
        height: 60,
        marginRight: 30,
        marginLeft: 10,
        borderRadius: 5,
    },
});

const CardAvatar = ({ url }) => {
    return (
        <Image
            style={styles.avatar}
            source={{
                uri: url,
            }}
        />
    );
};

export default CardAvatar;
