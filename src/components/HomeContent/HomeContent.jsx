import React from 'react';
import MainNav from '../MainNav/MainNav';
import Twinkle from '../Twinkle/Twinkle';
import HomeText from '../HomeText/HomeText';
import ContactText from '../ContactText/ContactText';
import { views } from 'commonJS';

class HomeContent extends React.Component {
	constructor(props) {
	    super(props);
		this.state = {
			currentView: views.HOME_VIEW
	    };
	    this.updateState = this.updateState.bind(this);	
	}

	updateState(stateConfig) {
		this.setState(()=> {
			return (stateConfig)
		});
	}

	displayHomeOrContact() {
  		let currentView = this.state.currentView;

  		if (currentView === views.HOME_VIEW) {
  			return <HomeText updateState={this.updateState} />;
  		} else if (currentView === views.CONTACT_VIEW) {
  			return <ContactText updateState={this.updateState} />;	
  		}
  	}

	render () {
		return (
			<div>
				<MainNav updateState={this.updateState}/>
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