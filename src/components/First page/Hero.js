import '../../css/Hero.css';
import Footer from '../Footer/Footer';
import Menu_wrapper from '../Menu wrapper/Menu_wrapper';
import Imgs from './Imgs';
import NavigationManual from './NavigationManual';
import PageOne from './PageOne';
function Hero({ shuffleGames }) {
	return (
		<>
			<div className="hero-bg">
				<Imgs shuffleGames={shuffleGames}></Imgs>
				<Menu_wrapper></Menu_wrapper>
				<NavigationManual></NavigationManual>
			</div>
			<PageOne shuffleGames={shuffleGames}></PageOne>
			<Footer></Footer>
		</>
	);
}

export default Hero;
