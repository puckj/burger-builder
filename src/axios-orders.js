import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-8212b.firebaseio.com/'
})

export default instance;