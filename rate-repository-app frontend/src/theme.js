import { Platform } from "react-native";

const theme = {
    colors: {
        textPrimary: "#24292e",
        textSecondary: "#586069",
        primary: "#0366d6",
        appBarPrimary: "#24292e",
        buttonPrimary: "#5482f7",
        buttonDanger: "#A93226"
    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: Platform.select({
            android: "Roboto",
            ios: "Arial",
            default: "System"
        })
    },
    fontWeights: {
        normal: "400",
        bold: "700",
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

};

export default theme;