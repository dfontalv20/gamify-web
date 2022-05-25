import axios from "axios"
import { getAuthToken } from "./auth.service";


const baseUrl = `${process.env.REACT_APP_WS_HOST}:${process.env.REACT_APP_WS_PORT}/users`

export async function getAllUsers() {
    return await axios.get(baseUrl, { headers: { Authorization: getAuthToken() } });
}
export async function buyPrize(userId, prizeId) {
    return await axios.post(`${baseUrl}/${userId}/buyPrize/${prizeId}`);
}

export async function assignReward(userId, rewardId) {
    return await axios.post(`${baseUrl}/${userId}/assignReward/${rewardId}`, {}, { headers: { Authorization: getAuthToken() } });
}