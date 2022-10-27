import React, { Component } from 'react';
import Game from './Game';
import { useContext } from 'react';
import { TypeContext } from '../App';


function SaleConsoleGames({games}){
	const type=useContext(TypeContext)
    const pcGames = games[0]
		?.filter((game) => game[type] && game.sale)
		.map((game) => {
			return (
				<article className="game-card" key={game.id}>
					<Game game={game}></Game>
				</article>
			);
		});
    return(
        <div className='pc-catalog-wrap'>
        {pcGames}
    </div>
    )
}


export default SaleConsoleGames