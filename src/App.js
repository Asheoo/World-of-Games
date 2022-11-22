import React, { createContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import ShopingCart from './components/Cart page/ShopingCart';
import Console from './components/Console pages/Console';
import Hero from './components/First page/Hero';
import Products from './components/Manage page/Products';
import ProductPage from './components/Product page/ProductPage';
import './css/HeroMedia.css';
import useDidMountEffect from './customHooks/useDidMountEffect';
import { addGame } from './redux/slices/gameSlice';

import { onValue, ref } from 'firebase/database';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from './config/firebase';

export const TypeContext = createContext();
function App() {
	const [user] = useAuthState(auth);
	const navigate = useNavigate();
	const openGamePage = useSelector((state) => state?.openGamePage.openPage);
	const gamePageExist = useSelector((state) => state?.openGamePage.value);
	const exist = useSelector((state) => state?.cartItem.exist);


	//sending user to cart if game dont exist in cart
	useEffect(() => {
		const navigateToCart = () => {
			navigate('/cart');
		};

		navigateToCart();
	}, [exist]);

	
	useDidMountEffect(() => {
		const navigateToGamePage = () => {
			navigate('/game');
		};

		navigateToGamePage();
	}, [openGamePage]);

	const cartItems = useSelector((state) => state?.cartItem.value);

	const [shuffleGames, setGames] = useState([]);
	const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
	const dispatch = useDispatch();

	useEffect(() => {
		onValue(ref(db), (snapshop) => {
			const data = snapshop.val();
			if (data !== null) {
				//Taking games from firebase
				setGames(shuffle(Object.values(data)));
				dispatch(addGame(Object.values(data)));
			}
		});
	}, []);

	//Menu effect
	window.addEventListener('scroll', function () {
		const menuWrapper = document.querySelector('.menu-wrapper');
		menuWrapper?.classList.toggle('sticky', window.scrollY > 0);
		const hamburgerMenu = this.document.querySelector('.hamburger-menu');
		hamburgerMenu?.classList.toggle('sticky', window.scrollY > 0);
	});

	return (
		<>
			<Routes>
				<Route path="/" exact element={<Hero shuffleGames={shuffleGames}></Hero>}></Route>
				<Route
					path="/products"
					element={user?.email === 'worldofgamesauth404@gmail.com' && <Products />}
				></Route>
				<Route
					path="/game"
					element={gamePageExist.length < 1 ? <Navigate to="/" /> : <ProductPage></ProductPage>}
				></Route>
				<Route
					path="/pc/*"
					element={
						<TypeContext.Provider value={'pc'}>
							<Console></Console>
						</TypeContext.Provider>
					}
				></Route>
				<Route
					path="/playstation/*"
					element={
						<TypeContext.Provider value={'ps'}>
							<Console></Console>
						</TypeContext.Provider>
					}
				></Route>
				<Route
					path="/xbox/*"
					element={
						<TypeContext.Provider value={'xbox'}>
							<Console></Console>
						</TypeContext.Provider>
					}
				></Route>
				<Route
					path="/cart"
					element={cartItems.length < 1 ? <Navigate to={-1} /> : <ShopingCart></ShopingCart>}
				></Route>
				<Route path="*" element={<Navigate to="/" replace />}></Route>
			</Routes>
		</>
	);
}

export default App;
