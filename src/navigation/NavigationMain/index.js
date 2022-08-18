import * as React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {
	MainDashboardProductScreen,
	MainDetailsProductScreen, MainRootScreen,
	MainSearchProductScreen,
} from '../../screens';
import { k } from '../../utils';
import App from "../../App";

const NavigationMain = () => {
	return (
		<div className={'screens_root'} >
			<div>
				<BrowserRouter>
					<MainSearchProductScreen />
					<Routes>
						<Route
							path={k.navigations.product}
							element={<MainRootScreen />}
						/>
						<Route
							path={`${k.navigations.productItem}`}
							element={<MainDashboardProductScreen />}
						/>
						<Route path='/details' element={<MainDetailsProductScreen />} />
						<Route
							path={`${k.navigations.detailsProduct}:id`}
							element={<MainDetailsProductScreen />}
						/>
						<Route
							path={k.navigations.all}
							element={<App />}
						/>
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
};
export default NavigationMain;
