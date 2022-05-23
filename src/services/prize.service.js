import { default as axios } from "axios";
import { getAuthToken } from "./auth.service";

const baseURL = `${process.env.REACT_APP_WS_HOST}:${process.env.REACT_APP_WS_PORT}/prizes`;

export async function getAll() {
    return await axios.get(baseURL, { headers: { Authorization: getAuthToken() }});
}