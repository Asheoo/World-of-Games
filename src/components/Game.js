import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../redux/slices/cartItemSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { openGame } from '../redux/slices/openGamePageSlice';

function Game({ game,delBorder,handleDelete,handleUpdate }) {
	// const navigate = useNavigate();

	// const exist = useSelector((state) => state?.cartItem.exist);
	// console.log(exist);

	// useEffect(() => {
	// const navigateToCart = () => {
	// 	navigate('/cart');
	// }
	// 	if(exist){
	// 		navigateToCart()
	// 	}

	// },[exist]);

	const dispatch = useDispatch();

	let newSale = '';

	if (game.relase_date >= 2022 && game.sale) {
		newSale = (
			<div className="special">
				<p>NEW / SALE</p>
			</div>
		);
	} else if (game.relase_date >= 2022) {
		newSale = (
			<div className="new">
				<p>NEW</p>
			</div>
		);
	} else if (game.sale) {
		newSale = (
			<div className="sale">
				<p>SALE</p>
			</div>
		);
	} else {
		newSale = '';
	}

	return (
		
		<div className={delBorder? "manage-game-border" : 'game-card-border'} onClick={()=>{!delBorder && dispatch(openGame(game)) }}>

			<div style={{ backgroundImage: `url(${game.img_url})` }} className="card-img">
				{newSale}
				<div className="blur">
					<p>
						{game.curr_price} € <span>{game.sale}</span>
					</p>
					<span
						onClick={(e) => {
							e.stopPropagation();dispatch(addCartItem(game));
						}}
						className="cart"
						id={game.id}
						>
						<i className="fa-solid fa-cart-shopping"></i>
					</span>
				</div>
			</div>
			<div >
				<h3>
					{game.name} <span>{game.relase_date}</span>
				</h3>
				<p>Publisher: {game.publisher}</p>
{/* 
				<button>Edit</button> */}
				{delBorder?
				<>
				<button onClick={()=>{handleDelete(game)}} className="manage-btn delete">Delete</button>
				<button className='manage-btn edit' onClick={()=>handleUpdate(game)}>Edit</button>
				</>
				: ''}
			</div>
		
			</div>
	);
}

export default Game;
