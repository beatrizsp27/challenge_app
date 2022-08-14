import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { k } from '../../utils';
import { GET_PRODUCT_BY_ID ,GET_PRODUCT_SEARCH} from "../../api";
import { getMessageError } from '../../api/config';

const MainDashboardProduct = () => {

	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState('');
	const [arrayListProduct, setArrayListProduct] = useState([]);
	//const [isLoader, setIsLoader] = useState(true);

	const getProductSearch = async (text) =>{
		await GET_PRODUCT_SEARCH(
			text,
			onSuccessGetProductSearch,
			onErrorGetProductSearch,
			onDoneGetProductSearch
		);
	};

	const onSuccessGetProductSearch = response =>{
		console.log(response)
		const { data, success } = response.data;
		if (success) {
			if(data){
				const {items} = data;
				setArrayListProduct(items);
			}
		}
	};

	const onErrorGetProductSearch = error =>{
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
		<div className='screens_root'>
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
		</div>
	);
};

export default MainDashboardProduct;
