import Imgs from './Imgs';
import Menu_wrapper from './Menu_wrapper';
import NavigationManual from './NavigationManual';
import PageOne from './PageOne';
import '../css/Hero.css';

function Hero({ shuffleGames }) {
	return (
		<>
			<div className="hero-bg">
				<Imgs shuffleGames={shuffleGames}></Imgs>
				<Menu_wrapper></Menu_wrapper>
				<NavigationManual></NavigationManual>
			</div>
			<PageOne shuffleGames={shuffleGames}></PageOne>
		</>
	);
}

export default Hero;
