import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import '../css/Shop.css';
import { NavLink } from 'react-router-dom';
import Summary from './Summary';
import { removeOpenGame } from '../redux/slices/openGamePageSlice';
import Footer from './Footer';
function ShopingCart() {
	const dispatch = useDispatch();
	const scrollDown = useSelector((state) => state?.cartItem.exist);
	const cartItems = useSelector((state) => state?.cartItem.value);
	let numberOfItems = 0;
	useEffect(() => {
		window.scroll({
			top: document.body.offsetHeight,
			left: 0
		});
	}, [scrollDown]);

	const allCartItems = cartItems.map((item, index) => {
		numberOfItems = index + 1;
		return (
			<div key={item.id}>
				<CartItem game={item} index={index}></CartItem>
			</div>
		);
	});

	return (
		<>
			<div className="shop-bg nonres-shop">
				<div className="shoping-cart">
					<div className="cart-wide">
						<div className="shop-header">
							<h2>Shopping Cart</h2>
							<h2>
								{numberOfItems} {numberOfItems <= 1 ? 'item' : 'items'}
							</h2>
						</div>
						<div className="line"></div>
						<ul className="cart-ul">
							<li>product details</li>
							<li>discount</li>
							<li>price</li>
							<li>total</li>
						</ul>
						{allCartItems}
						<NavLink
							to={-1}
							className="continue-shoping"
							onClick={() => {
								dispatch(removeOpenGame());
							}}
						>
							<i className="fa-solid fa-angle-left"></i>
							<h2>Continue shopping</h2>
						</NavLink>
					</div>
					<div className="summary">
						<Summary numberOfItems={numberOfItems} cartItems={cartItems}></Summary>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
}

export default ShopingCart;
