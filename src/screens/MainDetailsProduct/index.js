import React, {useState,useEffect} from 'react';
import { useNavigate , useParams} from 'react-router-dom';
import { getMessageError } from '../../api/config';
import {GET_PRODUCT_BY_ID} from '../../api'
import {ContainerComponent} from "../../component";

const MainDetailsProduct = () => {
	/** HOOKS GENERALES */
	const navigate = useNavigate();
	const params = useParams();

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
				setProduct(item);
			}
		}
	};

	const onErrorGetDetailsProduct = error =>{
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
		// setErrorMessage(null);
	}

	const showError = message => {
		setErrorMessage(message);
	};

	return (
		<>
			<div className={'screens_title_header'}>
				<label  className={'screens_title_body_header'}>{'Electronica > audio > video > iphone'} </label>
			</div>
			<ContainerComponent>
				{errorMessage &&  (
					<h1 className={'screens_title_error'}>{errorMessage}</h1>
				)}
				{product && (
					<div>
						<div className={'screens_details_root'}>
							<div>
								<img src={product.picture} alt={product.title} width="680px" height="auto"/>
							</div>
							<div>
								{product.condition && (
									<div className={'screens_title_container'}>
										<p className={'title_condition'}>{product.condition === 'new' ? 'Nuevo':product.condition }</p>
										<p className={'title_condition'}>{` / ${product.sold_quantity} Vendidos`}</p>
									</div>

								)}
								{product.title && (
									<p className={'screen_title_detail'}>{product.title}</p>
								)}
								{product.price && product.price.decimals && (
									<p className={'screen_title_price'} >{`$${product.price.decimals}`} </p>
								)}
								<button className={'screen_details_button'} onClick={() => goBack()}>Comprar</button>
							</div>
						</div>
						<div className={'screen_details_description'}>
							<h3 className={'screen_title_description'}>Descripción del producto</h3>
							<p className={'screen_description'}>{product.description} </p>
						</div>
					</div>
				)}
			</ContainerComponent>
		</>

	);
};

export default MainDetailsProduct;
