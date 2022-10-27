import React, { Component } from 'react';
import Game from './Game';

function Recommended({ shuffleGames }) {
	// const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

	const allGames = shuffleGames.slice(0, 5)
		.map((game) => {
			return (
				<article className="game-card" key={game.id}>
					<Game game={game}></Game>
				</article>
			);
		});

	return (
		<section className="recommended">
			<h2>
				Recommended for you <i className="fa-solid fa-play"></i>
			</h2>
			<div className="main-catalog-wrap">
				{allGames}
				{/* <div className="game-card">
						<div className="card-img">
						<div className="sale">
						<p>SALE</p>
						</div>
						<div className="blur">
						<p>30 € <span>40€</span></p>
						<span className="cart"><i className="fa-solid fa-cart-shopping"></i></span>
						</div>
						</div>
						<h3>Biomutant <span>2021</span></h3>
						<p>Publisher: THQ Nordic</p>
						</div>
						<div className="game-card">
						<div className="card-img">
						<div className="sale">
						<p>SALE</p>
						</div>
						<div className="blur">
						<p>30 € <span>40€</span></p>
						<span className="cart"><i className="fa-solid fa-cart-shopping"></i></span>
						</div>
						</div>
						<h3>Biomutant <span>2021</span></h3>
						<p>Publisher: THQ Nordic</p>
						</div>
						<div className="game-card">
						<div className="card-img">
						<div className="sale">
						<p>SALE</p>
						</div>
						<div className="blur">
						<p>30 € <span>40€</span></p>
						<span className="cart"><i className="fa-solid fa-cart-shopping"></i></span>
						</div>
						</div>
						<h3>Biomutant <span>2021</span></h3>
						<p>Publisher: THQ Nordic</p>
						</div>
						<div className="game-card">
						<div className="card-img">
						<div className="sale">
						<p>SALE</p>
						</div>
						<div className="blur">
						<p>30 € <span>40€</span></p>
						<span className="cart"><i className="fa-solid fa-cart-shopping"></i></span>
						</div>
						</div>
						<h3>Biomutant <span>2021</span></h3>
						<p>Publisher: THQ Nordic</p>
						</div>
						<div className="game-card">
						<div className="card-img">
						<div className="sale">
						<p>SALE</p>
						</div>
						<div className="blur">
						<p>30 € <span>40€</span></p>
						<span className="cart"><i className="fa-solid fa-cart-shopping"></i></span>
						</div>
						</div>
						<h3>Biomutant <span>2021</span></h3>
						<p>Publisher: THQ Nordic</p>
					</div> */}
			</div>
		</section>
	);
}

export default Recommended;
