import axios from "axios";
import { getAuthToken } from "./auth.service";

const baseUrl = `${process.env.REACT_APP_WS_HOST}:${process.env.REACT_APP_WS_PORT}/rewards`;

export async function getAllRewards() {
    return await axios.get(baseUrl, { headers: { Authorization: getAuthToken() } })
}