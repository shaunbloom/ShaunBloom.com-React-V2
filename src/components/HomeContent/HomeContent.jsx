import React from 'react';
import MainNav from '../MainNav/MainNav';
import Twinkle from '../Twinkle/Twinkle';
import HomeText from '../HomeText/HomeText';
import ContactText from '../ContactText/ContactText';
import { views } from 'commonJS';

class HomeContent extends React.Component {
	constructor(props) {
	    super(props);
	}

	displayHomeOrContact() {
  		let currentView = this.props.currentView,
  			updateState = this.props.updateState;

  		if (currentView === views.HOME_VIEW) {
  			return <HomeText updateState={updateState} />;
  		} else if (currentView === views.CONTACT_VIEW) {
  			return <ContactText updateState={updateState} />;	
  		}
  	}

	render () {
		let updateState = this.props.updateState;

		return (
			<div>
				<MainNav updateState={updateState}/>
				<div className="background">
					<Twinkle />
					<div className="content fade-in">
						{this.displayHomeOrContact()}
					</div>
				</div>
			</div>
		);
	}
}

export default HomeContent;