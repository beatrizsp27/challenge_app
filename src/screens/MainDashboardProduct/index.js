import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { k } from '../../utils';
import { GET_PRODUCT_SEARCH} from "../../api";
import { getMessageError } from '../../api/config';
import { ContainerComponent } from "../../component";

const MainDashboardProduct = () => {

	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState('');
	const [arrayListProduct, setArrayListProduct] = useState([]);


	useEffect(()=>{
		getProductSearch('iphone')
	}, []);

	const getProductSearch = async (text) =>{
		await GET_PRODUCT_SEARCH(
			text,
			onSuccessGetProductSearch,
			onErrorGetProductSearch,
			onDoneGetProductSearch
		);
	};

	const onSuccessGetProductSearch = response =>{
		const { data, success } = response.data;
		if (success) {
			if(data){
				const {items} = data;
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
		<>
			<ContainerComponent>
				{
					errorMessage &&  (
						<h1>{errorMessage}</h1>
					)
				}
				{arrayListProduct && arrayListProduct.length > 0 ? (
					<>
						{arrayListProduct.map((item)=> {
								console.log("item" + JSON.stringify(item.price))
								if(item){
									return (
										<div onClick={() => goDetailsProduct(item.id)} key={item.id} className={'screens_card'}>
											<div>
												<img src={item.picture} alt={item.title} width="100" height="130"/>
											</div>
											<div className={'screens_container_card'}>
												{item.price && item.price.decimals && (
													<h3>{`$${item.price.decimals}`} </h3>
												)}
												{item.title && (
													<h3 className={'screens_title'}>{item.title}</h3>
												)}
											</div>
											<div className={'screens_card_row3'}>
												<h5>{item.free_shipping ? 'Capital Federal' : 'Mendoza'}</h5>
											</div>
										</div>
									)
								}
								return null;
							})
						}
					</>
				):(
					<h1>No data</h1>
				)}
			</ContainerComponent>
		</>

	);
};

export default MainDashboardProduct;
