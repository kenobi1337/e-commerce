import React from 'react';
import './Home.css';
import Product from './Product';
import mask1 from './image/mask1.jpg';
import mask2 from './image/mask2.png';
import mask3 from './image/mask3.png';
import mask4 from './image/mask4.png';
import mask5 from './image/mask5.jpg';
import mask6 from './image/mask6.jpg';
import mask7 from './image/mask7.jpg';
import mask8 from './image/mask8.jpg';
import overlay from './image/overlay.jpg';
import Countdown from './Countdown';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					alt="overlay"
					src={overlay}
					//src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					className="home__image"
				/>
				<h1
					style={{
						color:
							'rgba(59, 29, 9, 0.877)',
						textAlign: 'center',
						position: 'relative',
						bottom: 50
					}}>
					GOOD LIFE ALL SHOP <br></br>
					Valentine Special sale
					<Countdown></Countdown>
				</h1>
				<div className="home__row">
					<Product
						id="124214"
						title="cotton mask"
						sub="2 per set"
						price={16.99}
						salePrice={8.65}
						image={mask6}
						image2={mask2}
						image3={mask3}
						image4={mask4}
						image5={mask5}
						image6={mask7}
						image7={mask1}
						image8={mask8}
						rating={5}
					/>
					<Product
						id="whole"
						title="cotton mask"
						sub="2 per set"
						wholeSale="Whole Sale 10 set minimum"
						price={100}
						salePrice={80}
						image={mask6}
						image2={mask2}
						image3={mask3}
						image4={mask4}
						image5={mask5}
						image6={mask7}
						image7={mask1}
						image8={mask8}
						rating={5}
						hide={true}
					/>
				</div>
				<div className="home__row">
					<Product
						id="whole"
						title="cotton mask"
						sub="2 per set"
						wholeSale="Whole Sale 10 set minimum"
						price={100}
						salePrice={80}
						image={mask6}
						image2={mask2}
						image3={mask3}
						image4={mask4}
						image5={mask5}
						image6={mask7}
						image7={mask1}
						image8={mask8}
						rating={5}
						show={true}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
