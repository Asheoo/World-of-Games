import { useDispatch } from 'react-redux';
import { addCartItem } from '../redux/slices/cartItemSlice';

function GameWrap({ game }) {
	const dispatch = useDispatch();

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
								dispatch(addCartItem(game));
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
