import React, { Component, useEffect } from 'react';
import Game from './Game';

function NewGames({ games }) {
	// const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
	const allGames = games[0]
		?.filter((game) => game.relase_date >= 2022)
		.slice(0, 5)
		.map((game) => {
			return (
				<article className="game-card" key={game.id}>
					<Game game={game}></Game>
				</article>
			);
		});
		
	return (
		<section className="new-games">
			<h2>
				New Games <i className="fa-solid fa-play"></i>
			</h2>
			<div className="main-catalog-wrap">
				{allGames}
				{/* <div className="game-card">
						<div className="card-img">
							<div className="new">
								<p>NEW</p>
							</div>
							<div className="blur">
								<p>30 €</p>
								<span className="cart"><i className="fa-solid fa-cart-shopping"></i></span>
							</div>
						</div>
						<h3>Biomutant <span>2021</span></h3>
						<p>Publisher: THQ Nordic</p>
					</div>
					<div className="game-card">
						<div className="card-img">
							<div className="new">
								<p>NEW</p>
							</div>
							<div className="blur">
								<p>30 €</p>
								<span className="cart"><i className="fa-solid fa-cart-shopping"></i></span>
							</div>
						</div>
						<h3>Biomutant <span>2021</span></h3>
						<p>Publisher: THQ Nordic</p>
					</div>
					<div className="game-card">
						<div className="card-img">
							<div className="new">
								<p>NEW</p>
							</div>
							<div className="blur">
								<p>30 €</p>
								<span className="cart"><i className="fa-solid fa-cart-shopping"></i></span>
							</div>
						</div>
						<h3>Biomutant <span>2021</span></h3>
						<p>Publisher: THQ Nordic</p>
					</div>
					<div className="game-card">
						<div className="card-img">
							<div className="new">
								<p>NEW</p>
							</div>
							<div className="blur">
								<p>30 €</p>
								<span className="cart"><i className="fa-solid fa-cart-shopping"></i></span>
							</div>
						</div>
						<h3>Biomutant <span>2021</span></h3>
						<p>Publisher: THQ Nordic</p>
					</div>
					<div className="game-card">
						<div className="card-img">
							<div className="new">
								<p>NEW</p>
							</div>
							<div className="blur">
								<p>30 €</p>
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

export default NewGames;
