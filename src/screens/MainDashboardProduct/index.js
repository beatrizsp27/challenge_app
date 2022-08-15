// eslint-disable-next-line
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { k } from '../../utils';
import { GET_PRODUCT_SEARCH} from "../../api";
import { getMessageError } from '../../api/config';
import { ContainerComponent } from "../../component";
import SearchComponent from "../../component/SearchComponent";
import {icShipping} from "../../assets";

const MainDashboardProduct = () => {

	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState('');
	const [arrayListProduct, setArrayListProduct] = useState([]);

	const getProductSearch = async (text) =>{
		console.log("text.target.value_-----------"+ text);
		if(text  && text.target && text.target.value){
			console.log("text.target.value"+ text.target);
			console.log("text.target.value"+ text.target.value);
			await GET_PRODUCT_SEARCH(
				'iphone',
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
				console.log("items" + JSON.stringify(items))
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
			showError(message || getMessageError(error));
		} else {
			showError(getMessageError(error));
		}
	};

	const onDoneGetProductSearch = () =>{
		setErrorMessage(null);
	}

	const showError = message => {
		setErrorMessage(message);
	};

	const goDetailsProduct = (id) => {
		navigate(`${k.navigations.detailsProduct}${id}`);
	}

	return (
		<div>
			<SearchComponent handleChange={(text)=>getProductSearch(text)}/>
			<>
				{
					errorMessage &&  (
						<h1>{errorMessage}</h1>
					)
				}
				{arrayListProduct && arrayListProduct.length > 0 && (
					<>
						<div className={'screens_title_body_header'}>
							<label  className={'screens_title_header'}>{'Electronica > audio > video > ipno'} </label>
						</div>
						<ContainerComponent>
							{arrayListProduct.map((item)=> {
								if(item){
									return (
										<div onClick={() => goDetailsProduct(item.id)} key={item.id} className={'screens_card'}>
											<div className={'screens_img'}>
												<img  src={item.picture} alt={item.title} width="180px" height="180px"/>
											</div>
											<div className={'screens_container_card'}>
												{item.price && item.price.decimals && (
													<div className={'screens_card_icon_title'}>
														<h3 className={'text_price'} >{`$ ${item.price.decimals}`} </h3>
														{item.free_shipping && (
															<img src={icShipping} alt={item.title} width="25px"
																 height="25px"/>
														)}
													</div>
												)}
												<>
													{item.title && (
														<label className={'screens_title'}>{item.title}</label>
													)}
												</>
											</div>
											<div className={'screens_card_row3'}>
												<h5 className={'screens_subtitle'} >{item.free_shipping ? 'Capital Federal' : 'Mendoza'}</h5>
											</div>
										</div>
									)
								}
								return null;
							})
							}
						</ContainerComponent>
					</>
				)}
			</>
		</div>

	);
};

export default MainDashboardProduct;
