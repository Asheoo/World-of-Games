import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';
import { auth, provider } from '../config/firebase';
import { signInWithRedirect, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import HamburgerMenu from './HamburgerMenu';
import { useSelector } from 'react-redux';
import PopUp from './PopUp';

function Menu_wrapper() {
	const cartItems = useSelector((state) => state?.cartItem.value);
	const location = window.location.href;
	const [menu, setMenu] = useState(false);
	const [user] = useAuthState(auth);
	const style1 = {
		borderBottom: '2px solid',
		boxShadow: 'rgba(248, 203, 98, 0.2) 0px -50px 36px -28px inset',
		color: '#f8cb62'
	};
	const [enabled, setEnabled] = useState(false);

	const signInWithGoogle = async () => {
		const result = await signInWithRedirect(auth, provider);
	};
	const signUserOut = async () => {
		await signOut(auth);
	};

	const handlePopup = () => {
		setEnabled(true);
	};

	const removePopUp = () => {
		setEnabled(false);
	};
	return (
		<div className="menu-wrapper">
			<header>
				<img src={'/assets/wog gray.png'} alt="Logo" />
			</header>
			<div className="menu">
				<ul>
					<li>
						<NavLink to="/" end>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							style={location.includes('/pc/:all/') ? { ...style1 } : null}
							to="/pc/:all/all"
						>
							PC
						</NavLink>
					</li>
					<li>
						<NavLink
							style={location.includes('/playstation/:all/') ? { ...style1 } : null}
							to="/playstation/:all/all"
						>
							PlayStation
						</NavLink>
					</li>
					<li>
						<NavLink
							style={location.includes('/xbox/:all/') ? { ...style1 } : null}
							to="/xbox/:all/all"
						>
							Xbox
						</NavLink>
					</li>
				</ul>
			</div>
			<div
				className="right-menu"
				style={
					user?.email === 'veljkopopovic33@gmail.com'
						? { width: '78vh' }
						: user
						? { width: '65vh' }
						: null
				}
			>
				<Search></Search>

				{cartItems < 1 ? (
					<NavLink className="cart-icon">
						<PopUp enabled={enabled} text={true} removePopUp={removePopUp}></PopUp>
						<i onClick={handlePopup} className="fa-solid fa-cart-shopping"></i>
					</NavLink>
				) : (
					<NavLink to="/cart" className="cart-icon">
						<i className="fa-solid fa-cart-shopping"></i>
					</NavLink>
				)}

				<div className="login">
					{!user ? (
						<p onClick={signInWithGoogle}>Login</p>
					) : (
						<>
							<h4>{user?.displayName}</h4>
							<img src={user?.photoURL} alt="#" />
							<p onClick={signUserOut} className="logout">
								Sign out
							</p>
							{user.email === 'veljkopopovic33@gmail.com' && (
								<NavLink to="/products">Manage Products</NavLink>
							)}
						</>
					)}
				</div>
			</div>
			<a
				href="#"
				className="toggle-button"
				onClick={(e) => {
					e.preventDefault();
					setMenu(!menu);
				}}
			>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</a>
			{menu && (
				<HamburgerMenu
					user={user}
					signInWithGoogle={signInWithGoogle}
					signUserOut={signUserOut}
				></HamburgerMenu>
			)}
		</div>
	);
}

export default Menu_wrapper;
