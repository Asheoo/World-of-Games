import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<BrowserRouter>
		<ScrollToTop></ScrollToTop>
			<App />
		</BrowserRouter>
	</Provider>
);








