import axios from "axios";

let AUTH_TOKEN='am token'//localStorage.getItem('token')
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

