import axios from "axios";
const URL = 'http://localhost:4000';


const createHeaders = (token) => {
    return { headers: { Authorization: `Bearer ${token}` } };
}


function postLogin (body){
    const promise = axios.post(`${URL}/sign-in`, body);
    return promise;
}

function postSignUp (body){
    const promise = axios.post(`${URL}/sign-up`, body);
    return promise;
}

function loadBoxServer (token){
    const promise = axios.get(`${URL}/main`, createHeaders(token));
    return promise;
}

function newTransaction (type, token, body){
    const promise = axios.post(`${URL}/cash/${type}`,body, createHeaders(token));
    return promise;
}




export {
    postLogin,
    postSignUp,
    loadBoxServer,
    newTransaction
}