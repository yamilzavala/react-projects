import axios from "axios";

const fetchDataInterceptor = axios.create({
    baseURL: 'http://course-api.com'
})

//request
fetchDataInterceptor.interceptors.request.use((request) => {
    request.headers['Accept'] = 'application/json';
    console.log('Request sent');
    return request;
},(error) => {
    return Promise.reject(error)
})

//response
fetchDataInterceptor.interceptors.response.use((response) => {
    console.log('request sent');
    return response;
},(error) => {
    if (error.response.status === 404) {
        // do something
        console.log('NOT FOUND');
      }
    return Promise.reject(error)
})

export default fetchDataInterceptor;