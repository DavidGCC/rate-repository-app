import AsyncStorage from "@react-native-community/async-storage";

class AuthStorage {
    constructor(namespace = "auth") {
        this.namespace = namespace;
    }

    async setAccessToken(token) {
        await AsyncStorage.setItem(`${this.namespace}:token`, token);
    }

    async getAccessToken() {
        return await AsyncStorage.getItem(`${this.namespace}:token`);
    }

    async removeAccessToken() {
        await AsyncStorage.removeItem(`${this.namespace}:token`);
    }
}

export default AuthStorage;

