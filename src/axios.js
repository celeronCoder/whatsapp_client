import axios from "axios";

const instance = axios.create({
    baseURL: "https://whatsapps-server.herokuapp.com/"
})

export default instance