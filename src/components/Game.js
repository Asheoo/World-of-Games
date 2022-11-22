import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCartItem, setStayOnPage } from '../redux/slices/cartItemSlice';

import { openGame } from '../redux/slices/openGamePageSlice';

function Game({ game,delBorder,handleDelete,handleUpdate }) {

	const cartItems = useSelector((state) => state?.cartItem.value);
	const navigate = useNavigate();
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

	const scrollToTop=()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

	const checkIfGameExist=()=>{
		const inCart = cartItems.find((item) => item.id === game.id);
		if(!inCart){
			dispatch(addCartItem(game));
			navigate('/cart');
		}else{
			dispatch(setStayOnPage())
		}
	}

	return (
		
		<div className={delBorder? "manage-game-border" : 'game-card-border'} onClick={()=>{!delBorder && dispatch(openGame(game)) }}>

			<div style={{ backgroundImage: `url(${game.img_url})` }} className="card-img">
				{newSale}
				<div className="blur">
					<p>
						{game.curr_price} € <span>{game.sale !=0 ? game.sale : ''}</span>
					</p>
					<span
						onClick={(e) => {
							e.stopPropagation();
							checkIfGameExist()
							// dispatch(addCartItem(game));
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
				{delBorder?
				<>
				<button onClick={()=>{handleDelete(game)}} className="manage-btn delete">Delete</button>
				<button className='manage-btn edit' onClick={()=>{handleUpdate(game);scrollToTop()}}>Edit</button>
				</>
				: ''}
			</div>
		
			</div>
	);
}

export default Game;
