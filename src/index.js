import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import { NavigationMain } from './navigation';
import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<NavigationMain />
	</React.StrictMode>
);
