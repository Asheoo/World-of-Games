import Menu_wrapper from './Menu_wrapper';
import ConsolePage from './ConsolePage';
import Footer from './Footer';

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
