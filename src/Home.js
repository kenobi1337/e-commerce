import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className='home'>
			<div className='home__container'>
				<img
					alt='overlay'
					src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
					className='home__image'
				/>

				<div className='home__row'>
					<Product
						id='124214'
						title='The lean startup'
						price={29.99}
						image='https://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg'
						rating={3}
					/>
					<Product
						id='1242554'
						title='The lean startup'
						price={29.99}
						image='https://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg'
						rating={3}
					/>
				</div>
				<div className='home__row'>
					<Product
						id='9273546'
						title='The lean startup'
						price={29.99}
						image='https://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg'
						rating={3}
					/>
					<Product
						id='2356235'
						title='The lean startup'
						price={29.99}
						image='https://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg'
						rating={3}
					/>
					<Product
						id='238640'
						title='The lean startup'
						price={29.99}
						image='https://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg'
						rating={3}
					/>
				</div>
				<div className='home__row'>
					<Product
						id='8320235'
						title='The lean startup'
						price={29.99}
						image='https://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg'
						rating={3}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
