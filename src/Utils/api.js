import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    timeout: 2000
});

export function getWorkouts() {
    // return axiosClient.get(`/${URL}`).then(response => response).catch(e => e);
    return apiRequest('workouts', 'GET')
}

function apiRequest(url, type, payload) {
    if (type == 'GET') {
        return axiosClient.get(`/${url}`).then(response => response).catch(e => console.log('Request Error', e));
    }
    if (type == 'POST') {
        return axiosClient.post(`/${url}`, payload).then(response => response).catch(e => console.log('Request Error', e));
    }
}