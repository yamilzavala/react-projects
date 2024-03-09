import axios from "axios";

const customInstance = axios.create({
    baseURL: 'http://course-api.com',
    headers: {
        Accept: 'application/json'
    }
})

export default customInstance;