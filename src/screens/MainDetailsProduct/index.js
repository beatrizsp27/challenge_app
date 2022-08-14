import React, {useState,useEffect} from 'react';
import { useNavigate , useParams} from 'react-router-dom';
import { getMessageError } from '../../api/config';
import {GET_PRODUCT_BY_ID} from '../../api'


const MainDetailsProduct = () => {
	/**HOOKS GENERALES*/
	const navigate = useNavigate();
	const params = useParams();

	/**HOOKS VARIABLES*/
	const [errorMessage, setErrorMessage] = useState('');
	const [loader, setIsLoader] = useState(false);
	const [product, setProduct] = useState(null);

	const goBack = () => {
		navigate(-1);
	};

	useEffect(()=>{
		if (params && params.code) {
			setIsLoader(true);
			const { id } = params;
			getDetailsProduct(id)
		}
	}, [])


	const getDetailsProduct  = (id) => {
		GET_PRODUCT_BY_ID(
			id,
			onSuccessGetDetailsProduct,
			onErrorGetDetailsProduct,
			onDoneGetDetailsProduct
		)
	};

	const onSuccessGetDetailsProduct = response =>{
		console.log(response)
		const { data, success } = response.data;
		if (success) {
			if(data){
				const {item} = data;
				setProduct(item);
			}
		}
	};

	const onErrorGetDetailsProduct = error =>{
		console.log(error)
		if (error && error.response && error.response.data) {
			const {
				response: {
					data: { message }
				}
			} = error;
			showError(message || getMessageError(error));
		} else {
			showError(getMessageError(error));
		}
	};

	const onDoneGetDetailsProduct = () =>{
		setErrorMessage(null);
	}

	const showError = message => {
		setErrorMessage(message);
	};

	return (
		<>
			{
				errorMessage &&  (
					<h1>{errorMessage}</h1>
				)
			}
			<div>
				<h1>{product.title} </h1>
				<button onClick={() => goBack()}>Regresar</button>
			</div>
		</>
	);
};

export default MainDetailsProduct;
