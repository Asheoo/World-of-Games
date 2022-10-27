import React, { Component } from 'react';
import GameWrap from './GameWrap';

function Imgs({ shuffleGames }) {
	const allWrapGames = shuffleGames
		.filter((game) => game.info)
		.map((game, index) => {
			const firstIndex=index!==0? "slide" : "slide first"
			return (
				<div  className={firstIndex} key={game.id}>

					<GameWrap game={game} index={index} ></GameWrap>
				</div>
			);
		});

	return (
		<div className="imgs">
			<input type="radio" name="radio-btn" id="radio1" />
			<input type="radio" name="radio-btn" id="radio2" />
			<input type="radio" name="radio-btn" id="radio3" />
			{allWrapGames}
			{/* 
				<div className="slide first">
                <img src={require('../Misc/hero-bg.png')} />
					<div className="sekcija-one">
						<div className="main-logo"></div>
						<div className="main-info">
							<h2>The lich king returns</h2>
							<p>
								The Wrath of the Lich King Classic pre-expansion event is underway! Get a Northrend
								Epic Upgrade to receive a Level 70 Character Boost, a pet, a toy, as well as two
								mounts—one for World of Warcraft, and one of Wrath of the Lich King Classic—along
								with 30 days of game time.
							</p>
							<div className="price-btn">
								<p>35&euro;</p>
								<button>buy</button>
							</div>
						</div>
					</div>
				</div>
				<div className="slide">
                <img src={require('../Misc/HogwartsLegacy.jpg')} />
					<div className="sekcija-one">
						<div className="main-logo"></div>
						<div className="main-info">
							<h2>The lich king returns</h2>
							<p>
								The Wrath of the Lich King Classic pre-expansion event is underway! Get a Northrend
								Epic Upgrade to receive a Level 70 Character Boost, a pet, a toy, as well as two
								mounts—one for World of Warcraft, and one of Wrath of the Lich King Classic—along
								with 30 days of game time.
							</p>
							<div className="price-btn">
								<p>35€</p>
								<button>buy</button>
							</div>
						</div>
					</div>
				</div>
				<div className="slide">
					<img src={require('../Misc/CyberPunk.jpg')} />
					<div className="sekcija-one">
						<div className="main-logo"></div>
						<div className="main-info">
							<h2>The lich king returns</h2>
							<p>
								The Wrath of the Lich King Classic pre-expansion event is underway! Get a Northrend
								Epic Upgrade to receive a Level 70 Character Boost, a pet, a toy, as well as two
								mounts—one for World of Warcraft, and one of Wrath of the Lich King Classic—along
								with 30 days of game time.
							</p>
							<div className="price-btn">
								<p>35&euro;</p>
								<button>buy</button>
							</div>
						</div>
					</div>
				</div>*/}
			<div className="navigation-auto">
				<div className="auto-btn1"></div>
				<div className="auto-btn2"></div>
				<div className="auto-btn3"></div>
			</div>
		</div>
	);
}

export default Imgs;
