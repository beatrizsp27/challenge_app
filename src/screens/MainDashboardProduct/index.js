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
			<header>
				<h1>Welcome to React Router!</h1>
			</header>
			<ContainerComponent>
				{
					errorMessage &&  (
						<h1>{errorMessage}</h1>
					)
				}
				{arrayListProduct && arrayListProduct.length > 0 ? (
					<>
						{
							arrayListProduct.map((item)=>(
								<div key={item.id}>
									<h1>{item.title}</h1>
									<p>hola mundo</p>
									<button onClick={() => goDetailsProduct(item.id)}>ver detalle de prodcuto</button>

								</div>
							))
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
