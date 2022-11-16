import React, { Component } from 'react';
import Game from './Game';
import { useContext } from 'react';
import { TypeContext } from '../App';

function AllConsoleGames({ games }) {
	const type = useContext(TypeContext);
	const pcGames = games[0]
		?.filter((game) => game[type])
		.map((game) => {
			return (
				<article className="game-card" key={game.id}>
					<Game game={game}></Game>
				</article>
			);
		});
	console.log(pcGames);
	return (
		
			<section className="pc-catalog-wrap">{pcGames}</section>
		
	);
}

export default AllConsoleGames;
