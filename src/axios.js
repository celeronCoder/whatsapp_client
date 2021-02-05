import axios from "axios";

// * For Development the baseURL must me set to the localhost:serverPort

const instance = axios.create({
    baseURL: "https://whatsapps-server.herokuapp.com/"
})

export default instance;