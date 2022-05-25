import { default as axios } from "axios";
import { getAuthToken } from "./auth.service";

const baseURL = `${process.env.REACT_APP_WS_HOST}:${process.env.REACT_APP_WS_PORT}/prizes`;

export async function getAll() {
    return await axios.get(baseURL, { headers: { Authorization: getAuthToken() } });
}

export async function getUnconfirmedPurchases() {
    return await axios.get(`${baseURL}/purchases/unconfirmed`, { headers: { Authorization: getAuthToken() } });
}

export async function confirmPurchase(id) {
    return await axios.patch(`${baseURL}/purchases/${id}/confirm`, {}, { headers: { Authorization: getAuthToken() } })
}

export async function denyPurchase(id) {
    return await axios.delete(`${baseURL}/purchases/${id}`, { headers: { Authorization: getAuthToken() } })
}