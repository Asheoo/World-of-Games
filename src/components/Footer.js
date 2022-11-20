import { useLoadScript } from '@react-google-maps/api';
import Map from './Map';
import '../css/Footer.css';

function Footer() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey:process.env.REACT_APP_API_KEY
	});
	return (

        
		<div className="footer">
			<div className="footer-left">
                <div className='footer-logo'>

				<img src={'/assets/wog gray.png'} alt="Logo" />
                </div>
                <div className='portfolio'>
                <p>Site made by:</p>
                <a href="https://magenta-bunny-9b1373.netlify.app/?fbclid=IwAR1m54h9oq587VI5PYiEw3orHWM4HjzqeD5Rc7MZZgIQ3Pts9y4qA-XaQPs" target="_blank">Veljko Popovic</a>
                </div>
			</div>
			<div>
				<div className="footer-text">
					<p>
						&copy; 2022 World of Games. All rights reserved. All trademarks are the property of
						their respective owners in all countries. VAT is included in all prices where
						applicable.
					</p>
                    <div className='footer-contact'>
                            <h3>Contact info</h3>
                            <p><i className="fa-solid fa-phone"></i> 555-333</p>
                            <p><i className="fa-solid fa-envelope"></i> office@veljkopopovic.com</p>
                    </div>
				</div>
			</div>
			<div className="footer-contact">{!isLoaded ? <p>Loading...</p> : <Map></Map>}</div>
		</div>
	);
}

export default Footer;
