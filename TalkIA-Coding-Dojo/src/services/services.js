import axios from "axios";

const apiUrlLocal = 'http://172.16.39.73:5084'

const api = axios.create({
    baseURL: apiUrlLocal
})

export default api;