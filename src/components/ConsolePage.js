import React, { Component } from 'react';
import '../css/Computer.css';
import Category from './Category';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import PopUp from './PopUp';
import useDidMountEffect from '../customHooks/useDidMountEffect';
import { Routes, Route } from 'react-router-dom';
import AllConsoleGames from './AllConsoleGames';
import NewConsoleGames from './NewConsoleGames';
import SaleConsoleGames from './SaleConsoleGames';
import { Navigate } from 'react-router-dom';
import SpecialGames from './SpecialGames';

function ConsolePage() {
	const [showPopup, setShowPopup] = useState(false);
	const stayOnPage = useSelector((state) => state?.cartItem.stayOnPage);
	useDidMountEffect(() => {
		if (stayOnPage === true) {
			setShowPopup(true);
		}

		console.log('Ostani na stranici', showPopup);
	}, [stayOnPage === true]);
	const removePopUp = (e) => {
		setShowPopup(e);
		
	};

	const games = useSelector((state) => state?.game.value);
	

	// const pcGames = games[0]
	// 	?.filter((game) => game.pc)
	// 	.map((game) => {
	// 		return (
	// 			<article className="game-card" key={game.id}>
	// 				<Game game={game}></Game>
	// 			</article>
	// 		);
	// 	});

	const categoryChoice = (e) => {
		return e;
	};

	return (
		<div className="computer-container">
			<PopUp enabled={showPopup} removePopUp={removePopUp}></PopUp>
			<Category categoryChoice={categoryChoice}></Category>

			
				<Routes>
					<Route path=":all/all" element={<AllConsoleGames games={games}  ></AllConsoleGames>}></Route>
					<Route path=":all/new" element={<NewConsoleGames games={games}></NewConsoleGames>}></Route>
					<Route path=":all/sale" element={<SaleConsoleGames games={games} ></SaleConsoleGames>}></Route>
					<Route path=":all/special" element={<SpecialGames games={games}></SpecialGames>}></Route>
				</Routes>
			
			
		</div>
	);
}

export default ConsolePage;
