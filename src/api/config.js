import axios from 'axios';
import s from '../strings';
const baseURL = 'http://localhost:3001/api/';
// const baseURL = 'http://192.168.100.74:3001/api/';


const api = axios.create({ baseURL });
api.defaults.timeout = 10000;

const defaultError = {
    error: {
        success: false,
        message: 'Ocurrió un error',
        title: ' Error interno',
        status: 400
    }
};

export const getMessageError = (error) => {
    const stringTrim = ' ';
    if (error && error.response && error.response.status) {
        switch (error.response.status) {
            case 404:
                return s.errorGeneral + error.code + stringTrim + error.response.statusText || s.notSupport;
            case 0:
                return s.networkState + stringTrim + error.code;
            default:
                return s.errorGeneral  + ' ' + error.code || s.errorGeneral + s.internalError;
        }
    } else {
        if (error.error) {
            return error.error.title + stringTrim + error.error.message;
        }
        return s.errorGeneral + error;
    }
};


const handleError = (error, onError) => {
    if (error && error.response && error.response.status !== 500) {
        const {
            response: { status }
        } = error;
        status === 401 ? onError(error): onError(error);
    } else {
        onError(defaultError);
    }
};


export const GET_NO_AUTH = async (path, onSuccess, onError, onDone = null) => {
    api
        .get(path)
        .then((response) => onSuccess(response))
        .catch((error) => handleError(error, onError))
        .then(onDone);
};

