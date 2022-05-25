import axios from "axios"
import { getAuthToken } from "./auth.service";


const baseUrl = `${process.env.REACT_APP_WS_HOST}:${process.env.REACT_APP_WS_PORT}/companies`;


export async function getAllCompanies() {
    return await axios.get(baseUrl, { headers: { Authorization: getAuthToken() } });
}
export async function getCompanyById(id) {
    return await axios.get(`${baseUrl}/${id}`, { headers: { Authorization: getAuthToken() } });
}