import axios from "axios";
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ec0c6e0e9b8846c180e350d6b70b7bd3'
    }
})