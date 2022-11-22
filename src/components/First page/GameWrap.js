import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCartItem, setStayOnPage } from '../../redux/slices/cartItemSlice';

function GameWrap({ game }) {
	const dispatch = useDispatch();
	const navigate=useNavigate();
	const cartItems=useSelector(value=>value?.cartItem.value)

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
		<div>
			<img src={game.wrap_img} className="wrap-img" />
			<div className="sekcija-one">
				<div style={{ backgroundImage: `url(${game.logo})` }} className="main-logo"></div>
				<div className="main-info">
					<h2>{game.header}</h2>
					<p>{game.info}</p>
					<div className="price-btn">
						<p>{game.curr_price}&euro;</p>
						<button
							onClick={(e) => {
								checkIfGameExist()
								// dispatch(addCartItem(game));
							}}
						>
							buy
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GameWrap;
