import React, { Component } from 'react';
import '../css/ProductPage.css';
import logo from '../Misc/wog earth.png';
import useDidMountEffect from '../customHooks/useDidMountEffect';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeOpenGame } from '../redux/slices/openGamePageSlice';
import { addCartItem } from '../redux/slices/cartItemSlice';
import PopUp from './PopUp';



function ProductPage() {
	const [game]=useSelector(state=>state?.openGamePage.value);
	const dispatch=useDispatch()
	const stayOnPage = useSelector((state) => state?.cartItem.stayOnPage);
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

	const [showPopup, setShowPopup] = useState(false);
	const color="#09BA7A"
	return (
		<div className="product-page">
			<PopUp enabled={showPopup} removePopUp={removePopUp} color={color}></PopUp>
			<div className="product-page-container">
				<div className="product-page-img" style={{backgroundImage:`url(${game.img_url})`}}></div>
				<div className="logo">
					<h1>
						W<img src={logo} alt="" />
						rld of Games{' '}
					</h1>
				</div>
				<div className="product-page-about">
					<h2>{game.name}</h2>
					<div className="product-about-text">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nulla necessitatibus
							qui harum veritatis voluptates ducimus magni sapiente facilis optio atque id, dicta
							deserunt voluptatem aperiam vel quibusdam maiores autem. Lorem, ipsum dolor sit amet
							consectetur adipisicing elit. Velit inventore molestiae soluta magni quos sed? Neque
							nesciunt cupiditate eum ad! Illo reprehenderit quos temporibus voluptate labore
							voluptatum. Non, perferendis ipsa.
						</p>
						<h4>{game.publisher}</h4>
						<h4>{game.relase_date}</h4>
					</div>
				</div>
				<div className="product-page-btn">
					<h2>{game.curr_price} $</h2>
					<button onClick={()=>{dispatch(addCartItem(game))}}>Buy</button>
				</div>
				<div className="empty">
				<NavLink to={-1} className='continue-shoping' onClick={()=>{dispatch(removeOpenGame())}}>
						<i className="fa-solid fa-angle-left"></i>
						<h2>Countinue shoping</h2>
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default ProductPage;
