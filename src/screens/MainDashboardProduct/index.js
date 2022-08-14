import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { k } from '../../utils';
import {GET_PRODUCT_BY_ID} from "../../api";

const MainDashboardProduct = () => {
	const navigate = useNavigate();
	const goToDetails = () => {
		navigate(`${k.navigations.detailsProduct}1`);
	};

	useEffect(()=>{

	});

	const getProductSearch = async (id) =>{
		await GET_PRODUCT_BY_ID(id, onSuccessGetProductSearch, onErrorGetProductSearch, onDoneGetProductSearch )
	}

	const onSuccessGetProductSearch = response =>{
		console.log(response)
	};

	const onErrorGetProductSearch = error =>{
		console.log(error)
	};

	const onDoneGetProductSearch = () =>{

	}


	return (
		<div className='screens_root'>
			<h1>Hola mundo MainDashboardProduct </h1>
			<button onClick={() => goToDetails()}>detalle</button>
			<p>hola mundo</p>
		</div>
	);
};

export default MainDashboardProduct;
