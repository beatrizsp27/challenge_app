import React, {useState,useEffect} from 'react';
import { useNavigate , useParams} from 'react-router-dom';
import { getMessageError } from '../../api/config';
import {GET_PRODUCT_BY_ID} from '../../api'
import {ContainerComponent} from "../../component";

const MainDetailsProduct = () => {
	/** HOOKS GENERALES */
	const navigate = useNavigate();
	const params = useParams();
	console.log("params" + JSON.stringify(params));

	/** HOOKS VARIABLES */
	const [errorMessage, setErrorMessage] = useState('');
	const [loader, setIsLoader] = useState(false);
	const [product, setProduct] = useState(null);

	const goBack = () => {
		navigate(-1);
	};

	useEffect(()=>{
		if (params && params.id) {
			setIsLoader(true);
			const { id } = params;
			getDetailsProduct(id)
		}
	}, [])


	const getDetailsProduct  = async (id) => {
		await GET_PRODUCT_BY_ID(
			id,
			onSuccessGetDetailsProduct,
			onErrorGetDetailsProduct,
			onDoneGetDetailsProduct
		)
	};

	const onSuccessGetDetailsProduct = response =>{
		const { data, success } = response.data;
		if (success) {
			if(data){
				const {item} = data;
				console.log("item::: " + JSON.stringify(data))
				setProduct(item);
			}
		}
	};

	const onErrorGetDetailsProduct = error =>{
		console.log("error::: " + JSON.stringify(error))
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
		<ContainerComponent>
			{errorMessage &&  (
				<h1>{errorMessage}</h1>
			 )}
			{product && (
				<div>
					<div className={'screens_details_root'}>
						<div>
							<img src={product.picture} alt={product.title} width="250" height="300"/>
						</div>
						<div>
							{product.condition && (
								<div className={'screens_title_container'}>
									<p>{product.condition}</p>
									<p>{`/ ${product.sold_quantity} Vendidos`}</p>
								</div>

							)}
							{product.title && (
								<h3 className={'screens_title'}>{product.title}</h3>
							)}
							{product.price && product.price.decimals && (
								<h1>{`$${product.price.decimals}`} </h1>
							)}
							<button className={'screen_details_button'} onClick={() => goBack()}>Comprar</button>
						</div>
					</div>
					<div className={'screen_details_description'}>
						<h3>Descripción del producto</h3>
						<p>{product.description} </p>
					</div>
				</div>
			)}
		</ContainerComponent>
	);
};

export default MainDetailsProduct;
