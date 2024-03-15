import axios from "axios";

const fetchCustomPhotos = axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers: {
        Accept: 'application/json',
        Authorization: 'Client-ID gDcmb3Sf0PCDhYt3EUOcqdouURZDZE7brDR_AtURWas'
    },
    // queryParams: {
    //     page: 1,
    //     query: 'cats'
    // }
})

export default fetchCustomPhotos;