// eslint-disable-next-line
import React, { useState } from 'react';
import {SearchComponent} from "../../component";
import {k} from "../../utils";
import {useNavigate} from "react-router-dom";

const MainSearchProduct = () => {

    const [textSearch, setTextSearch] = useState(null);
    const navigate = useNavigate();
    const handleChange = (text) =>{
        if(text && text.target && text.target.value){
            setTextSearch(text.target.value);
        }else {
            setTextSearch(null);
            navigate('/');
        }
    };

    const goToNavigateProduct = ()=>{
        navigate(`${k.navigations.productItem}?search=${textSearch}`)
        window.location.reload();
    };

    return (
        <div>
            <SearchComponent
                textSearch={textSearch}
                onAction={goToNavigateProduct}
                handleChange={(text)=>handleChange(text)}/>
        </div>
    );
};

export default MainSearchProduct;
