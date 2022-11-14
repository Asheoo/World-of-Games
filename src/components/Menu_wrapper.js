import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';
import logo from '../Misc/wog gray.png';
import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { async } from '@firebase/util';

function Menu_wrapper() {
	const location = window.location.href;

	const [user] = useAuthState(auth);
	const style1 = {
		borderBottom: '2px solid',
		boxShadow: 'rgba(248, 203, 98, 0.2) 0px -50px 36px -28px inset',
		color: '#f8cb62'
	};

	// console.log(location);
	const signInWithGoogle = async () => {
		const result = await signInWithPopup(auth, provider);
	};
	const signUserOut = async () => {
		await signOut(auth);
	};
	return (
		<div className="menu-wrapper">
			<header>
				<img src={logo} alt="" />
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
			<div className="right-menu" style={user ? {width:"78vh"} : null}>
				<Search></Search>

				<NavLink to="/cart">
					<i className="fa-solid fa-cart-shopping"></i>
				</NavLink>
				<div className="login">
					{!user ? (
						<p onClick={signInWithGoogle}>Login</p>
					) : (
						<>
							<h4>{user?.displayName}</h4> 
							<img src={user?.photoURL} alt="Profile Picture" />
							<p onClick={signUserOut} className="logout">Sign out</p>
							<NavLink to="/products">Manage Products</NavLink>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default Menu_wrapper;
