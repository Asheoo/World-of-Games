import Game from '../Game';

function Recommended({ shuffleGames }) {
	const allGames = shuffleGames.slice(0, 5).map((game) => {
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
			<div className="main-catalog-wrap">{allGames}</div>
		</section>
	);
}

export default Recommended;
