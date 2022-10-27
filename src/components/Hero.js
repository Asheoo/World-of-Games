import React, { Component, useEffect, useState } from 'react';
import Imgs from './Imgs';
import Menu_wrapper from './Menu_wrapper';
import NavigationManual from './NavigationManual';
import PageOne from './PageOne';
import '../css/Hero.css';
import { addGame } from '../redux/slices/gameSlice';
import { useDispatch } from 'react-redux';


function Hero({shuffleGames}) {
	let counter = 2;
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

	
	// const dispatch=useDispatch()
	// const [games, setGames] = useState([]);
	// const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
	// const shuffleGames=shuffle(games)
	// useEffect(() => {
	// 	fetch('https://raw.githubusercontent.com/Asheoo/games.json/main/games.json')
	// 		.then((res) => res.json())
	// 		.then((result) => {
	// 			dispatch(addGame(result))
	// 			setGames(shuffle(result));
	// 		});
	// }, []);

	return (
		<>
			<div className="hero-bg">
				<Imgs shuffleGames={shuffleGames}></Imgs>
				<Menu_wrapper></Menu_wrapper>
				<NavigationManual></NavigationManual>
			</div>
			<PageOne shuffleGames={shuffleGames}></PageOne>
		</>
	);
}

export default Hero;
