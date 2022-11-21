import { useContext } from 'react';
import { TypeContext } from '../../App';
import Game from '../Game';


function SaleConsoleGames({games}){
	//context means for which console to show(pc/ps/xbox)
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
        <section className='pc-catalog-wrap'>
        {pcGames}
    </section>
    )
}


export default SaleConsoleGames