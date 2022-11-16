import React, { Component } from 'react';
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

window.addEventListener('scroll', function () {
	const menuWrapper = document.querySelector('.menu-wrapper');
	menuWrapper?.classList.toggle('sticky', window.scrollY > 0);
	const hamburgerMenu=this.document.querySelector('.hamburger-menu');
	hamburgerMenu?.classList.toggle('sticky',window.scrollY>0)
});

// let counter = 2;
// setInterval(() => {
// 	document.getElementById('radio' + counter).checked = true;
// 	counter++;
// 	if (counter > 3) {
// 		counter = 1;
// 	}
// }, 5000);

// let counter = 2;
// if (window.location.pathname != '/cart') {
// 	const imgSlider = setInterval(() => {
// 		document.getElementById('radio' + counter).checked = true;
// 		counter++;
// 		if (counter > 3) {
// 			counter = 1;
// 		}
// 		if (window.location.pathname == '/cart') {
// 			clearInterval(imgSlider);
// 			console.log('usao');
// 		}
// 	}, 5000);
// }





