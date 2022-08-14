import { GET_AUTH } from '../config';
import paths from './paths';

export const GET_PRODUCT_SEARCH = async (text, onSuccess, onError, onDone) => {
    const url =  `${paths.items}?q=${text}`;
    await GET_AUTH(url, onSuccess, onError, onDone);
};

export const GET_PRODUCT_BY_ID = async (id, onSuccess, onError, onDone) => {
    await GET_AUTH(`${paths.item}${id}`, onSuccess, onError, onDone);
};
