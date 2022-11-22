import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../../css/ProductPage.css';
import useDidMountEffect from '../../customHooks/useDidMountEffect';
import { addCartItem } from '../../redux/slices/cartItemSlice';
import { removeOpenGame } from '../../redux/slices/openGamePageSlice';
import PopUp from '../PopUp';

function ProductPage() {
	//getting game that is clicked
	const [game] = useSelector((state) => state?.openGamePage.value);
	const dispatch = useDispatch();
	const stayOnPage = useSelector((state) => state?.cartItem.stayOnPage);
	useDidMountEffect(() => {
		if (stayOnPage === true) {
			setShowPopup(true);
		}

	}, [stayOnPage === true]);
	const removePopUp = (e) => {
		setShowPopup(e);
		console.log('usao', e);
	};

	const [showPopup, setShowPopup] = useState(false);
	//sending color to popup because purple dont look good on product page
	const color = '#09BA7A';
	return (
		<div className="product-page">
			<PopUp enabled={showPopup} removePopUp={removePopUp} color={color}></PopUp>
			<div className="product-page-container">
				<div className="product-page-img" style={{ backgroundImage: `url(${game.img_url})` }}></div>
				<div className="logo">
					<h1>
						W<img src={'/assets/wog earth.png'} alt="" />
						rld of Games
					</h1>
					<img src={'/assets/wog gray.png'} alt="Logo" className="res-logo" />
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
					<button
						onClick={() => {
							dispatch(addCartItem(game));
						}}
					>
						Buy
					</button>
				</div>
				<div className="empty">
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
			</div>
		</div>
	);
}

export default ProductPage;
