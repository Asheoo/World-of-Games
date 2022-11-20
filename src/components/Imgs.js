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
			<input defaultChecked type="radio" name="radio-btn" id="radio1" />
			<input type="radio" name="radio-btn" id="radio2" />
			<input type="radio" name="radio-btn" id="radio3" />
			{allWrapGames}
			<div className="navigation-auto">
				<div className="auto-btn1"></div>
				<div className="auto-btn2"></div>
				<div className="auto-btn3"></div>
			</div>
		</div>
	);
}

export default Imgs;
