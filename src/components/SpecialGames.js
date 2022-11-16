import React, { Component,useContext } from 'react';
import Game from './Game';
import { TypeContext } from '../App';
function SpecialGames({games}){
    const type=useContext(TypeContext)
    const pcGames = games[0]
		?.filter((game) => game[type] && game.sale && game.relase_date>=2022)
		.map((game) => {
			return (
				<article className="game-card" key={game.id}>
					<Game game={game}></Game>
				</article>
			);
		});
    return(
       pcGames[0] ? <section className='pc-catalog-wrap'>
       {pcGames}
   </section> : <div className='pc-catalog-wrap'><h2>There is no games in this category</h2></div>
    )
}

export default SpecialGames