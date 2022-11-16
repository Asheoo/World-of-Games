import React, { Component, useEffect, useState } from 'react';
import Hero from './components/Hero';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import ShopingCart from './components/ShopingCart';
import { addGame } from './redux/slices/gameSlice';
import { useDispatch } from 'react-redux';
import { createContext } from 'react';
import Console from './components/Console';
import ProductPage from './components/ProductPage';
import useDidMountEffect from './customHooks/useDidMountEffect';
import Products from './components/Products'
import "./css/HeroMedia.css"

import { db,auth } from './config/firebase';
import { set, ref, onValue, remove, update } from 'firebase/database';
import { useAuthState } from 'react-firebase-hooks/auth';

export const TypeContext = createContext();
function App() {
	const [user] = useAuthState(auth);
	const navigate = useNavigate();
	const openGamePage=useSelector((state)=>state?.openGamePage.openPage)
	const gamePageExist=useSelector(state=>state?.openGamePage.value)
	const exist = useSelector((state) => state?.cartItem.exist);
	// const stayOnPage = useSelector((state) => state?.cartItem.stayOnPage);
	useEffect(() => {
		const navigateToCart = () => {
			navigate('/cart');
		};

		navigateToCart();

		// console.log(exist);
	}, [exist]);
	useDidMountEffect(() => {
		const navigateToGamePage = () => {
			navigate('/game');
		};

		navigateToGamePage();

		// console.log(exist);
	}, [openGamePage]);

	// useDidMountEffect(() => {
	// 	console.log('Ostani na stranici');
	// }, [stayOnPage == false]);

	const cartItems = useSelector((state) => state?.cartItem.value);

	
	const [shuffleGames, setGames] = useState([]);
	const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
	const dispatch = useDispatch();
	
	// const [gameProduct,setGameProduct]=useState([])
	useEffect(() => {
		onValue(ref(db), (snapshop) => {
			// setTodos([]);
			const data = snapshop.val();
			if (data !== null) {
				// Object.values(data).map((game) => {
				// 	setGameProduct((oldArray) => [...oldArray, game]);
				// });
				setGames(shuffle(Object.values(data)))
				dispatch(addGame(Object.values(data)))
				
			}
		});
	}, []);
	// useEffect(() => {
	// 	fetch('https://raw.githubusercontent.com/Asheoo/games.json/main/games.json')
	// 		.then((res) => res.json())
	// 		.then((result) => {
	// 			setGames(shuffle(result));
	// 			dispatch(addGame(result));
	// 		});
	// }, [exist]);

	return (
		
			<Routes>
				<Route path="/" exact element={<Hero shuffleGames={shuffleGames}></Hero>}></Route>
				<Route path='/products' element={user?.email==="veljkopopovic33@gmail.com" && <Products/>}></Route>
				<Route path="/game" element={gamePageExist.length < 1 ? <Navigate to="/" /> : <ProductPage></ProductPage>}></Route>
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
	
	);
}

export default App;
