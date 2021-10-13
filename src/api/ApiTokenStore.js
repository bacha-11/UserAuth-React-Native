import * as SecureStore from "expo-secure-store";
const key = "authToken";
const storeToken = async (authToken) => {
    try {
        console.log('@@@@@@',authToken)
        await SecureStore.setItemAsync(key, authToken);
        console.log("Token is Stored", authToken )
    } catch (error) {
        console.log("Error storing token", error);
    }
};
const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        console.log("Eror getting auth token");
    }
};
const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log("Error removing auth token ");
    }
};
export default {
    storeToken,
    getToken,
    removeToken,
};