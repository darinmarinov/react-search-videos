import axios from 'axios';

const KEY = 'AIzaSyBuYV5kl6FgdQO6MDpATDX1BGWQrQi9Vds';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
})
