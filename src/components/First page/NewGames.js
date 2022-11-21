import Game from '../Game';

function NewGames({ games }) {
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
			<div className="main-catalog-wrap">{allGames}</div>
		</section>
	);
}

export default NewGames;
