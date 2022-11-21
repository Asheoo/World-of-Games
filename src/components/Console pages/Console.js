import Footer from '../Footer/Footer';
import Menu_wrapper from '../Menu wrapper/Menu_wrapper';
import ConsolePage from './ConsolePage';

function Console() {
	return (
			<>
		<div className='pc-div'>

			<Menu_wrapper></Menu_wrapper>
			<ConsolePage></ConsolePage>
		</div>
			<Footer></Footer>
			</>
	);
}

export default Console;
