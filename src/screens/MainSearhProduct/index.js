// eslint-disable-next-line
import React, { useState } from 'react';
import {ContainerComponent, SearchComponent} from "../../component";
import {k} from "../../utils";
import {useNavigate} from "react-router-dom";
import {GET_PRODUCT_SEARCH} from "../../api";
import {getMessageError} from "../../api/config";

const MainSearchProduct = () => {

    const [textSearch, setTextSearch] = useState(null);
    const [arrayListProduct, setArrayListProduct] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();
    const handleChange = (text) =>{
        console.log( "text.target.value:" + text.target.value)
        text.preventDefault();
        if(text && text.target && text.target.value){
            getProductSearchText()
            setTextSearch(text.target.value);
            setErrorMessage(null);
        }else {
            setArrayListProduct([]);
            setTextSearch(null);
            navigate('/');
        }
    };

    const goToNavigateProduct = ()=>{
        navigate(`${k.navigations.productItem}?search=${textSearch}`)
        window.location.reload();
    };

    const goToNavigateProductByText = (text)=>{
        navigate(`${k.navigations.productItem}?search=${text}`)
        window.location.reload();
    };

    const getProductSearchText = async () =>{
        if(textSearch){
            await GET_PRODUCT_SEARCH(
                textSearch,
                null,
                onSuccessGetProductSearch,
                onErrorGetProductSearch,
                onDoneGetProductSearch
            );
        }else {
            setArrayListProduct([]);
        }
    };

    const onSuccessGetProductSearch = response =>{
        const { data, success } = response.data;
        if (success) {
            if(data){
                const {items} = data;
                console.log("items::::" + JSON.stringify(items))
                setArrayListProduct(items);
            }
        }
    };

    const onErrorGetProductSearch = error =>{
        if (error && error.response && error.response.data) {
            const {
                response: {
                    data: { message }
                }
            } = error;
            showMessageError(message || getMessageError(error));
        } else {
            showMessageError(getMessageError(error));
        }
    };

    const onDoneGetProductSearch = () =>{}

    const showMessageError = message => {
        setErrorMessage(message);
    };

    return (
        <>

            <SearchComponent
                textSearch={textSearch}
                onAction={goToNavigateProduct}
                handleChange={(text)=>handleChange(text)}/>
                {errorMessage &&  (
                    <ContainerComponent>
                        <div className={'screens_app_root'}>
                            <>
                                <label>Error</label>
                                <h1 className={'screens_title_error'}>{errorMessage}</h1>
                            </>
                        </div>
                    </ContainerComponent>
                )}
               {arrayListProduct && arrayListProduct.length>0 && (
                <div className={'list_search'}>
                    {arrayListProduct.map((product, index)=>(
                        <a onClick={()=>goToNavigateProductByText(product.title)} key={index}>{product.title}</a>
                    ))}
                </div>
            )}
        </>
    );
};

export default MainSearchProduct;
