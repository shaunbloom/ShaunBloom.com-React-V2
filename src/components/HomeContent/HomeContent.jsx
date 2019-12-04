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
	}

	updateMainNavState = (stateConfig) => {
		this.setState(()=> {
			return (stateConfig)
		});
	}

	getContent () {
		let currentView = this.state.currentView;

  		if (currentView === views.HOME_VIEW) {
  			return <HomeText updateState={this.updateMainNavState} />;
  		} else if (currentView === views.CONTACT_VIEW) {
  			return <ContactText updateState={this.updateMainNavState} />;	
  		}	
	}

	shouldComponentUpdate(nextProps, nextState) {
	    if (this.state === nextState) return false;
	    return true;
	}

	render () {
		let updateMainViewState = this.props.updateMainViewState;

		return (
			<div>
				<MainNav updateMainNavState={this.updateMainNavState} updateMainViewState={updateMainViewState}/>
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