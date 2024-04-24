import { requestConfig } from "./requestsConfig";

export const loginRequest = async (credentials) => {
    try {
        const res = await requestConfig.post("v1/login", credentials);
        return res
    } catch (err) {
        return err
    }
};

export const registerRequest = async (user) => {
    try {
        const res = await requestConfig.post("v1/register", user);
        return res
    } catch (err) {
        return err
    }
};