import React from 'react';
import FrameworkNav from 'FrameworkNav';
import MainNav from 'MainNav';
import HomeContent from 'HomeContent';
import ArtView from 'ArtView';
import PortfolioView from 'PortfolioView';
import ResumeView from 'ResumeView';
import { views, times } from 'commonJS';
import FadeProps from 'fade-props';



class MainView extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	showDynamic: false,
	    	currentView: views.HOME_VIEW
	    };

	    this.updateMainViewState = this.updateMainViewState.bind(this);
	    this.onClose = this.onClose.bind(this);
	}

	onClose() {
		this.setState(()=> {
			return ({showDynamic: false, currentView: views.HOME_VIEW})
		});
	}

	updateMainViewState (stateConfig) {
		this.setState(()=> {
			return (stateConfig)
		});
	}

  	render() {
	    return (
	    	<div>
		    	<FrameworkNav />
		    	<div id="wrapper">
		    		<section id="content" className="drop-shadow main-content">
		    			<HomeContent updateMainViewState={this.updateMainViewState}/>
				    </section>
				    {this.displayDynamicContent()}
		    	</div>
		    </div>
	    );
  	}

  	displayDynamicContent() {
  		let showDynamic = this.state.showDynamic,
  			currentView = this.state.currentView;

  		const dynamicView = () => {
  			switch (currentView) {
  				case views.ART_VIEW :
  					return <ArtView />;
  				case views.RESUME_VIEW :
  					return <ResumeView />;
  				case views.PORTFOLIO_VIEW :
  					return <PortfolioView />;
  			}
  		}

  		if (!showDynamic) return;

  		return (
  			<section id="dynamic-content">
  				<FadeProps animationLength={times.MEDIUM}>
  					<div>
	  					<div id="close" onClick={this.onClose}></div>
	  					{dynamicView()}
					</div>
  				</FadeProps>
  			</section>
  		);
  	} 
}

export default MainView;