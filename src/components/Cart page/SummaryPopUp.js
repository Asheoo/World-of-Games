import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../config/firebase';
import { useDispatch } from 'react-redux';
import { removeAllCartItems } from '../../redux/slices/cartItemSlice';
import { NavLink } from 'react-router-dom';

function SummaryPopUp({ user, setToggle }) {
    const dispatch=useDispatch()
	const signInWithGoogle = async () => {
		const result = await signInWithPopup(auth, provider);
	};

	return (
		<div>
			<div className="popup">
			
				{user ? (   //Checking if user is logged in
					<>
						<h3>Successful purchase</h3>
						<NavLink to="/" onClick={() => {setToggle(false);dispatch(removeAllCartItems())}}>OK</NavLink>
					</>
				) : (
					<>
						<h3>You must be logged in to order</h3>
						<div>
							<button onClick={signInWithGoogle} className="login-x-btn">Login</button>
							<button onClick={() => setToggle(false)} className="login-x-btn">X</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default SummaryPopUp;
