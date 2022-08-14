import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
	MainDashboardProductScreen,
	MainDetailsProductScreen,
} from '../../screens';
import { k } from '../../utils';
import img from  '../../assets/product/Logo_ML@2x.png.png'

const NavigationMain = () => {
	return (
		<div>
			<header className={'screens_details_header'} >
				<img src={img} alt={''} width="50" height="50"/>
				<h1>Welcome to React Router!</h1>
			</header>
			<BrowserRouter>
				<Routes>
					<Route
						path={k.navigations.product}
						element={<MainDashboardProductScreen />}
					/>
					<Route path='/details' element={<MainDetailsProductScreen />} />
					<Route
						path={`${k.navigations.detailsProduct}:id`}
						element={<MainDetailsProductScreen />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};
export default NavigationMain;
