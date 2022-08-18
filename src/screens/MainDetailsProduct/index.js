import React, {useState,useEffect} from 'react';
import { useNavigate , useParams} from 'react-router-dom';
import { getMessageError } from '../../api/config';
import {GET_PRODUCT_BY_ID} from '../../api'
import {ContainerComponent} from "../../component";
import {amountFormat} from "../../utils/utilsFormat";

const MainDetailsProduct = () => {
	/** HOOKS GENERALES */
	const navigate = useNavigate();
	const params = useParams();

	/** HOOKS VARIABLES */
	const [errorMessage, setErrorMessage] = useState('');
	const [product, setProduct] = useState(null);

	const goBack = () => {
		navigate('/');
	};

	useEffect(()=>{
		if (params && params.id) {
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
			{errorMessage &&  (
				<div className={'screens_app_root'}>
					<>
						<label>Error</label>
						<h1 className={'screens_title_error'}>{errorMessage}</h1>

					</>
				</div>
			)}
			<ContainerComponent>
				{product && (
					<div>
						<div className={'screens_details_root'}>
							<div className={'screens_img_details_product'}>
								<img className={'screen_img_details'} src={product.picture} alt={product.title} />
							</div>
							<div className={'screens_text_details_product'}>
								{product.condition && (
									<div className={'screens_title_container'}>
										<label className={'title_condition'}>{product.condition === 'new' ? 'Nuevo':product.condition }</label>
										<label className={'title_condition'}>{` / ${product.sold_quantity} Vendidos`}</label>
									</div>
								)}
								{product.title && (
									<label className={'screen_title_detail'}>{product.title}</label>
								)}
								{product.price && product.price.decimals && (
									<label className={'screen_title_price'} >{amountFormat(product.price.decimals)} </label>
								)}
								<div className={'screens_details_bottom'}>
									<button className={'screen_details_button'} onClick={() => goBack()}>Comprar</button>
								</div>
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
