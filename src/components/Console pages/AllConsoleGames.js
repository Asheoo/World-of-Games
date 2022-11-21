import { useContext } from 'react';
import { TypeContext } from '../../App';
import Game from '../Game';

function AllConsoleGames({ games }) {
	//context means for which console to show(pc/ps/xbox)
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
	return (
		
			<section className="pc-catalog-wrap">{pcGames}</section>
		
	);
}

export default AllConsoleGames;
