import React from "react";
import { useNavigate } from 'react-router-dom';

const MainDetailsProduct = () =>{
    const navigate = useNavigate();
    const goToDetails = () =>{
        navigate(-1)
    }

    return(
        <>
         <h1>Hola mundo MainDetailsProduct </h1>
         <button onClick={()=>goToDetails()} >Regresar</button>
        </>
    )
};

export default MainDetailsProduct;