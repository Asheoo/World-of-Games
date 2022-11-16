import React, { Component } from 'react';
import '../css/HamburgerMenu.css';
import Search from './Search';
import { NavLink } from 'react-router-dom';

function HamburgerMenu({ user, signInWithGoogle, signUserOut }) {
	return (
		<div className="hamburger-menu">
			<div className="hamburger-right-menu">
				<Search></Search>
				<NavLink to="/cart" className="cart-icon">
					<i className="fa-solid fa-cart-shopping"></i>
				</NavLink>
				<div>
					<div className="hamburger-menu-menu">
						<ul>
							<li>
								<NavLink to="/" end>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to="/pc/:all/all">PC</NavLink>
							</li>
							<li>
								<NavLink to="/playstation/:all/all">PlayStation</NavLink>
							</li>
							<li>
								<NavLink to="/xbox/:all/all">Xbox</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<div className="hamburger-menu-login">
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
		</div>
	);
}

export default HamburgerMenu;
