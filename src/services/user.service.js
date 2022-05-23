import axios from "axios"


const baseUrl = `${process.env.REACT_APP_WS_HOST}:${process.env.REACT_APP_WS_PORT}/users`

export async function buyPrize(userId, prizeId) {
    return await axios.post(`${baseUrl}/${userId}/buyPrize/${prizeId}`);
}