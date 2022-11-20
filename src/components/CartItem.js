import { useDispatch } from 'react-redux';
import { removeCartItem } from '../redux/slices/cartItemSlice';

function CartItem({ game, index }) {
	const dispatch = useDispatch();

	const percentage = () => {
		return game.sale ? `-${100 - Math.round((game.curr_price / game.sale) * 100)}% ` : '/';
	};

	const consoles = [game.pc ? 'PC' : null, game.ps ? 'PS' : null, game.xbox ? 'Xbox' : null]
		.filter((console) => {
			return console !== null;
		})
		.map((console) => {
			return (
				<label key={Math.floor(Math.random() * 100)}>
					<div className="cart-radio" >
						<input type="radio" id={game.id} name={game.name} value={console} defaultChecked />
						<p>{console}</p>
					</div>
				</label>
			);
		});

	return (
		<div className="hr">
			<div className="cart-container">
				<div className="cart-card">
					<div className="cart-img" style={{ backgroundImage: `url(${game.img_url})` }}></div>
					<div className="cart-about">
						<h2>{game.name}</h2>
						{consoles}
						<p
							className="remove"
							onClick={() => {
								return dispatch(removeCartItem(index));
							}}
						>
							Remove
						</p>
					</div>
				</div>
				<div className="cart-discount">{percentage()}</div>
				<div className="cart-sale">
					<span className={game.sale ? 'sale-decor' : ""}>{game.sale ? game.sale : game.curr_price}€</span>
				</div>
				<div className="cart-total">{game.curr_price}€</div>
			</div>
			<hr />
		</div>
	);
}

export default CartItem;
