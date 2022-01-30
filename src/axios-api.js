import axios from "axios";

const instance = axios.create({
    baseURL: 'https://6v3xqx2nqe.execute-api.eu-west-1.amazonaws.com/'
});

export default instance;