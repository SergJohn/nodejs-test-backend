import axios from 'axios';

const api = axios.create({
    baseURL: 'https://gnar-tasks.herokuapp.com/' || 'http://localhost:5000'
    
})

export default api;