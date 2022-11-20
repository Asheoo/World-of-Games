import React, { useEffect, useState, createContext } from 'react';
import Hero from './components/Hero';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import ShopingCart from './components/ShopingCart';
import { addGame } from './redux/slices/gameSlice';
import Console from './components/Console';
import ProductPage from './components/ProductPage';
import useDidMountEffect from './customHooks/useDidMountEffect';
import Products from './components/Products';
import './css/HeroMedia.css';

import { db, auth } from './config/firebase';
import { ref, onValue } from 'firebase/database';
import { useAuthState } from 'react-firebase-hooks/auth';

export const TypeContext = createContext();
function App() {
	const [user] = useAuthState(auth);
	const navigate = useNavigate();
	const openGamePage = useSelector((state) => state?.openGamePage.openPage);
	const gamePageExist = useSelector((state) => state?.openGamePage.value);
	const exist = useSelector((state) => state?.cartItem.exist);

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
				setGames(shuffle(Object.values(data)));
				dispatch(addGame(Object.values(data)));
			}
		});
	}, []);

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
					element={user?.email === 'veljkopopovic33@gmail.com' && <Products />}
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
