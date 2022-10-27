import React, { Component, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import Menu_wrapper from './Menu_wrapper';
import '../css/Shop.css';
import { NavLink } from 'react-router-dom';
import Summary from './Summary';
import { changeExist } from '../redux/slices/cartItemSlice';
import { useDispatch } from 'react-redux';
import { removeOpenGame } from '../redux/slices/openGamePageSlice';
function ShopingCart() {
	const dispatch=useDispatch()
	const scrollDown=useSelector(state=>state?.cartItem.exist)
	const cartItems = useSelector((state) => state?.cartItem.value);
	let numberOfItems=0
	// const uniqueIds=[]
	// const filterDuplicates=cartItems.filter(element=>{
	// 	const isDuplicate=uniqueIds.includes(element.id);

	// 	if (!isDuplicate){
	// 		uniqueIds.push(element.id)
	// 		return true
	// 	}

		
	// 	return false

	// })
	useEffect(()=>{
		window.scroll({
			top: document.body.offsetHeight,
			left: 0, 
		  });
	},[scrollDown])

	const allCartItems =cartItems.map((item, index) => {
		numberOfItems=index+1
		return (
			<div key={item.id}>
				<CartItem game={item} index={index}></CartItem>
			</div>
		);
	});
	
	return (
		<div className="shop-bg">
			<div className="shoping-cart">
				<div className="cart-wide">
					<div className="shop-header">
						<h2>Shoping Cart</h2>
						<h2>{numberOfItems} {numberOfItems<=1 ? "item" : "items"}</h2>
					</div>
					<div className="line"></div>
					<ul className="cart-ul">
						<li>product details</li>
						<li>discount</li>
						<li>price</li>
						<li>total</li>
					</ul>
					{allCartItems}
					<NavLink to={-1} className='continue-shoping' onClick={()=>{dispatch(removeOpenGame())}}>
						<i className="fa-solid fa-angle-left"></i>
						<h2>Countinue shoping</h2>
					</NavLink>
				</div>
				<div className="summary">
				

					<Summary numberOfItems={numberOfItems} cartItems={cartItems}></Summary>
				</div>
			</div>
		</div>
	);
}

export default ShopingCart;
