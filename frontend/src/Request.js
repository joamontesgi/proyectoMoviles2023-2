import axios from 'axios';

const createNewUser = axios.create({
    baseURL: 'http://192.168.0.11:8000/api/users/',
    timeout: 5000,
});

export default createNewUser;