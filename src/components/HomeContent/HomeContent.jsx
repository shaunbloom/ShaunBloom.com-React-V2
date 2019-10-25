import React from 'react';
import MainNav from '../MainNav/MainNav';
import Twinkle from '../Twinkle/Twinkle';
import HomeText from '../HomeText/HomeText';
import ContactText from '../ContactText/ContactText';

class HomeContent extends React.Component {
	render () {
		return (
			<div>
				<MainNav />
				<div className="background">
					<Twinkle />
					<div className="content fade-in">
						<HomeText />
					</div>
				</div>
			</div>
		);
	}
}

export default HomeContent;