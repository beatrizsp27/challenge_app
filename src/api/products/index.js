import { GET_NO_AUTH } from '../config';
import paths from './paths';

export const GET_PRODUCT_SEARCH = async (text, limit ,onSuccess, onError, onDone) => {
    let url = `${paths.items}?&limit=${limit}`
    if(text && limit){
        url= `${paths.items}?q=${text}&limit=${limit}`;
    }else {
        if(text){
            url= `${paths.items}?q=${text}`;
        }
    }
    console.log("url::" + url );
    await GET_NO_AUTH(url, onSuccess, onError, onDone);
};

export const GET_PRODUCT_BY_ID = async (id, onSuccess, onError, onDone) => {
    await GET_NO_AUTH(`${paths.item}${id}`, onSuccess, onError, onDone);
};
