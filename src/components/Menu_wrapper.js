import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';
import logo from "../Misc/wog gray.png"

function Menu_wrapper() {
	const location = window.location.href;

	const style1 = {
		borderBottom: '2px solid',
		boxShadow: 'rgba(248, 203, 98, 0.2) 0px -50px 36px -28px inset',
		color: '#f8cb62'
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
			<div className="right-menu">
				
				<Search></Search>
				
				<NavLink to="/cart">
					<i className="fa-solid fa-cart-shopping"></i>
				</NavLink>
				<div className="login">
					<ul>
						<li>Login</li>
						<li>Register</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Menu_wrapper;
