import { default as axios } from "axios";

const baseURL = `${process.env.REACT_APP_WS_HOST}:${process.env.REACT_APP_WS_PORT}/auth`;
export const tokenKey = 'token';

export async function login(credentials) {
    try {
        const res = await axios.post(`${baseURL}/login`, credentials);
        if (res.status === 200) localStorage.setItem(tokenKey, res.data.token);
        window.dispatchEvent(new Event("storage"));
        return res;
    } catch (error) {
        throw error;
    }

}

export async function isLogged() {
    if (localStorage.getItem(tokenKey) === null) return false;
    const res = await axios.get(`${baseURL}/user`, { headers: { Authorization: getAuthToken() }});
    if (res.status !== 200) return false;
    return true
}

export async function getUser() {
    if (localStorage.getItem(tokenKey) === null) return null;
    return await axios.get(`${baseURL}/user`, { headers: { Authorization: getAuthToken() }});
}

export function logout() {
    localStorage.removeItem(tokenKey);
    window.dispatchEvent(new Event("storage"));
}

export function getAuthToken() {
    const token = localStorage.getItem(tokenKey);
    if (token) return `Bearer ${token}`;
    return null;
}