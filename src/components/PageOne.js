import React, { Component, useState } from 'react';
import NewGames from './NewGames';
import Recommended from './Recommended';
import PopUp from './PopUp';
import { useSelector } from 'react-redux';
import useDidMountEffect from '../customHooks/useDidMountEffect';
import { useEffect } from 'react';

function PageOne({ shuffleGames }) {
	const [showPopup, setShowPopup] = useState(false);
	const stayOnPage = useSelector((state) => state?.cartItem.stayOnPage);
	const games = useSelector((state) => state?.game.value);
	useDidMountEffect(() => {
		if (stayOnPage === true) {
			setShowPopup(true);
		}

		console.log('Ostani na stranici', showPopup);
	}, [stayOnPage === true]);
	const removePopUp = (e) => {
		setShowPopup(e);
		console.log('usao', e);
	};
	// const [games,setGames]=useState([]);

	// useEffect(()=>{
	//     fetch('https://raw.githubusercontent.com/Asheoo/games.json/main/games.json')
	//     .then(res=>res.json())
	//     .then(result=>{
	//         setGames(result)
	//     })
	// },[])
	return (
		<div className="container">
			<PopUp enabled={showPopup} removePopUp={removePopUp}></PopUp>
			<Recommended shuffleGames={shuffleGames}></Recommended>
			<NewGames games={games}></NewGames>
		</div>
	);
}

export default PageOne;