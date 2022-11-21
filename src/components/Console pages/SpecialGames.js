import { useContext } from 'react';
import { TypeContext } from '../../App';
import Game from '../Game';

function SpecialGames({ games }) {
	//context means for which console to show(pc/ps/xbox)
	const type = useContext(TypeContext);
	const pcGames = games[0]
		?.filter((game) => game[type] && game.sale && game.relase_date >= 2022)
		.map((game) => {
			return (
				<article className="game-card" key={game.id}>
					<Game game={game}></Game>
				</article>
			);
		});
	return pcGames[0] ? (
		<section className="pc-catalog-wrap">{pcGames}</section>
	) : (
		<div className="pc-catalog-wrap">
			<h2>There is no games in this category</h2>
		</div>
	);
}

export default SpecialGames;
