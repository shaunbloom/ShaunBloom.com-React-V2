import React from 'react';
import MainNav from 'MainNav';
import Twinkle from 'Twinkle';
import HomeText from 'HomeText';
import ContactText from 'ContactText';
import { views, times } from 'commonJS';
import FadeProps from 'fade-props';

class HomeContent extends React.Component {
	constructor(props) {
	    super(props);
		this.state = {
			currentView: views.HOME_VIEW
	    };
	    this.updateState = this.updateState.bind(this);	
	}

	updateState (stateConfig) {
		this.setState(()=> {
			return (stateConfig)
		});
	}

	getContent () {
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
					<FadeProps animationLength={times.MEDIUM}>
      					{this.getContent()}
      				</FadeProps>
				</div>
			</div>
		);
	}
}

export default HomeContent;