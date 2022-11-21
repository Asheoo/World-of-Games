import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import '../../css/Computer.css';
import useDidMountEffect from '../../customHooks/useDidMountEffect';
import PopUp from '../PopUp';
import AllConsoleGames from './AllConsoleGames';
import Category from './Category';
import NewConsoleGames from './NewConsoleGames';
import SaleConsoleGames from './SaleConsoleGames';
import SpecialGames from './SpecialGames';

function ConsolePage() {
	const [showPopup, setShowPopup] = useState(false);
	const stayOnPage = useSelector((state) => state?.cartItem.stayOnPage);
	useDidMountEffect(() => {
		if (stayOnPage === true) {
			setShowPopup(true);
		}

		
	}, [stayOnPage === true]);
	const removePopUp = (e) => {
		setShowPopup(e);
	};

	const games = useSelector((state) => state?.game.value);



	return (
		<div className="computer-container">
			<PopUp enabled={showPopup} removePopUp={removePopUp}></PopUp>
			<Category ></Category>

			<Routes>
				<Route path=":all/all" element={<AllConsoleGames games={games}></AllConsoleGames>}></Route>
				<Route path=":all/new" element={<NewConsoleGames games={games}></NewConsoleGames>}></Route>
				<Route
					path=":all/sale"
					element={<SaleConsoleGames games={games}></SaleConsoleGames>}
				></Route>
				<Route path=":all/special" element={<SpecialGames games={games}></SpecialGames>}></Route>
			</Routes>
		</div>
	);
}

export default ConsolePage;
