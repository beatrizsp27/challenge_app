import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
	MainDashboardProductScreen,
	MainDetailsProductScreen,
} from '../../screens';
import { k } from '../../utils';
import clsx from "clsx";

const NavigationMain = () => {
	return (
		<div className={'screens_root'} >
			<div>
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
		</div>
	);
};
export default NavigationMain;
