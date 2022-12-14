// eslint-disable-next-line
import React, {useEffect, useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { k } from '../../utils';
import { GET_PRODUCT_SEARCH} from "../../api";
import { getMessageError } from '../../api/config';
import { ContainerComponent, CategoriesComponent } from "../../component";
import {icShipping} from "../../assets";
import {amountFormat} from "../../utils/utilsFormat";

const MainDashboardProduct = () => {
	/** HOOKS **/
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState(null);
	const [arrayListProduct, setArrayListProduct] = useState([]);
	const [categoriesArray, setCategoriesArray] = useState([]);
	const [limit] = useState(4);
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
				limit,
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
				const {items, categories} = data;
				setArrayListProduct(items);
				setCategoriesArray(categories)
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
		navigate(`${k.navigations.detailsProduct}${id}`, {
			state: {
				categoriesArray
			}});
	}

	return (
		<div>
			<CategoriesComponent categoriesArray={categoriesArray}/>
			<>
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
				{arrayListProduct && arrayListProduct.length > 0 && (
					<>
						<ContainerComponent>
							{arrayListProduct.map((item)=> {
								if(item){
									return (
										<div onClick={() => goDetailsProduct(item.id)} key={item.id} className={'screens_card'}>
											<div className={'screens_img_product'}>
												<img className={'screen_img'} src={item.picture} alt={item.title}/>
											</div>
											<div className={'screens_container_card'}>
												{item.price && item.price.decimals && (
													<div className={'screens_card_icon_title'}>
														<h3 className={'text_price'} >{amountFormat(item.price.decimals)} </h3>
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
