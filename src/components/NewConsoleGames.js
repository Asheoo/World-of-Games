import React, { useContext } from 'react';
import Game from './Game';
import { TypeContext } from '../App';

function NewConsoleGames({ games }) {
	const type = useContext(TypeContext);
	console.log(type);
	const pcGames = games[0]
		?.filter((game) => game[type] && game.relase_date >= 2022)
		.map((game) => {
			return (
				<article className="game-card" key={game.id}>
					<Game game={game}></Game>
				</article>
			);
		});

	return <section className="pc-catalog-wrap">{pcGames}</section>;
}

export default NewConsoleGames;
