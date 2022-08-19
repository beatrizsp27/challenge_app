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
    const [showList, setShowList] = useState(false);

    const navigate = useNavigate();
    const handleChange = (text) =>{
        text.preventDefault();
        if(text && text.target && text.target.value){
            getProductSearchText()
            setTextSearch(text.target.value);
            setErrorMessage(null);
        }else {
            const list = [];
            setTimeout(()=>{
                setTextSearch(null);
                navigate('/');
                setArrayListProduct(list);
                setShowList(false);
            }, 200)

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
                12,
                onSuccessGetProductSearch,
                onErrorGetProductSearch,
                onDoneGetProductSearch
            );
        }else {
            setArrayListProduct([]);
            setShowList(false);
        }
    };

    const onSuccessGetProductSearch = response =>{
        const { data, success } = response.data;
        if (success) {
            if(data){
                const {items} = data;
                setArrayListProduct(items);
                setShowList(true);
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
                {
                    showList && (
                        <>
                            {arrayListProduct && arrayListProduct.length > 0 && (
                                <div className={'list_search'}>
                                    {arrayListProduct.map((product, index)=>(
                                        <a onClick={()=>goToNavigateProductByText(product.title)} key={index}>{product.title}</a>
                                    ))}
                                </div>
                            )}
                        </>
                    )
                }


        </>
    );
};

export default MainSearchProduct;
