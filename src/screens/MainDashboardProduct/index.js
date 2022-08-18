// eslint-disable-next-line
import React, {useEffect, useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { k } from '../../utils';
import { GET_PRODUCT_SEARCH} from "../../api";
import { getMessageError } from '../../api/config';
import { ContainerComponent } from "../../component";
import {icShipping} from "../../assets";

const MainDashboardProduct = () => {
	/** HOOKS **/
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState(null);
	const [arrayListProduct, setArrayListProduct] = useState([]);
	const { search } = useLocation();

	useEffect(()=>{
		getProductSearch()
	}, []);

	const getProductSearch = async () =>{
		const queryParams = new URLSearchParams(search)
		const textSearch = queryParams.get("search")
		if(textSearch){
			await GET_PRODUCT_SEARCH(
				textSearch,
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
			showMessageError(message || getMessageError(error));
		} else {
			showMessageError(getMessageError(error));
		}
	};

	const onDoneGetProductSearch = () =>{}

	const showMessageError = message => {
		setErrorMessage(message);
	};

	const goDetailsProduct = (id) => {
		navigate(`${k.navigations.detailsProduct}${id}`);
	}

	return (
		<div>
			<div className={'screens_title_header'}>
				<label  className={'screens_title_body_header'}>{'Electronica > audio > video > iphone'} </label>
			</div>
			<>
				<ContainerComponent>
					<div className={'screens_app_root'}>
						{errorMessage &&  (
							<>
								<label>Error</label>
								<h1 className={'screens_title_error'}>{errorMessage}</h1>

							</>
						)}
					</div>
				</ContainerComponent>
				{arrayListProduct && arrayListProduct.length > 0 && (
					<>
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
														<>
															<label className={'screens_title'}>{item.title}</label>
															<label className={'screens_title'}>Completo Unico!</label>
														</>
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
